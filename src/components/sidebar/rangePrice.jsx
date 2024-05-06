import { useState, useEffect } from "react";
import { useStore } from "../../store/bookStore";
import { Slider, List, ListItem, ListItemText, Typography } from "@mui/material";
import PropTypes from "prop-types";

export const RangePrice = () => {
    const { products, setMultiFilter, applyFilters, filters } = useStore();

    const maxRange = Math.max(...products.map(product => product.price));
    const [priceRange, setPriceRange] = useState([0, maxRange]);

    useEffect(() => {
        setPriceRange([0, maxRange]);
    }, [maxRange]);

    const handleSliderChange = (event, newRange) => {
        setPriceRange(newRange);
        setMultiFilter('priceRange', newRange); 
        applyFilters()
    };

    return (
        <List>
            <ListItem sx={{ paddingX: 0}}>   
                <ListItemText primary="Price Range" />
            </ListItem>
            <ListItem>  
                <Slider
                    value={filters.priceRange}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"    
                    min={0}
                    max={maxRange}
                    marks={[
                        { value: 0, label: `$0` },
                        { value: filters.priceRange[1], label: `$${filters.priceRange[1]}` },
                    ]}
                />
            </ListItem>
            <ListItem sx={{display: 'flex', justifyContent: 'center'}}>
                <Typography>${priceRange[0]} - ${priceRange[1]}</Typography>
            </ListItem>
        </List>
    );
};

RangePrice.propTypes = {
    handleFilterChange: PropTypes.func,
    selectedPriceRange: PropTypes.object,
};

