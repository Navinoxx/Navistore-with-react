import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Divider } from "@mui/material";

export default function Footer() {

    return (
        <Box color="white" bgcolor="primary.main" py={5} component="footer">
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                    Sobre Nosotros
                    </Typography>
                    <Typography variant="body2">
                    Bienvenido a Navistore, tu tienda en línea de confianza para todas tus necesidades de compras. Nos enorgullece ofrecer una amplia selección de productos de alta calidad y brindar un excelente servicio al cliente.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                    Contáctanos
                    </Typography>
                    <Typography variant="body2">
                    123 Main Street, Capital, Bs As
                    </Typography>
                    <Typography variant="body2">
                    Email: info@example.com
                    </Typography>
                    <Typography variant="body2">
                    Tel: +1 234 567 8901
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                    Síguenos
                    </Typography>
                    <Link href="https://www.facebook.com/" color="inherit" target="_blank">
                    <Facebook />
                    </Link>
                    <Link
                    href="https://www.instagram.com/"
                    color="inherit"
                    sx={{ paddingX: '0.5rem' }}
                    target="_blank"
                    >
                    <Instagram />
                    </Link>
                    <Link href="https://www.twitter.com/" color="inherit" target="_blank">
                    <Twitter />
                    </Link>
                </Grid>
                </Grid>
                <Box mt={5}>
                <Divider color="white"/>
                <Typography variant="body2" align="center">
                    {"Copyright © "}
                    <Link color="inherit" href="https://github.com/Navinoxx" target="_blank">
                    Navinoxx
                    </Link>{" "}
                    {new Date().getFullYear()}
                    {"."}
                </Typography>
                </Box>
            </Container>
        </Box>
    );
}