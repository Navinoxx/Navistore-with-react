import { useState } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import PropTypes from "prop-types";

export const HalfRating = ({ rating }) => {
    const [value, setValue] = useState(rating);

    const handleRatingChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Stack sx={{ display: 'flex', alignItems: 'center', marginY: 'auto', paddingX: '0.5rem' }}>
            <Rating name="half-rating-read" value={value} precision={0.01} readOnly onChange={handleRatingChange} />
        </Stack>
    );
}

HalfRating.propTypes = {
    rating: PropTypes.number.isRequired
};