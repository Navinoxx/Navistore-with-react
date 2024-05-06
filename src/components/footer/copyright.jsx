import { Box, Link, Typography } from "@mui/material";

export const Copyright = () => {

    return (
        <Box sx={{ bgcolor: 'primary.main', py: 4, color: 'white' }}>
            <Typography variant="body2" align="center">
                {"Copyright © "}
                <Link sx={{ color: 'secondary.main', textDecoration: 'none' }} href="https://github.com/Navinoxx" target="_blank">
                    Navinoxx
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        </Box>
    );
}