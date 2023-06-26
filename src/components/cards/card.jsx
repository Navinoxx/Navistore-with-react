import PropTypes from 'prop-types';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import IconsCard from '../icons/iconsCard';

function RecipeCard({ product, handleFilterProduct }) {
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <Card elevation={4} sx={{ width: 340, height: 450, display: 'flex', flexDirection: 'column', alignContent: 'space-between', padding: 0 }}>
            <CardMedia
                component="img"
                height="194"
                image={product.thumbnail}
                alt={product.description}
                loading="lazy"
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5">{capitalize(product.title)}</Typography>
                <Typography variant="h6" sx={{ textDecoration: 'line-through', paddingY: '0.7rem', color: 'gray' }}>
                Precio normal: ${product.price}
                </Typography>
                <Typography variant="h6" sx={{ backgroundColor: 'red', color: 'white', padding: '0.3rem' }}>
                Precio oferta: ${Math.round(product.price - (product.price / 100) * product.discountPercentage)}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
                <IconsCard id={product.id} />
                <Link to={`/productos/${product.id}`}>
                <Button variant="contained" id={product.id} onClick={() => handleFilterProduct(product.id)}>
                    Ver más
                </Button>
                </Link>
            </CardActions>
        </Card>
    );
}

RecipeCard.propTypes = {
    product: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discountPercentage: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
    handleFilterProduct: PropTypes.func.isRequired,
};

export default RecipeCard;
