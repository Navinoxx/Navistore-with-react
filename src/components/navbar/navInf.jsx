import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Toolbar, Box, IconButton, Menu, MenuItem, Typography, Button} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { ProductContext } from '../../context/contextProducts';

const pages = ['Productos', 'Destacados', 'Liquidaciones', 'Ofertas'];

export function NavInf() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const { products, setProductsFiltered } = useContext(ProductContext);
    const location = useLocation();
    const [selectedPage, setSelectedPage] = useState('');

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handlePageClick = (page) => {
        setSelectedPage(page);

        if (page === 'Productos') {
        setProductsFiltered(products);
        }

        if (page === 'Destacados') {
        const destacados = products.products.filter((product) => product.rating >= 4.9);
        setProductsFiltered(destacados);
        }

        if (page === 'Liquidaciones') {
        const liquidaciones = products.products.filter((product) => product.stock <= 10);
        setProductsFiltered(liquidaciones);
        }

        if (page === 'Ofertas') {
        const ofertas = products.products.filter((product) => product.discountPercentage >= 15);
        setProductsFiltered(ofertas);
        }
    };

    return (
        <Container maxWidth="xl" component="nav">
        <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                display: { xs: 'block', sm: 'none' },
                }}
            >
                {pages.map((page) => (
                <MenuItem key={page} onClick={() => { handleCloseNavMenu(); handlePageClick(page)}}>
                    <Link to="/productos"  >
                    <Typography
                        textAlign="center"
                        sx={{
                        color: 'black',
                        }}
                    >
                        {page}
                    </Typography>
                    </Link>
                </MenuItem>
                ))}
            </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, gap: '1rem', display: { xs: 'none', sm: 'flex' } }}>
            {pages.map((page) => (
                <Link to="/productos" key={page}>
                <Button
                    onClick={() => handlePageClick(page)}
                    sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    boxShadow: location.pathname === '/productos' && selectedPage === page ? '0px 0px 5px 0px' : 'none',
                    }}
                >
                    {page}
                </Button>
                </Link>
            ))}
            </Box>
        </Toolbar>
        </Container>
    );
}
