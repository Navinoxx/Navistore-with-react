import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../store/bookStore";
import { Box, Container, Divider, Typography, Grid, CircularProgress } from "@mui/material";
import { IconsCard } from "../components/icons/iconsCard";
import { HalfRating } from "../components/icons/rating"; 
import { CardDetails } from "../components/cards/cardDetails";
import { CustomTitle } from "../components/title/customTitle";
import { AccessibleTabs } from "../components/tabs/tab";
import { CarouselDetails } from "../components/carousel/carouselDetails";
import { Error404 } from "./error404";

export const Details = () => {
    const { addToCart, products } = useStore();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const product = useMemo(() => products.find(product => product.id === Number(id)), [products, id]);

    useEffect(() => {
        if (product) {
            setLoading(false);
        }
    }, [product]);

    if (loading) {
        return  (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <CircularProgress size={70}/>
            </Box>
        );
    }

    if (!product) {
        return <Error404 />;
    }

    return (   
        <Container maxWidth="xl" sx={{ paddingY: '2rem' }}>
            <CustomTitle title={product.title} />
            <Divider/>
            <Grid container spacing={2} sx={{ paddingY: '2rem' }}>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <CarouselDetails images={product.images} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box sx={{paddingX: '1rem'}}>
                        <Typography variant="h5" component="h5" gutterBottom>{product.description}</Typography>
                        <Typography variant="h6">&#10004; Brand: {product.brand}</Typography>
                        <Typography variant="h6">&#10004; Category: {product.category}</Typography>
                        <Box sx={{display: 'flex'}}>
                            <Typography variant="h6">&#10004; Rating:</Typography>
                            <HalfRating rating={product.rating}/>
                        </Box>
                    </Box>
                    <Box sx={{ padding: '0.4rem' }}>
                        <IconsCard id={product.id}/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2} sx={{ padding: '0.5rem' }}>
                    <CardDetails product={product} addToCart={addToCart} />
                </Grid>
            </Grid>
            <AccessibleTabs rating={product.rating} />
        </Container>
    )
}
