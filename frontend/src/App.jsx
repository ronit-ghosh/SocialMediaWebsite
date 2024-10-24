import Grid from '@mui/material/Grid2';
import { Container, CssBaseline } from '@mui/material';
import LeftBar from './Components/LeftBar';
import { useCustomTheme } from './hooks/useCustomTheme';
import { ThemeProvider } from '@emotion/react';
import Topbar from './Components/Topbar';
import Posts from './Components/Posts';
import Rightbar from './Components/Rightbar';

export default function App() {
  const theme = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        width={'100%'}
        spacing={0} >
        <Grid
          container
          sx={{
            width: {
              xs: '7%',
              sm: '7%',
              md: '7%',
              lg: '16%'
            },
            height:'100dvh',
            position:'fixed',
            zIndex:10
          }}>
          <LeftBar />
        </Grid>
        <Grid
          sx={{
            position:'absolute',
            left: {
              xs: '0%',
              sm: '0%',
              md: '7%',
              lg: '16%'
            },
            width: {
              xs: '100%',
              sm: '100%',
              md: '93%',
              lg: '84%'
            },
          }}  >
          <Container sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <Container sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 5,
              mt: 3,
              mx:{
                md:0,
              }
            }}>
              <Topbar />
              <Posts />
              <Posts />
              <Posts />
            </Container>
            <Container sx={{
              width: '20%',
              display: {
                xs: 'none',
                sm: 'none',
                md: 'none',
                lg: 'block',
              }
            }}>
              <Rightbar />
            </Container>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
