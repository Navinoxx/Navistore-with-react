import { useState, useEffect } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Checkbox } from "@mui/material";
import { useStore } from "../../store/bookStore";
import PropTypes from "prop-types";

export const ListBrands = ({ openIndex }) => {
    const { products, applyFilters, setMultiFilter } = useStore();
    const [selectedBrands, setSelectedBrands] = useState([]);

    const brandCounts = products.reduce((acc, product) => {
        const { brand } = product;
        if (brand) {
            acc[brand] = (acc[brand] || 0) + 1;
        }
        return acc;
    }, {});

    const handleBrandSelection = (brand) => {
        setSelectedBrands(prevBrands => {
            const newBrands = prevBrands.includes(brand) 
                ? prevBrands.filter(b => b !== brand) 
                : [...prevBrands, brand];

            setMultiFilter('brands', newBrands);
            applyFilters();
            return newBrands;
        });
    };

    useEffect(() => {
        if (openIndex !== 1) {
            setMultiFilter('brands', []);
            applyFilters();
        }
    }, [openIndex, setMultiFilter, applyFilters]);

    return (
        <List>
            {Object.entries(brandCounts).map(([brand, count], index) => (
                <ListItem key={index} sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <Checkbox
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandSelection(brand)}
                            sx={{ color: selectedBrands.includes(brand) ? 'primary.main' : 'inherit' }}
                        />
                    </ListItemIcon>
                    <ListItemText primary={`${brand} (${count})`} />
                </ListItem>
            ))}
        </List>
    );
}

ListBrands.propTypes = {
    handleFilterChange: PropTypes.func,
    selectedBrand: PropTypes.array,
    openIndex: PropTypes.number,
};

