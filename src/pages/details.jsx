import { Box, Button, Card, Container, Divider, Typography } from "@mui/material";
import SwipeableTextMobileStepper from "../components/carousel/carousel";
import { useContext, useState } from "react";
import { ProductContext } from "../context/contextProducts";
import credits from "../assets/credits.png";
import { CartContext } from "../context/contextCart";
import { Link } from "react-router-dom";
import IconsCard from "../components/icons/iconsCard";
import HalfRating from "../components/icons/rating";

export default function Details() {   
    const {productsFiltered} = useContext(ProductContext);
    const {addToCart} = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        if (newQuantity <= productsFiltered.stock) {
            setQuantity(newQuantity);
        }
    };

    return (
        <Container maxWidth="xl" sx={{display: 'flex', justifyContent: 'space-between', paddingY: '2rem'}}>
            <Box sx={{maxWidth: '70%'}}>
                <Typography variant="h2" component="h3" sx={{display: 'block'}} gutterBottom>{productsFiltered.title}</Typography>
                <Divider/>
                <Box sx={{display: 'flex', marginTop: '1rem'}}>
                    <SwipeableTextMobileStepper products={productsFiltered} />
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <Box sx={{paddingX: '1rem'}}>
                            <Typography variant="h5" component="h5" gutterBottom>{productsFiltered.description}</Typography>
                            <Typography variant="h6">&#10004; Marca: {productsFiltered.brand}</Typography>
                            <Typography variant="h6">&#10004; Categoría: {productsFiltered.category}</Typography>
                            <Box sx={{display: 'flex'}}>
                                <Typography variant="h6">&#10004; Rating:</Typography>
                                <HalfRating rating={productsFiltered.rating}/>
                            </Box>
                        </Box>
                        <Box sx={{padding: '0.4rem'}}>
                            <IconsCard id={productsFiltered.id}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Card sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography variant="h6" sx={{textDecoration: 'line-through', padding: '0.3rem', color: 'gray', margin: '0.5rem'}}>
                    Precio normal: ${productsFiltered.price}
                </Typography>
                <Typography variant="h6" sx={{backgroundColor: 'red', color: 'white', padding: '0.3rem', margin: '0.5rem'}}>
                    Ahorro: ${Math.round(productsFiltered.price/100 * productsFiltered.discountPercentage)}
                </Typography>
                <Typography variant="h6" sx={{padding: '0.3rem', margin: '0.5rem'}}>
                    Precio oferta: ${Math.round(productsFiltered.price - (productsFiltered.price/100 * productsFiltered.discountPercentage))}
                </Typography>
                <Box sx={{display: 'flex', padding: '0.3rem', margin: '0.5rem', gap: '1rem'}}>
                    <input type="number" min={1} max={productsFiltered.stock} value={quantity} onChange={handleQuantityChange} />
                    <Typography variant="h6">Disponible: {productsFiltered.stock}u</Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', flexGrow: 1, alignItems: 'center'}}>
                    <Typography variant="h4" sx={{color: 'red', textAlign: 'center'}}>6 x ${((productsFiltered.price - (productsFiltered.price/100 * productsFiltered.discountPercentage))/6).toFixed(2)}</Typography>
                    <Typography variant="h6" sx={{color: 'red', textAlign: 'center'}}>Cuotas sin interés</Typography>
                    <img src={credits} alt="Créditos" width={170} />
                </Box>
                <Link to="/carro">
                    <Button variant="contained" sx={{display: 'flex', marginX: 'auto', marginBottom: '1rem'}} onClick={() => addToCart({...productsFiltered, quantity})}>Agregar al carro</Button>
                </Link>
            </Card>
        </Container>
    )
}