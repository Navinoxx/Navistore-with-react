import { Box, Container, Typography } from "@mui/material";
import { BuyButton } from "../buttons/buyButton";
import { DetailsButton } from "../buttons/detailsButton";
import bgBanner from "../../assets/banner/home3.jpg";
import { CustomTitle } from "../title/customTitle";
import { CarouselBanner } from "../carousel/carouselBanner";

export const BannerHotDeals = () => {

    return (
        <Box component="section" sx={{ width: '100%', height: { xs: '100vh', md: '60vh'}, backgroundImage: `url(${bgBanner})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row'}, alignItems: 'center', justifyContent: 'space-between', gap: '4rem' }}>
                <Box sx={{ width: { xs: '100%', md: '50%'} }}>
                    <CarouselBanner />
                </Box>
                <Box sx={{ width: { xs: '100%', md: '50%'} }}>
                    <CustomTitle title="This week's hot deals"/>
                    <Typography gutterBottom variant="h6" sx={{ textTransform: 'uppercase' }}>Video game & consoles</Typography>
                    <Typography gutterBottom variant="h5">Beats Studio Wireless Over-Ear Black Headphones</Typography>
                    <ul>
                        <li>Enjoy the largest library of games, with blockbuster titles</li>
                        <li>Flat Folding Headphone Adjustable Headband</li>
                        <li>32mm Speakers 1.2m Cable</li>
                    </ul>
                    <Typography gutterBottom sx={{ textTransform: 'uppercase', marginBottom: '2rem' }}>Best price: <Box component="span" sx={{ color: 'secondary.main' }}>$250</Box></Typography>
                    <Box sx={{ display: 'flex', gap: '4rem', marginTop: '2rem' }}>
                        <DetailsButton />
                        <BuyButton />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}