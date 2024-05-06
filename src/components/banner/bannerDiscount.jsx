import { Box, Container, Typography } from "@mui/material";
import bgBanner from "../../assets/banner/home-slideshow.jpg";
import discount from "../../assets/coupon.png";

export const BannerDiscount = () => {

    return (
        <Box component="section" sx={{ width: '100%', height: { xs: '70vh', md: '50vh'}, backgroundImage: `url(${bgBanner})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'end', color: 'white' }}>
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row'}, gap: '4rem' }}>
                <Box sx={{ paddingBottom: '5rem' }}>
                    <Typography gutterBottom variant="h6" sx={{ textTransform: 'uppercase', marginBottom: '2rem' }}>$20 discount for your first order</Typography>
                    <Typography gutterBottom variant="h2" sx={{ textTransform: 'uppercase' }}>Join our newsletter and get...</Typography>
                    <Typography gutterBottom>Join our email subscription now to get updates on promotions and coupons.</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}>
                    <Box component="img" src={discount} sx={{ width: '100%' }} alt="discount" loading="lazy"/>
                </Box>
            </Container>
        </Box>
    )
}