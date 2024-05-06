import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Card, Typography, TextField } from "@mui/material";
import credits from "../../assets/Credits.png";
import PropTypes from "prop-types";

export const CardDetails = ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = event => {
        const newQuantity = parseInt(event.target.value, 10);
        if (newQuantity >= 1 && newQuantity <= product.stock) {
            setQuantity(newQuantity);
        }
    };

    const listPrice = `${product?.price.toFixed(2)}`;
    const discountAmount = product?.price * (product?.discountPercentage / 100);
    const discount = discountAmount.toFixed(2);
    const discountedPrice = `$${(product?.price - discountAmount).toFixed(2)}`;

    return (
        <Card sx={{ display: "flex", flexDirection: "column", padding: "1rem", height: '100%'}} square>
            <Typography variant="h4" sx={{ margin: "0.2rem" }}>
                {discountedPrice}
            </Typography>
            <Typography variant="h6" sx={{ color: "red", margin: "0.2rem" }}>
                Save ${discount}
            </Typography>
            <Typography variant="h6" sx={{ color: 'primary.contrastText', margin: "0.2rem" }}>
                List Price: 
                <Box component="span" sx={{ textDecoration: 'line-through' }}>$ {listPrice}</Box>
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginY: "1rem", flexGrow: 1 }}>
                <img src={credits} alt="credits" width={170} loading="lazy"/>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginY: "1rem", gap: "0.5rem" }}>
                <TextField
                    variant="outlined"
                    type="number"
                    size="small"
                    label="Quantity"
                    sx={{ width: "5rem" }}
                    min={1}
                    max={product?.stock}
                    value={quantity}        
                    onChange={handleQuantityChange}
                />
                <Typography variant="body1">Stock: {product?.stock}u</Typography>
            </Box>
            <Link to="/cart">
                <Button
                    variant="contained"
                    sx={{ display: "flex", marginX: "auto", color: "white" }}
                    onClick={() => addToCart(product, quantity )}
                >
                    Add to cart
                </Button>
            </Link>
        </Card>
    );
};

CardDetails.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
        description: PropTypes.string,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discountPercentage: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
    }).isRequired,
    addToCart: PropTypes.func.isRequired,
}
