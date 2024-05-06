import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useStore } from "../../store/bookStore";
import { Box, Container, Toolbar, Typography, InputBase, styled, alpha, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


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
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        color: theme.palette.default.main,
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

export const NavSup = () => {
    const { products, setFilterById } = useStore();
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();
    const searchRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchTerm('');
                setResults([]);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        const filteredProducts = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
            );
        setResults(filteredProducts);
    };

    const handleClickResult = (id) => {
        navigate(`/products/all/${id}`);
        setFilterById(id);
        setSearchTerm('');
        setResults([]);
    }

    return (
        <Box sx={{ bgcolor: 'primary.dark', pt: 6 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
                    <Link to="/">
                        <Typography
                            component="h1"
                            variant="h4"
                            sx={{
                                textDecoration: 'none',
                                color: 'secondary.main',    
                            }}
                        >
                            NAVISTORE
                        </Typography>
                    </Link>
                    <Search ref={searchRef}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchTerm}
                            onChange={handleSearch}
                            aria-haspopup="listbox"
                            aria-controls="search-results-box"
                        />
                    {results.length > 0 ? (
                        <Box sx={{ position: 'absolute', bgcolor: 'primary.dark', zIndex: 2, height: '30vh', overflow: 'auto' }}>
                            {results.map((product) => (
                                <Box onClick={() => handleClickResult(product.id)} sx={{ p: 1, color: 'primary.contrastText', cursor: 'pointer', ":hover": { color: 'default.main'}}} key={product.id}>
                                    <Typography variant="h6">{product.title}</Typography>
                                    <Typography variant="body2">{product.description}</Typography>
                                    <Divider sx={{ mt: 2 }}/>
                                </Box>
                            ))}
                        </Box>
                    ) : searchTerm.trim() !== '' ? (
                        <Box sx={{ position: 'absolute', p: 1, bgcolor: 'primary.dark',width: '100%', zIndex: 2 }}>
                            No results found.
                        </Box>
                    ) : null}
                    </Search>
                </Toolbar>
            </Container>
        </Box>
    )
}
