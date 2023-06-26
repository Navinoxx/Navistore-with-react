import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { useContext } from 'react';
import { ProductContext } from '../../context/contextProducts';

export default function RangePrice({ handleCategorySelection, selectedCategory }) {
    const { products, setProductsFiltered } = useContext(ProductContext);
    const prices = [
        { label: "$0 - $49", min: 0, max: 49 },
        { label: "$50 - $99", min: 50, max: 99 },
        { label: "$100 - $199", min: 100, max: 199 },
        { label: "$200 - $499", min: 200, max: 499 },
        { label: "$500 - $999", min: 500, max: 999 },
        { label: "$1000 - $1499", min: 1000, max: 1499 },
        { label: "$1500+", min: 1500, max: Infinity },
    ];
    
        const handleFilteredPrice = (min, max) => {
        const filtered = products.products.filter(
            product => product.price >= min && product.price <= max
        );
        setProductsFiltered(filtered);
        handleCategorySelection({min, max})
        };
    
        return (
        prices.map((price, index) => (
            <ListItemButton sx={{
                pl: 4,
                backgroundColor:
                selectedCategory.min === price.min && selectedCategory.max === price.max
                    ? 'lightgray'
                    : 'inherit',
            }} key={index} onClick={() => handleFilteredPrice(price.min, price.max)}>
            <ListItemIcon>
                <HorizontalRuleIcon />
            </ListItemIcon>
            <ListItemText primary={price.label} />
            </ListItemButton>
        ))
    );
}
