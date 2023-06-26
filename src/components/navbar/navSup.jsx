import { Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../assets/logo.png'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Badge } from '@mui/material';
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/contextCart";
import { FavoritesContext } from "../../context/contextFavorites";
import { ProductContext } from "../../context/contextProducts";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
            width: '20ch',
            },
        },
    },
}));

export function NavSup() {
    const {cart} = useContext(CartContext)
    const favoritesContext = useContext(FavoritesContext);
    const { products, setProductsFiltered } = useContext(ProductContext);
    const cartSize = cart.reduce((acc, item) => acc + item.quantity, 0)
    const favoritesSize = favoritesContext.favorites.length

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        const filteredProducts = products.products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
            );
        setProductsFiltered(filteredProducts);
    };

    return (
        <Container maxWidth="xl" component="nav">
            <Toolbar disableGutters>
                <Box sx={{display: 'flex', flexGrow: '1'}}>
                    <Link to="/">
                        <img src={logo} width={50}/ >
                    </Link>
                        <Typography
                            variant="h4"
                            noWrap
                            sx={{
                            paddingLeft: 2,
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            NAVISTORE
                        </Typography>
                </Box>
                <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Buscar…"
                        inputProps={{ 'aria-label': 'buscar' }}
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </Search>
                <Box sx={{display: 'flex'}}>
                    <Link to="/favoritos">
                        <IconButton size="large" aria-label="show favorites" color="inherit">
                            <Badge badgeContent={favoritesSize} color="error">
                                <FavoriteIcon/>
                            </Badge>
                        </IconButton>
                    </Link>
                    <Link to="/carro">
                        <IconButton
                            size="large"
                            aria-label="show cart"
                            color="inherit"
                            >
                            <Badge badgeContent={cartSize} color="error">
                                <ShoppingCartIcon/>
                            </Badge>
                        </IconButton>
                    </Link>
                </Box>
            </Toolbar>
        </Container>
    )
}