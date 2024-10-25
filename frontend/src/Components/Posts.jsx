import { useState } from 'react';
import { Box, Input, Typography, Card, CardHeader, CardMedia, CardContent, Avatar, } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Posts = () => {
  // will fetch by api call
  const text = "zzzzzzzz zzz zzzzzzzzz zzzzzzzzz zzzzzzzzz zzzzzzzzz zzzzzzzzz zzzzzzzzz zzzzzzzzz z z zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzz zzzzzzzzz zzzzzzzzz";
  const comments = 21;

  const [showMore, setShowMore] = useState(true);
  const [isSaved, setIsisSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false)

  return (
    <Card
      sx={{
        width: "470px",
        bgcolor: "background.default"
      }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ cursor: "pointer" }}
            alt="Remy Sharp"
            src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185628/Asset-1-8-300x300.png"
          />
        }
        title="username_."
        subheader="uploaded 1m ago"
      />
      <CardMedia
        component="img"
        sx={{
          objectFit: "contain",
          minHeight: "468px",
          maxHeight: "585px"
        }}
        image="https://travel.usnews.com/images/Times_Square_Getty.jpg"
        alt="Paella dish"
      />
      <CardContent sx={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}>
          {
            isLiked ?
              <FavoriteIcon
                onClick={() => setIsLiked(false)}
                sx={{ cursor: "pointer" }} />
              :
              < FavoriteBorderIcon
                onClick={() => setIsLiked(true)}
                sx={{ cursor: "pointer" }} />
          }
          <MapsUgcOutlinedIcon
            onClick={() => console.log('hi')}
            sx={{ cursor: "pointer" }} />
          <SendOutlinedIcon
            onClick={() => console.log('hi')}
            sx={{ cursor: "pointer" }} />
        </Box>
        {
          isSaved ?
            <BookmarkIcon
              onClick={() => setIsisSaved(false)}
              sx={{ cursor: "pointer" }} />
            :
            <BookmarkBorderOutlinedIcon
              onClick={() => setIsisSaved(true)}
              sx={{ cursor: "pointer" }} />
        }
      </CardContent>
      <CardContent sx={{
        pb: 0,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        textOverflow: 'ellipsis',
        ...(showMore ? { height: '40px' } : ''),
      }}>
        {text}
      </CardContent>
      <CardContent sx={{
        py: 0,
        my: 0
      }}>
        {
          text.length > '50' ?
            <Typography
              variant="body2"
              color="primary"
              sx={{ cursor: 'pointer' }}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'show more' : 'show less'}
            </Typography> : ''
        }
      </CardContent>
      <CardContent>
        <Typography
          variant='body2'
          sx={{
            color: 'text.secondary'
          }} >
          View all {comments} comments
        </Typography>
        <Input
          sx={{
            width: "100%"
          }}
          placeholder="Add a comment..." />
      </CardContent>
    </Card>
  );
};

export default Posts;
