import { Card, CardActions, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { IconsCard } from "../icons/iconsCard";
import { CustomButton } from "../buttons/customButton";
import PropTypes from "prop-types";

export const RecipeCard = ( { product }) => {
    const finalPrice = Math.round(product.price - (product.price / 100) * product.discountPercentage);

    return (
        <Card elevation={0} sx={{ height: 400, display: 'flex', flexDirection: 'column', alignContent: 'space-between'}}>
            <CardMedia
                component="img"
                sx={{ height: 200, padding: '1rem', objectFit: 'cover' }}
                image={product.thumbnail}
                alt={product.description}
                loading="lazy"
            />  
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5">{product.title}</Typography>
                <Typography variant="h6" sx={{ display: 'flex', gap: '0.5rem' }} >
                    Price:
                    <Box component="span" sx={{ color: 'secondary.main' }}>$ {finalPrice}</Box>
                    <Box component="span" sx={{ textDecoration: 'line-through', color: 'primary.contrastText' }}>$ {product.price}</Box>
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
                <IconsCard id={product.id} />
                <Link to={`/products/all/${product.id}`}>
                    <CustomButton text="View Details" />
                </Link>
            </CardActions>
        </Card>
    );
}

RecipeCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
        description: PropTypes.string,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discountPercentage: PropTypes.number.isRequired,
    }).isRequired,
};