import { useContext } from 'react';
import PropTypes from 'prop-types';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { HorizontalRule as HorizontalRuleIcon } from '@mui/icons-material';
import { ProductContext } from '../../context/contextProducts';

export default function ListCategories({ handleCategorySelection, selectedCategory }) {
    const { products, setProductsFiltered, categories } = useContext(ProductContext);

    const handleFilteredCategories = (category) => {
        const filtered = products.products.filter((product) => product.category === category);
        setProductsFiltered(filtered);
        handleCategorySelection(category);
    };

    return (
        <List>
        {categories.map((category, index) => (
            <ListItemButton
            sx={{ pl: 4, backgroundColor: selectedCategory === category ? 'lightgray' : 'inherit' }}
            key={index}
            onClick={() => handleFilteredCategories(category)}
            >
            <ListItemIcon>
                <HorizontalRuleIcon />
            </ListItemIcon>
            <ListItemText primary={category} sx={{ textTransform: 'capitalize' }} />
            </ListItemButton>
        ))}
        </List>
    );
}

ListCategories.propTypes = {
    handleCategorySelection: PropTypes.func.isRequired,
    selectedCategory: PropTypes.string.isRequired,
};
