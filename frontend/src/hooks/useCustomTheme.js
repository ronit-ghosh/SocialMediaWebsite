import { createTheme } from '@mui/material/styles';
import { useEffect, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import toggleTheme from '../store/toggleThemeAtom';

export const useCustomTheme = () => {
  const mode = useRecoilValue(toggleTheme)
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
              primary: {
                main: '#0095f6',
              },
              background: {
                default: '#ffffff',
                paper: '#f2f2f2',
              },
              text: {
                primary: '#000000',
                secondary: '#939393',
              },
            }
            : {
              primary: {
                main: '#0095f6',
              },
              background: {
                default: '#000000',
                paper: '#1a1a1a',
              },
              text: {
                primary: '#f5f5f5',
                secondary: '#9b9b9b',
              },
            }),
        },
      }),
    [mode]
  );

  // Saves the theme in localstorage 
  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  return theme;
};
