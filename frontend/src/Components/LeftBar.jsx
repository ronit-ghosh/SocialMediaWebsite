import React from 'react';
import { Box, Typography, Avatar, Badge, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Home, Search, Explore, Notifications, AddCircle, MoreHoriz } from '@mui/icons-material';
import { RiMessage3Line, RiVideoLine } from 'react-icons/ri'; 
import InstagramIcon from './InstagramIcon';
import {styled} from "@mui/material/styles"

const ScrollableBox = styled(Box)(({ theme }) => ({
  maxHeight: 'calc(100vh - 120px)', 
  overflowY: 'auto',
  overflowX: 'hidden',
  position:'relative',
  bottom:60,
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.grey[600],
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: theme.palette.grey[500], 
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.grey[800],
  },
}));


const LeftBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        width: 240,
        bgcolor: 'black',
        color: 'white',
        p: 2,
      }}
    >
      <Box sx={{ mb: 4 }}>
        <InstagramIcon />
      </Box>
      <ScrollableBox>
      <List>
        <MenuItem Icon={Home} label="Home" />
        <MenuItem Icon={Search} label="Search" />
        <MenuItem Icon={Explore} label="Explore" />
        <MenuItem Icon={RiVideoLine} label="Reels" iconSize={{ width: 40, height: 40 }} />
        <MenuItem Icon={RiMessage3Line} label="Messages" notificationCount={0} iconSize={{ width: 40, height: 40 }} />
        <MenuItem Icon={Notifications} label="Notifications" notificationCount={2} />
        <MenuItem Icon={AddCircle} label="Create" />
        <MenuItem Icon={Avatar} label="Profile" />
      </List>

      <Divider sx={{ bgcolor: '#333' }} />
      <ListItem button sx={{ mt: 2 }}>
        <ListItemIcon sx={{ color: 'white' }}>
          <MoreHoriz />
        </ListItemIcon>
        <ListItemText primary="More" />
      </ListItem>
      </ScrollableBox>
      
    </Box>
  );
};

const MenuItem = ({ Icon, label, notificationCount, iconSize }) => {
  return (
    <ListItem
      button="true"
      sx={{
        mb: 2,
        borderRadius:5,
        '&:hover': {
          bgcolor: 'lightgrey',
          color: 'black',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        },
      }}
    >
      <ListItemIcon sx={{ color: 'white' }}>
        {notificationCount > 0 ? (
          <Badge
            badgeContent={notificationCount}
            color="error"
            sx={{ '& .MuiBadge-badge': { right: -3, top: 5 } }} 
          >
            <IconButton sx={{ color: 'white', ...iconSize }}>
              <Icon />
            </IconButton>
          </Badge>
        ) : (
          <IconButton sx={{ color: 'white', ...iconSize }}>
            <Icon />
          </IconButton>
        )}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
};


export default LeftBar;
