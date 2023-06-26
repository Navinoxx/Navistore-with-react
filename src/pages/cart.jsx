import { useContext } from "react";
import { CartContext } from "../context/contextCart";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import SidebarCart from "../components/sidebar/sidebarCart";
import CartEmpty from "../components/cart/cartEmpty";
import CartFull from "../components/cart/cartFull";
import { Link } from "react-router-dom";

export default function Cart() {
    const { cart, removeFromCart, clearCart} = useContext(CartContext);

    return (
        <Container maxWidth="xl" sx={{ marginTop: '2rem'}}>
            <Typography variant="h3" gutterBottom>TU PEDIDO</Typography>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginY: '2rem' }}>
                {cart.length > 0 ?
                <Box sx={{ gap: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginRight: '2rem' }}>
                    <Link to="/productos">
                        <Button variant="contained">Seguir comprando</Button>
                    </Link>
                    <Button variant="contained" color="error" onClick={() => clearCart()}>Vaciar carrito</Button>
                    </Box>
                    {cart.map(product => (
                    <CartFull key={product.id} product={product} removeFromCart={removeFromCart} />
                    ))}
                </Box>
                : <CartEmpty />}
            <SidebarCart />
            </Box>
        </Container>
    );
}