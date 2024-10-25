import { Avatar, Badge, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Home, Search, Explore, Notifications, AddCircle } from '@mui/icons-material';
import { RiMessage3Line, RiVideoLine } from 'react-icons/ri';
import ToggleTheme from './ToggleTheme';

const LeftBar = () => {
  return (
    <List
      sx={{
        outline: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: {
          xs: 70,
          sm: 70,
          md: 70,
          lg: 240,
        },
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 2,
        borderRight: '1px solid gray',
        '@media (max-width: 900px)': {
          flexDirection:'row',
          borderRight:0,
          borderTop: '1px solid gray',
          position:'fixed',
          bottom:0,
          width:'100%',
          height:70,
        }
      }}>
      <MenuItem Icon={Home} label="Home" />
      <MenuItem Icon={Search} label="Search" />
      <MenuItem Icon={Explore} label="Explore" />
      <MenuItem Icon={RiVideoLine} label="Reels" iconSize={{ width: 40, height: 40 }} />
      <MenuItem Icon={RiMessage3Line} label="Messages" notificationCount={0} iconSize={{ width: 40, height: 40 }} />
      <MenuItem Icon={Notifications} label="Notifications" notificationCount={2} />
      <MenuItem Icon={AddCircle} label="Create" />
      <MenuItem Icon={Avatar} label="Profile" />
      <Divider />
      <ToggleTheme />
    </List>
  );
};

const MenuItem = ({ Icon, label, notificationCount, iconSize }) => {
  return (
    <ListItem
      button="true"
      sx={{
        mb: 2,
        pl: 0,
        borderRadius: '10px',
        '&:hover': {
          bgcolor: 'background.paper',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        },
      }}
    >
      <ListItemIcon>
        {notificationCount > 0 ? (
          <Badge
            badgeContent={notificationCount}
            color="error"
            sx={{ '& .MuiBadge-badge': { right: 12, top: 14 } }}
          >
            <IconButton sx={{ color: 'text.primary', ...iconSize }}>
              <Icon sx={{ fontSize: 29 }} />
            </IconButton>
          </Badge>
        ) : (
          <IconButton sx={{ color: 'text.primary', ...iconSize }}>
            <Icon sx={{ fontSize: 29 }} />
          </IconButton>
        )}
      </ListItemIcon>
      <ListItemText
        sx={{
          display: {
            xs: 'none',
            sm: 'none',
            md: 'none',
            lg: 'block',
          }
        }}
        primary={label} />
    </ListItem>
  );
};

export default LeftBar;
