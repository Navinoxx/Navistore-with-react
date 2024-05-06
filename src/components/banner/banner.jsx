import { Box, Container, Typography } from "@mui/material";
import { BuyButton } from "../buttons/buyButton";
import { DetailsButton } from "../buttons/detailsButton";
import bgBanner from "../../assets/banner/home-slideshow.jpg";
import Phone from "../../assets/banner/slide-show-home3.png";
import Styles from "./banner.module.css";

export const Banner = () => {

    return (
        <Box component="section" sx={{ width: '100%', height: { xs: '70vh', md: '50vh'}, backgroundImage: `url(${bgBanner})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row'}, gap: '4rem' }}>
                <Box sx={{ width: { xs: '100%', md: '50%'} }}>
                    <Typography gutterBottom sx={{ textTransform: 'uppercase', marginBottom: '2rem' }}>Best price: <Box component="span" sx={{ color: 'secondary.main' }}>$800</Box></Typography>
                    <Typography gutterBottom variant="h2" sx={{ textTransform: 'uppercase' }}>Smart phone Galaxy s7 edge</Typography>
                    <Typography gutterBottom>Ultra S-View Flip Cover, Protective Phone Case, Tap Control, Cutting Edge Design, US Version</Typography>
                    <Box sx={{ display: 'flex', gap: '4rem', marginTop: '2rem' }}>
                        <DetailsButton />
                        <BuyButton />
                    </Box>
                </Box>
                <img className={Styles.img_banner} src={Phone} alt="Phone" loading="lazy"/>
            </Container>
        </Box>
    )
}
