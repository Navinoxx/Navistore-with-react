
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function PaymentMethods() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box sx={{ paddingY: '1rem' }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Seleccione un método de pago</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Seleccione un método de pago"
                value={value}
                onChange={handleChange}
            >
                <MenuItem value="Visa">Visa</MenuItem>
                <MenuItem value="American Express">American Express</MenuItem>
                <MenuItem value="MasterCard">MasterCard</MenuItem>
            </Select>
            </FormControl>
        </Box>
    );
}
