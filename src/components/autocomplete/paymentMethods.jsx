import { useEffect, useState } from "react";
import { useStore } from "../../store/bookStore";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const PaymentMethods = () => {
    const { cart } = useStore();
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        if (cart.length === 0) {
            setValue('');
        }
    }, [cart]);

    return (
        <Box sx={{ paddingY: '1rem' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Payment method</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Payment method"
                    value={value}
                    onChange={handleChange}
                    disabled={cart.length === 0}
                >
                    <MenuItem value="Visa">Visa</MenuItem>
                    <MenuItem value="American Express">American Express</MenuItem>
                    <MenuItem value="MasterCard">MasterCard</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
