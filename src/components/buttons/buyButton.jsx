import { Box, IconButton, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const BuyButton = () => {

    return (
        <Box sx={{ display: 'inline-flex', border: '1px solid', borderRadius: '2rem', alignItems: 'center' }}>
            <Typography sx={{ paddingLeft: '2rem' }}>Buy now</Typography>
            <IconButton aria-label="add to cart" sx={{ color: 'white', bgcolor: 'primary.contrastText', boxShadow: '0px 0px 0px 5px rgba(0, 0, 0, 0.3)', '&:hover': { bgcolor: 'secondary.main', boxShadow: '0px 0px 0px 5px rgba(245, 198, 21, 0.3)' }, left: '1rem', transition: 'all 0.3s ease' }}>
                <AddShoppingCartIcon />
            </IconButton>
        </Box>
    )
}