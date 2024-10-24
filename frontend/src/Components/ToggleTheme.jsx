import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useRecoilState } from "recoil";
import toggleTheme from "../store/toggleThemeAtom";

const ToggleTheme = () => {
    const [mode, setMode] = useRecoilState(toggleTheme);
    const [isDark, setIsDark] = useState(mode === 'dark');

    useEffect(() => {
        isDark ? setMode('dark') : setMode('light');
    }, [isDark, mode]);

    return (
        <>
            <Button
                sx={{
                    bgcolor: "background.default",
                    borderRadius: {
                        xs:'50%',
                        sm:'50%',
                        md:'50%',
                        lg:'10px'
                    },
                    mt: 2,
                    color: 'text',
                    ":hover": {
                        bgcolor: "background.paper"
                    },
                    color: "text.primary",
                    display: "flex",
                    justifyContent: 'left',
                    py: {
                        xs: 0,
                        sm: 0,
                        ms: 0,
                        lg: 2
                    },
                    gap: 2
                }}
                onClick={() => setIsDark(!isDark)}
            >
                {isDark ? <DarkModeIcon /> : <LightModeIcon />}
                <Typography sx={{
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'none',
                        lg: 'block'
                    }
                }}>{isDark ? "Dark Mode" : "Light Mode"}</Typography>
            </Button>
        </>
    )
}

export default ToggleTheme;