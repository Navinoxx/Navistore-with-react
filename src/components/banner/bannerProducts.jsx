import { Box, Container, Grid, Typography } from "@mui/material";
import bg1 from "../../assets/bannerProducts/banner-products1.png";
import bg2 from "../../assets/bannerProducts/banner-products2.png";
import bg3 from "../../assets/bannerProducts/banner-products3.png";
import { BuyButton } from "../buttons/buyButton";

export const BannerProducts = () => {

    return (
        <Box component="section" sx={{ width: '100%' }}>
            <Container maxWidth="xl" sx={{ marginY: '8rem' }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={8} md={4}>
                        <Box sx={{ display: 'flex', height: '12rem', bgcolor: '#e7e7e7', position: 'relative', ":hover": { transform: 'scale(1.05)' }, transition: 'transform 0.3s ease-in-out' }}>
                            <img src={bg1} alt="banner-products1" loading="lazy" />
                            <Box sx={{ marginX: '0.5rem', alignContent: 'right', position: 'absolute', top: '3rem', left: '2rem', textAlign: 'right' }}>
                                <Typography gutterBottom variant="h6" sx={{ textTransform: 'uppercase' }}>Fly camera</Typography>
                                <Typography gutterBottom variant="h5" sx={{ textTransform: 'uppercase', color: 'primary.contrastText' }}>Hot product</Typography>
                                <Typography gutterBottom variant="body2">Lorem Ipsum is simply dummy text of the printing and typesetting</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4}>
                        <Box sx={{ display: 'flex', height: '12rem', bgcolor: '#e7e7e7', padding: '1rem', ":hover": { transform: 'scale(1.05)' }, transition: 'transform 0.3s ease-in-out' }}>
                            <img src={bg2} width="40%" alt="banner-products2" loading="lazy" />
                            <Box sx={{ marginLeft: '1rem', alignContent: 'center' }}>
                                <Typography gutterBottom variant="h5">HP ENVY Full-HD Laptop</Typography>
                                <Typography gutterBottom variant="h6">From <Box component="span" sx={{ fontWeight: 'bold', color: 'red' }}>$1200</Box></Typography>
                                <BuyButton />
                            </Box>
                        </Box>  
                    </Grid> 
                    <Grid item xs={12} sm={8} md={4}>   
                        <Box sx={{ display: 'flex', height: '12rem', bgcolor: '#e7e7e7', ":hover": { transform: 'scale(1.05)' }, transition: 'transform 0.3s ease-in-out' }}>
                            <img src={bg3} alt="banner-products3" loading="lazy" />
                            <Box sx={{ marginLeft: '1rem', alignContent: 'center' }}>
                                <Typography gutterBottom variant="h5" sx={{ textTransform: 'uppercase' }}>Big sale headphone</Typography>
                                <Typography gutterBottom variant="h6">The printing and typesetting industry.</Typography>
                                <Typography gutterBottom variant="body1">Up to <Box component="span" sx={{ fontWeight: 'bold', color: 'red' }}>50%</Box> off</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}   
