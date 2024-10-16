import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const containerStyle = {
  backgroundColor: '#fff',
  textAlign: 'center',
  padding: 1,  
  color: 'text.secondary',
  wordWrap: 'break-word',
  borderRadius:'10px ',
  border:'1px solid black'

};

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} sx={{ marginTop: 3 }}>
        <Grid item xs={6} md={2}>
          <Container sx={containerStyle}>xs=6 md=8</Container>
        </Grid>
        <Grid item xs={6} md={6}>
          <Container sx={containerStyle}>xs=6 md=8</Container>
        </Grid>
        <Grid item xs={6} md={4}>
          <Container sx={containerStyle}>xs=6 md=4</Container>
        </Grid>
      </Grid>
    </Box>
  );
}
