import { Box, IconButton } from "@mui/material";
import { useStore } from "../../store/bookStore";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import PropTypes from "prop-types";

export const IconsCard = ({ id }) => {
    const { products, addToFavorites, removeFromFavorites, favorites } = useStore();

    const isInFavorites = (id) => {
        return favorites.some(item => item.id === id);
    };

    const handleFavorites = (id) => {
        if (isInFavorites(id)) {
            removeFromFavorites(id);
        } else {
            const product = products.find((product) => product.id === id);
            addToFavorites(product);
        }
    }

    return (
        <Box>
            <IconButton aria-label="add to favorites" onClick={() => handleFavorites(id)}>
                <FavoriteIcon sx={{ color: isInFavorites(id) ? 'red' : 'inherit' }}/>
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
        </Box>
    );
};


IconsCard.propTypes = {
    id: PropTypes.number.isRequired,
};