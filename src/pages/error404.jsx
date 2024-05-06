import { Box, Container, Typography } from "@mui/material";
import Error from "../assets/404.jpg";

export const Error404 = () => {

    return (
        <Container maxWidth="xl" component="main" sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginY: '5rem', gap: '4rem' }}>
            <Box component="img" src={Error} sx={{ width: { xs: '100%', md: '50%'} }} />
            <Typography variant="h3" sx={{ textTransform: 'uppercase', color: '#f0f0f0', textAlign: 'center' }} gutterBottom>Nothing to see here!</Typography>
        </Container>
    )
}