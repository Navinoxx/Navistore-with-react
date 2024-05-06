import { Link } from "react-router-dom";
import { Badge, Box } from "@mui/material";
import { useStore } from "../../store/bookStore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const MenuIconsRight = () => {
    const { cart, favorites } = useStore()

    return (
        <Box sx={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
            <Link to="/favorites">
                <Badge badgeContent={favorites?.length} color="error">
                    <FavoriteBorderIcon sx={{color: 'white'}} />
                </Badge>
            </Link>
            <Link to="/cart">
                <Badge badgeContent={cart?.length} color="error">
                    <AddShoppingCartIcon sx={{color: 'white'}} />
                </Badge>
            </Link>
        </Box>
    )
}