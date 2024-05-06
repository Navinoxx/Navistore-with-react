import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { useStore } from "../../store/bookStore";
import PropTypes from "prop-types";

export const MonthlyPayments = ({ value, handleChange }) => {
    const { cart } = useStore();

    return (
        <Box sx={{paddingY: '1rem'}}>
            <FormControl fullWidth>
                <InputLabel id="simple-select-label">Select the number of payments</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={value}
                    label="Select the number of payments"
                    onChange={handleChange}
                    disabled={cart.length === 0}
                >
                    <MenuItem value={3}>3 Payments</MenuItem>
                    <MenuItem value={6}>6 Payments</MenuItem>
                    <MenuItem value={12}>12 Payments</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

MonthlyPayments.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};