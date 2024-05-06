import { useState, useEffect } from "react";
import { useStore } from "../../store/bookStore";
import { Box, Container, Grid } from "@mui/material";
import { CustomTitle } from "../title/customTitle"
import { CardBanner } from "../cards/cardBanner";

export const BannerCategories = () => {
    const { products } = useStore();
    const [ watches, setWatches ] = useState([]);
    const [ laptops, setLaptops ] = useState([]);
    const [ sunglasses, setSunglasses ] = useState([]);

    useEffect(() => {
        setLaptops(products.filter(product => product.category === 'laptops').slice(0, 3));
        setWatches(products.filter(product => product.category === 'mens-watches').slice(0, 3));
        setSunglasses(products.filter(product => product.category === 'sunglasses').slice(0, 3));
    }, [ products ]);

    return (
        <Box component="section" sx={{ width: '100%' }}>
            <Container maxWidth="xl" sx={{ marginTop: '8rem' }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={8} md={4}>
                        <Box>
                            <CustomTitle title="Laptops" /> 
                            {laptops.map(product => (
                                <Box key={product.id} sx={{ width: '80%', marginTop: '2rem', borderBottom: '1px solid #E0E0E0'  }}>
                                    <CardBanner product={product} width="100%" height={200} direction="column" />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4}>
                        <Box>
                            <CustomTitle title="Watches" />
                            {watches.map(product => (
                                <Box key={product.id} sx={{ width: '80%', marginTop: '2rem',borderBottom: '1px solid #E0E0E0' }}>
                                    <CardBanner product={product} width="100%" height={200} direction="column" />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4}>
                        <Box>
                            <CustomTitle title="Sunglasses" />
                            {sunglasses.map(product => (
                                <Box key={product.id} sx={{ width: '80%', marginTop: '2rem',borderBottom: '1px solid #E0E0E0' }}>
                                    <CardBanner product={product} width="100%" height={200} direction="column" />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}