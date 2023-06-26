import { Box, Card, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/contextCart";
import CartPay from "./cartPay";

function SidebarCart() {
    const { cart } = useContext(CartContext);

    const Subtotal = cart.reduce(
        (acc, item) =>
            acc +
            Math.round(item.price - (item.price / 100 * item.discountPercentage)) *
            item.quantity,
        0
    );

    const envio = Math.round(Subtotal * 0.005);

    const total = Subtotal + parseFloat(envio);

    return (
        <Box sx={{ width: '30%' }}>
            <Card sx={{ padding: '1rem' }}>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>Subtotal:</Typography>
                    <Typography>$ {Subtotal}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingY: '1rem' }}>
                    <Typography>Costo de envío:</Typography>
                    <Typography>$ {envio}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>Total:</Typography>
                    <Typography>$ {total}</Typography>
                    </Box>
                </Box>
                <Box sx={{ paddingY: '1rem' }}>
                    <CartPay total={total}/>
                </Box>
            </Card>
        </Box>
    );
}

export default SidebarCart;
