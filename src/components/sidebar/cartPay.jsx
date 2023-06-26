import { Box, Button, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../context/contextCart";
import PaymentMethods from "../autocomplete/paymentMethods";
import MonthlyPayments from "../autocomplete/monthlyPayments";
import PropTypes from 'prop-types';

export default function CartPay({ total }) {
    const { cart } = useContext(CartContext);
    const [value, setvalue] = useState('');

    const handleChange = (event) => {
        setvalue(event.target.value.toString());
    };

    return (
        cart.length > 0 ? (
            <Box>
                <PaymentMethods/>
                <MonthlyPayments value={value} handleChange={handleChange}/>
                {value && (
                    <Box>
                        <Typography sx={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center' }}>Resumen del pedido</Typography>
                        <Typography variant="h4" sx={{ color: 'red', textAlign: 'center' }}>{value} x ${(total / value).toFixed(2)}</Typography>
                        <Typography variant="h4" sx={{ color: 'red', textAlign: 'center' }}>Cuotas sin interés</Typography>
                    </Box>
                )}
                <Button variant="contained" sx={{display: 'block', width: '100%', marginTop: '2rem'}} disabled={!value}>finalizar compra</Button>
            </Box>
        ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '3rem', gap: '0.5rem' }}>
            <Box component="b">Verificación de disponibilidad</Box>
            <Typography>
                Ten en cuenta que para procesar tu compra debemos corroborar la disponibilidad de los productos de acuerdo a tu ubicación
            </Typography>
            <Typography sx={{ padding: '10px', backgroundColor: 'yellow' }}>
                <Box component="b">IMPORTANTE:</Box> Recuerda que el <Box component="b">producto</Box> solo puede ser retirado por el <Box component="b">titular de la tarjeta</Box>, con la que se efectuó la compra, acompañado de su <Box component="b">DNI</Box>.
            </Typography>
            </Box>
        )
    );
}

CartPay.propTypes = {
    total: PropTypes.number.isRequired,
};