import { Box } from "@mui/material";
import { Newsletter } from "./newsletter";
import { Information } from "./information";
import { Copyright } from "./copyright";

export const Footer = () => {

    return (
        <Box component="footer">
            <Newsletter />
            <Information />
            <Copyright />
        </Box>
    );
}