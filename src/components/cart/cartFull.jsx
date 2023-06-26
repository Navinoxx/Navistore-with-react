import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

export default function CartFull({product, removeFromCart}) {
    const finalPrice = Math.round(product.price - (product.price / 100 * product.discountPercentage)) * product.quantity;

    return (
        <Card elevation={4} sx={{ display: 'flex', height: 160, marginRight: '2rem'}}>
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
                    <Typography component="p" variant="h6" sx={{paddingY: '1rem'}}>
                        Cantidad: {product.quantity}
                    </Typography>
                    <Typography component="p" variant="h6">
                        Precio Final: ${finalPrice}
                    </Typography>
                </CardContent>
                <Button color='error' onClick={() => removeFromCart(product)}>
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
};