import { useState } from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InboxIcon from '@mui/icons-material/Inbox';
import ListCategories from './ListCategories';
import RangePrice from './RangePrice';
import ListBrands from './ListBrands';

export default function NestedList() {
    const [open, setOpen] = useState([false, false, false]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleClick = (index) => {
        setOpen((prevOpen) => {
        const newOpen = [...prevOpen];
        newOpen[index] = !newOpen[index];
        return newOpen;
        });
    };

    const handleCategorySelection = (category) => {
        setSelectedCategory(category);
    };

    return (
        <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="aside"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
            Refina tu búsqueda
            </ListSubheader>
        }
        >
        <ListItemButton onClick={() => handleClick(0)}>
            <ListItemIcon>
            <DevicesOtherIcon />
            </ListItemIcon>
            <ListItemText primary="Categorías" />
            {open[0] ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open[0]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListCategories handleCategorySelection={handleCategorySelection} selectedCategory={selectedCategory} />
            </List>
        </Collapse>
        <ListItemButton onClick={() => handleClick(1)}>
            <ListItemIcon>
            <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Rango de precios" />
            {open[1] ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open[1]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <RangePrice handleCategorySelection={handleCategorySelection} selectedCategory={selectedCategory} />
            </List>
        </Collapse>
        <ListItemButton onClick={() => handleClick(2)}>
            <ListItemIcon>
            <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Marca" />
            {open[2] ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open[2]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListBrands handleCategorySelection={handleCategorySelection} selectedCategory={selectedCategory} />
            </List>
        </Collapse>
        </List>
    );
}

