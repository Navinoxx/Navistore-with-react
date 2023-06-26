import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

export default function MonthlyPayments({value, handleChange}) {
    

    return (
        <Box sx={{paddingY: '1rem'}}>
            <FormControl fullWidth>
                <InputLabel id="simple-select-label">Seleccione las cuotas</InputLabel>
                <Select
                labelId="simple-select-label"
                id="simple-select"
                value={value}
                label="Seleccione las cuotas"
                onChange={handleChange}
                >
                <MenuItem value={3}>3 cuotas</MenuItem>
                <MenuItem value={6}>6 cuotas</MenuItem>
                <MenuItem value={12}>12 cuotas</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

MonthlyPayments.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};