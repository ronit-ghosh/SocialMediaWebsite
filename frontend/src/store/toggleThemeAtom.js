import { atom } from "recoil";

// getting user's preferred theme and localstorage theme if saved
const getPreferredTheme = () => {
  const theme = localStorage.getItem('theme');
  if (theme) return theme;
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return isDark ? 'dark' : 'light';
}

const toggleTheme = atom({
  key: "toggleTheme",
  default: getPreferredTheme()
});


export default toggleTheme;