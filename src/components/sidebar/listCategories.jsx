import { useState, useEffect } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Checkbox } from "@mui/material";
import { useStore } from "../../store/bookStore";
import PropTypes from "prop-types";

export const ListCategories = ({ openIndex }) => {
    const { categories, applyFilters, setMultiFilter } = useStore();
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategorySelection = (category) => {
        setSelectedCategories((prevCategories) => {
            const newCategories = prevCategories.includes(category) 
                ? prevCategories.filter((c) => c !== category) 
                : [...prevCategories, category];
            setMultiFilter('categories', newCategories);
            applyFilters();
            return newCategories;
        });
    };

    useEffect(() => {
        if (openIndex !== 0) {
            setMultiFilter('categories', []);
            applyFilters();
        }
    }, [openIndex, setMultiFilter, applyFilters]);

    return (
        <List>
            {categories.map((category, index) => (
                <ListItem key={index}>
                    <ListItemIcon>
                        <Checkbox
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategorySelection(category)}
                        />
                    </ListItemIcon>
                    <ListItemText primary={category} sx={{ textTransform: 'capitalize' }} />
                </ListItem>
            ))}
        </List>
    );
}

ListCategories.propTypes = {
    handleFilterChange: PropTypes.func,
    selectedCategory: PropTypes.array,
    openIndex: PropTypes.number,
};
