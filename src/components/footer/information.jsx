import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Grid, Link, Typography, Container } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export const Information = () => {

    return (
        <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 6 }}>
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            About us
                        </Typography>
                        <Typography variant="body2">
                            Welcome to Navistore, your trusted online store for all your shopping needs. We are proud to offer a wide selection of high-quality products and provide excellent customer service.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Contact us
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                            {<PlaceIcon sx={{color: 'secondary.main', fontSize: 15, marginRight: 1}}/>}123 Main Street, Capital, Bs As
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                            {<EmailIcon sx={{color: 'secondary.main', fontSize: 15, marginRight: 1}}/>}Email: info@example.com
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                            {<LocalPhoneIcon sx={{color: 'secondary.main', fontSize: 15, marginRight: 1}}/>}Tel: +1 234 567 8901
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Follow us
                        </Typography>
                        <Link href="https://www.facebook.com/" color="inherit" sx={{ '&:hover': { color: 'secondary.main' }}} target="_blank">
                            <Facebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/"
                            color="inherit"
                            sx={{ paddingX: '0.5rem', '&:hover': { color: 'secondary.main' }}}
                            target="_blank"
                        >
                            <Instagram />
                        </Link>
                        <Link href="https://www.twitter.com/" color="inherit" sx={{ '&:hover': { color: 'secondary.main' }}} target="_blank">
                            <Twitter />
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}