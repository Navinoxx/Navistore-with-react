import AppBar from '@mui/material/AppBar';
import { NavInf } from './navInf';
import { NavSup } from './navSup';

function SearchAppBar() {
    
    return (
        <AppBar position="sticky">
            <NavSup/>
            <NavInf/>
        </AppBar>
    );
}

export default SearchAppBar;