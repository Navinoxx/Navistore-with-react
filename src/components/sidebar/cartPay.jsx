import { useState, useEffect } from "react";
import { useStore } from "../../store/bookStore";
import { Box, Button, Typography } from "@mui/material";
import { PaymentMethods } from "../autocomplete/paymentMethods";
import { MonthlyPayments } from "../autocomplete/monthlyPayments";
import PropTypes from "prop-types";

export const CartPay = ({ total }) => {
    const { cart } = useStore();
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value.toString());
    };

    useEffect(() => {
        if (cart.length === 0) {
            setValue('');
        }
    }, [cart]);

    return (
        <Box>
            <PaymentMethods/>
            <MonthlyPayments value={value} handleChange={handleChange}/>
            {value && (
                <Box>
                    <Typography variant="h4" sx={{ color: 'red', textAlign: 'center' }}>{value} x ${(total / value).toFixed(2)}</Typography>
                    <Typography variant="h4" sx={{ color: 'red', textAlign: 'center' }}>Interest free payments</Typography>
                </Box>
            )}
            <Button variant="contained" sx={{display: 'block', width: '100%', marginTop: '2rem', color: 'white'}} disabled={!value}>Checkout now</Button>
        </Box>
    );
}

CartPay.propTypes = {
    total: PropTypes.number.isRequired,
};