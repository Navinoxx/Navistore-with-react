import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Toolbar, Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useStore } from "../../store/bookStore";
import { MenuIconsRight } from "./menuIconsRight";

const pages = ['All', 'Top review', 'Popular', 'Best offers'];

export const NavInf = () => {
    const { products, setFilteredProducts  } = useStore();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [selectedPage, setSelectedPage] = useState('');
    const path = useParams();

    useEffect(() => {
        if (!path.page) {
            setSelectedPage('');
        }
    }, [path]);
    
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handlePageClick = useCallback((page) => {
        setSelectedPage(page);

        switch (page) {
            case 'All':
                setFilteredProducts(products);
                break;  
            case 'Top review':
                setFilteredProducts(products.filter(product => product.rating >= 4.9));
                break;
            case 'Popular':
                setFilteredProducts(products.filter(product => product.stock <= 10));
                break;
            case 'Best offers':
                setFilteredProducts(products.filter(product => product.discountPercentage >= 15));
                break;
            default:
                break;
        }
    }, [products, setFilteredProducts]);

    return (
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: "flex", sm: "none" },
                    }}
                >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={handleOpenNavMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorElNav}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        color="inherit"
                        sx={{
                            display: { xs: "block", sm: "none" },
                        }}
                    >
                        {pages.map((page) => (
                            <Link key={page} to={`/products/${page.toLowerCase()}`}>
                                <MenuItem
                                    sx={{
                                        backgroundColor: "primary.main",
                                        color: "white",
                                        ":hover": { color: "secondary.main", backgroundColor: "primary.main" },
                                    }}
                                    onClick={() => {handleCloseNavMenu();handlePageClick(page);}}
                                >
                                    <Typography>{page}</Typography>
                                </MenuItem>
                            </Link>
                        ))}
                    </Menu>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        gap: "2rem",
                        display: { xs: "none", sm: "flex" },
                    }}
                >
                    {pages.map((page) => (
                        <Link to={`/products/${page.toLowerCase()}`} key={page}>
                            <Typography
                                onClick={() => handlePageClick(page)}
                                sx={{
                                    my: 2,
                                    display: "block",
                                    color: selectedPage === page ? "secondary.main" : "white",
                                }}
                            >
                            {page}
                            </Typography>
                        </Link>
                    ))}
                </Box>
                <MenuIconsRight />
            </Toolbar>
        </Container>
    );
}
