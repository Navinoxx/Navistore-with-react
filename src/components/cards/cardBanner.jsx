import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const CardBanner = ( { product, width, height, direction }) => {
    const finalPrice = Math.round(product?.price - (product?.price / 100) * product?.discountPercentage);

    return (
        <Link to={`/products/all/${product?.id}`}>
            <Card elevation={0} sx={{ height: '100%', display: 'flex', flexDirection: direction, alignContent: 'space-between', padding: '1rem' }}>
                <CardMedia
                    component="img"
                    sx={{ width, height, clipPath: 'inset(0)', ":hover": { transform: 'scale(1.15)', clipPath: 'inset(calc((1 - 1/1.15) * 50%))' }, transition: 'all 0.5s ease-in-out' }}
                    image={product?.images[0]}
                    alt={product?.description}
                    loading="lazy"
                />  
                <CardContent sx={{ flexGrow: 1, paddingLeft: 0 }}>
                    <Typography variant="h5" sx={{ textTransform: 'capitalize', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{product?.title}</Typography>
                    <Typography variant="h6" sx={{ display: 'flex', gap: '0.5rem' }} >
                        Price:
                        <Box component="span" sx={{ color: 'secondary.main' }}>$ {finalPrice}</Box>
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}

CardBanner.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        images: PropTypes.array.isRequired,
        description: PropTypes.string,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discountPercentage: PropTypes.number.isRequired,
    }).isRequired,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            xs: PropTypes.string,
            sm: PropTypes.string,
            md: PropTypes.string,
            lg: PropTypes.string,
            xl: PropTypes.string,
        })
    ]).isRequired,
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number,
        })
    ]).isRequired,
    direction: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            xs: PropTypes.string,
            sm: PropTypes.string,
            md: PropTypes.string,
            lg: PropTypes.string,
            xl: PropTypes.string,
        })
    ]).isRequired
};