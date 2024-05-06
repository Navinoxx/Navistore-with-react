import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

export const CartFull = ({ product, removeFromCart, index, borderBottomStyles }) => {
    const finalPrice = Math.round(product.price - (product.price / 100 * product.discountPercentage)) * product.quantity;

    return (
        <Card elevation={0} sx={{ display: 'flex', height: 160, marginRight: '2rem', borderBottom: borderBottomStyles[index][0], paddingBottom: '1rem'}} square>
            <CardMedia
                component="img"
                sx={{ width: '30%', objectFit: 'cover' }}
                image={product.thumbnail}
                alt={product.description}
            />
            <Box sx={{flexGrow: 1, display: 'flex'}}>
                <CardContent sx={{flexGrow: 1}}>
                    <Typography component="h5" variant="h4">
                        {product.title}
                    </Typography>
                    <Typography component="p" variant="h6" sx={{paddingY: '0.5rem'}}>
                        Quantity: {product.quantity}
                    </Typography>
                    <Typography component="p" variant="h6">
                        Final price: ${finalPrice}
                    </Typography>
                </CardContent>
                <Button color="error" onClick={() => removeFromCart(product)}>
                    <DeleteIcon />
                </Button>
            </Box>
        </Card>

    );
}

CartFull.propTypes = {
    product: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        discountPercentage: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
    removeFromCart: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    borderBottomStyles: PropTypes.array.isRequired
};