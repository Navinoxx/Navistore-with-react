import { Box, IconButton } from "@mui/material";
import PropTypes from 'prop-types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { FavoritesContext } from "../../context/contextFavorites";
import { ProductContext } from "../../context/contextProducts";
import { useContext } from "react";

export default function IconsCard({id}) {
    const { products } = useContext(ProductContext);
    const favoritesContext = useContext(FavoritesContext);

    const handleFavorites = (id) => {
        if (favoritesContext.isInFavorites(id)) {
        favoritesContext.removeFavorite(id);
        } else {
        const product = products.products.find((product) => product.id === id);
        favoritesContext.addFavorite(product);
        }
    }

    return (
        <Box>
            <IconButton aria-label="add to favorites" onClick={() => handleFavorites(id)}>
                    <FavoriteIcon sx={{ color: favoritesContext.isInFavorites(id) ? 'red' : 'inherit' }}/>
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
        </Box>
    )
}

IconsCard.propTypes = {
    id: PropTypes.number.isRequired,
};