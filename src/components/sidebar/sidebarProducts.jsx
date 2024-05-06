import { useState } from "react";
import { useStore } from "../../store/bookStore";
import { List, ListItemButton, ListItemText, ListSubheader, Collapse, Typography, Button } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { ListCategories } from "./listCategories";
import { RangePrice } from "./rangePrice";
import { ListBrands } from "./listBrands";

export const NestedList = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const { clearAllFilters } = useStore();

    const handleClearAllFilters = () => {
        clearAllFilters();
        setOpenIndex(null);
    }

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <List
        sx={{ width: 300, borderRight: '1px solid #E0E0E0', pr: '1rem', display: { xs: 'none', md: 'block'} }}
        component="aside"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader" sx={{ paddingX: 0, display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant="span" sx={{ display: 'flex', gap: '0.5rem' }} >
                    Search by filters
                </Typography>
                <Button variant="text" size="small" onClick={handleClearAllFilters}>Clear all</Button>
            </ListSubheader>
        }
        >
            <RangePrice />
            {[
                { text: 'Category', component: <ListCategories openIndex={openIndex} /> },
                { text: 'Brands', component: <ListBrands openIndex={openIndex} /> }
            ].map(({ text, component }, index) => (
                <List key={index}>
                    <ListItemButton onClick={() => handleClick(index)} sx={{ paddingX: 0}}>
                        <ListItemText primary={text} />
                        {openIndex === index ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>{component}</List>
                    </Collapse>
                </List>
            ))}
        </List>
    );
}

