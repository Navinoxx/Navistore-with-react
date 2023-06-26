import { useContext } from 'react';
import PropTypes from 'prop-types';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { HorizontalRule as HorizontalRuleIcon } from '@mui/icons-material';
import { ProductContext } from '../../context/contextProducts';

export default function ListBrands({ handleCategorySelection, selectedCategory }) {
    const { products, setProductsFiltered } = useContext(ProductContext);
    const brandCounts = {};

    products.products.forEach((product) => {
        const brand = product.brand;
        brandCounts[brand] = (brandCounts[brand] || 0) + 1;
    });

    const handleFilteredProducts = (brand) => {
        const filtered = products.products.filter((product) => product.brand === brand);
        setProductsFiltered(filtered);
        handleCategorySelection(brand);
    };

    return (
        <List>
        {Object.entries(brandCounts).map(([brand, count], index) => (
            <ListItemButton
            sx={{ pl: 4, backgroundColor: selectedCategory === brand ? 'lightgray' : 'inherit' }}
            key={index}
            onClick={() => handleFilteredProducts(brand)}
            >
            <ListItemIcon>
                <HorizontalRuleIcon />
            </ListItemIcon>
            <ListItemText primary={`${brand} (${count})`} />
            </ListItemButton>
        ))}
        </List>
    );
}

ListBrands.propTypes = {
    handleCategorySelection: PropTypes.func.isRequired,
    selectedCategory: PropTypes.string.isRequired,
};

