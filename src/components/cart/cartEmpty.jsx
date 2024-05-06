import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import cartEmpty from "../../assets/empty_cart.png";

export const CartEmpty = () => {

    return (
        <>
            <Box >
                <Link to="/products/all">
                    <Button variant="contained" sx={{ color: 'white', position: 'absolute' }}>Continue shopping</Button>
                </Link>
            </Box>
            <Box component="img" src={cartEmpty} alt="Cart Empty" sx={{ marginX: 'auto', marginTop: '2rem', overflow: 'hidden' }} loading="lazy"/>
        </>
    )
}