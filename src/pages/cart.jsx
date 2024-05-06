import { Link } from "react-router-dom";
import { Box, Button, Container, Divider } from "@mui/material";
import { SidebarCart } from "../components/sidebar/sidebarCart";
import { CartEmpty } from "../components/cart/cartEmpty";
import { CartFull } from "../components/cart/cartFull";
import { useStore } from "../store/bookStore";
import { useBorderStyles } from "../hooks/useBorderStyles";
import { CustomTitle } from "../components/title/customTitle";

export const Cart = () => {
    const { cart, removeFromCart, clearCart} = useStore();
    const sizeOptions = [1];
    const { borderBottomStyles } = useBorderStyles(cart, sizeOptions);

    if (cart.length === 0) {
        return (
            <Container maxWidth="xl" sx={{ marginTop: '2rem' }}>
                <CustomTitle title="Your shopping bag" />
                <Divider />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginY: '2rem' }}>
                    <CartEmpty />
                </Box>
            </Container>
        );
    }

    return (
        <Container maxWidth="xl" sx={{ marginTop: '2rem' }}>
            <CustomTitle title="Your shopping bag" />
            <Divider />
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row'}, justifyContent: 'space-between', marginY: '2rem' }}>
                <Box sx={{ gap: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginRight: '2rem' }}>
                        <Link to="/products/all" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" sx={{ color: 'white' }}>Continue Shopping</Button>
                        </Link>
                        <Button variant="contained" color="error" onClick={clearCart}>Clear cart</Button>
                    </Box>
                    {cart.map((product, index) => (
                        <CartFull key={product.id} product={product} removeFromCart={removeFromCart} borderBottomStyles={borderBottomStyles} index={index} />
                    ))}
                </Box>
                <SidebarCart />
            </Box>
        </Container>
    );
};
