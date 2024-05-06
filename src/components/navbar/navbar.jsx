import { AppBar } from "@mui/material";
import { NavInf } from "./navInf";
import { NavSup } from "./navSup";

export const SearchAppBar = () => {
    
    return (
        <AppBar component="nav" position="sticky">
            <NavSup/>
            <NavInf/>
        </AppBar>
    );
}