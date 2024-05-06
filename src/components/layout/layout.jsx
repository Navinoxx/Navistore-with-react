import { ThemeProvider } from "@mui/material";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { SearchAppBar } from "../navbar/navbar"
import { Footer } from "../footer/footer"
import { customTheme } from "../../theme/customTheme";

export const Layout = () => {

    return (
        <ThemeProvider theme={customTheme}>
            <ScrollRestoration />
            <SearchAppBar/>
            <Outlet />
            <Footer/>
        </ThemeProvider>
    );
}