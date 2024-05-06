import { useParams } from "react-router-dom";
import { useStore } from "../store/bookStore";
import { Container, Box, CircularProgress } from "@mui/material";
import { CardProduct } from "../components/cards/cardProduct";
import { NestedList } from "../components/sidebar/sidebarProducts";
import noResults from "../assets/no_results.jpg";
import { Error404 } from "./error404";

export const Products = () => {
    const { productsFiltered, loading } = useStore();
    const { page } = useParams();
    const isValidPage =  new Set(['all', 'top review', 'popular', 'best offers']).has(page);

    if (loading) {
        return  (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <CircularProgress size={70}/>
            </Box>
        );
    }

    if (productsFiltered.length === 0) {
        return (
            <Container maxWidth="xl" component="main" sx={{display: 'flex', marginY: '2rem'}} >
                <NestedList/>
                <Box component="img" src={noResults} sx={{ width: '100%', objectFit: 'contain', objectPosition: 'top', overflow: 'hidden' }} alt="Empty" loading="lazy" />
            </Container>
        )
    }

    if (!isValidPage) {
        return (
            <Error404 />
        )
    }

    return (
        <Container maxWidth="xl" component="main" sx={{display: 'flex', marginY: '2rem'}} >
            <NestedList/>
            <CardProduct />
        </Container>
    )
}
