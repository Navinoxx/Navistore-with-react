import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <Container maxWidth="xl" component="main" sx={{ textAlign: 'center', paddingTop: '4rem' }}>
            <Typography variant="h2" component="h1" sx={{ marginBottom: '2rem' }}>
                ¡Bienvenido a Navistore!
            </Typography>
            <Typography variant="h5" component="p" sx={{ marginBottom: '2rem' }}>
                Explora nuestra amplia selección de productos de alta calidad.
            </Typography>
            <Link to="/productos" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" size="large">
                    Ver Productos
                </Button>
            </Link>
        </Container>
    );
}
