import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function CartEmpty() {

    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between', marginRight: '2rem', flexGrow: 1}}>
            <Typography variant="h6" component="h6">No hay productos en tu carro</Typography>
            <Box >
                <Link to="/productos">
                    <Button variant="contained">Iniciar compra</Button>
                </Link>
            </Box>
        </Box>
    )
}