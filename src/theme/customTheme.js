import { createTheme } from "@mui/material";

export const customTheme = createTheme({
    palette: {
        primary: {
            main: "#141414",
            dark: "#212121",
            contrastText: "#4e4e4e",
        },
        secondary: {
            main: "#f5c615",
        },
        default: {
            main: "#ffffff",
        }
    },
})