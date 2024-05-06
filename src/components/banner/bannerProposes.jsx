import { useEffect, useState } from "react";
import { useStore } from "../../store/bookStore";
import { Container, Grid } from "@mui/material";
import { CustomTitle } from "../title/customTitle";
import { CardBanner } from "../cards/cardBanner";
import bgBanner from "../../assets/banner/home1-bg-featured.jpg";

export const BannerProposes = () => {
    const { products } = useStore();
    const [productsFiltered, setProductsFiltered] = useState([]);

    useEffect(() => {
        const filtered = products?.filter((product) => product.category === 'smartphones');
        setProductsFiltered(filtered)
    }, [products]);

    return (
        <Container component="section" maxWidth="xl" sx={{ backgroundImage: { md: `url(${bgBanner})`}, minHeight: '80vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'left', marginY: '5rem' }}>
            <CustomTitle title="Best proposes"/>
            <Grid container sx={{ padding: { md: '3rem 0 0 10rem', lg: '3rem 0 0 20rem'}}}>
                <Grid item xs={12} md={6} sx={{ border: '1px solid #E0E0E0' }}>
                    <CardBanner product={productsFiltered?.[0]} width="100%" height={{ xs: 300, md: 380 }} direction="column" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container>
                        <Grid item xs={12} md={12} sx={{ border: '1px solid #E0E0E0', left: { md: '-1px'}, position: 'relative' }}>
                            <CardBanner product={productsFiltered?.[1]} width={{ xs: '100%', md: '50%' }} height={{ xs: 300, md: 250 }} direction={{ xs: 'column', md: 'row'}} />
                        </Grid>
                        <Grid item xs={12} md={12} sx={{ border: '1px solid #E0E0E0', left: { md: '-1px'}, position: 'relative' }}>
                            <CardBanner product={productsFiltered?.[2]} width={{ xs: '100%', md: '50%' }} height={{ xs: 300, md: 250 }} direction={{ xs: 'column', md: 'row'}} />
                        </Grid>
                    </Grid>
                </Grid> 
            </Grid>
        </Container>
    )   
}