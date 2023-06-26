import { useContext } from "react";
import { FavoritesContext } from "../context/contextFavorites";
import RecipeCard from "../components/cards/card";
import { Container, Typography, Box } from "@mui/material";
import { Divider } from "@material-ui/core";
import { ProductContext } from "../context/contextProducts";

export default function Favorites() {
    const favoritesContext = useContext(FavoritesContext);
    const { products, setProductsFiltered } = useContext(ProductContext);

    const handleFilterProduct = (id) => {
        const filteredProducts = products.products.filter((product) => product.id === id);
        setProductsFiltered(filteredProducts[0]);
    }

    return (
        <Container maxWidth="xl" component="main" sx={{ marginTop: '2rem'}}>
            {favoritesContext.favorites.length === 0 ? (
                <Typography variant="h4" align="center">No hay favoritos añadidos</Typography>
            ) : (
                <>
                    <Typography variant="h3" gutterBottom>FAVORITOS</Typography>
                    <Divider/>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginY: '2rem' }}>
                        {favoritesContext.favorites.map((favorite) => (
                            <RecipeCard key={favorite.id} product={favorite} handleFilterProduct={handleFilterProduct} />
                        ))}
                    </Box>
                </>
            )}
        </Container>
    );
}

