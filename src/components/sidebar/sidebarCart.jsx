import { Box, Card, Typography } from "@mui/material";
import { useStore } from "../../store/bookStore";
import { CartPay } from "./cartPay";

export const SidebarCart = () => {
    const { cart } = useStore();

    const Subtotal = cart.reduce(
        (acc, item) =>
            acc +
            Math.round(item.price - (item.price / 100 * item.discountPercentage)) *
            item.quantity,
        0
    );

    const shipping = Math.round(Subtotal * 0.005);

    const total = Subtotal + parseFloat(shipping);

    return (
        <Box sx={{ width: { xs: '100%', md: '30%'} }}>
            <Card sx={{ padding: '1rem' }} square>
                <Typography gutterBottom sx={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center' }}>Order Summary</Typography>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>Subtotal:</Typography>
                        <Typography>$ {Subtotal}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingY: '1rem' }}>
                        <Typography>Shipping:</Typography>
                        <Typography>$ {shipping}</Typography>
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
