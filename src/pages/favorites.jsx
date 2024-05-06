import { useStore } from "../store/bookStore";
import { RecipeCard } from "../components/cards/card";
import { Container, Box, Grid } from "@mui/material";
import { Divider } from "@material-ui/core";
import { useBorderStyles } from "../hooks/useBorderStyles";
import emptyWishlist from "../assets/empty_wishlist.jpg";
import { CustomTitle } from "../components/title/customTitle";

export const Favorites = () => {
    const { favorites } = useStore();
    const sizeOptions = [1, 2, 3, 4];
    const { borderRightStyles, borderBottomStyles } = useBorderStyles(favorites, sizeOptions);

    if (favorites.length === 0) {
        return (
            <Container maxWidth="xl" component="main" sx={{ marginTop: '2rem'}}>
                <CustomTitle title="Wishlist"/>
                <Divider/>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginY: '2rem', overflow: 'hidden' }}>
                    <img src={emptyWishlist} alt="Empty wishlist" />
                </Box>
            </Container>
        );
    }

    return (
        <Container maxWidth="xl" component="main" sx={{ marginTop: '2rem'}}>
            <CustomTitle title="Wishlist"/>
            <Divider/>
            <Grid container sx={{ marginY: '2rem' }}>
                {favorites.map((favorite, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={favorite.id} sx={{
                        borderRight: { xs: borderRightStyles[index][0], sm: borderRightStyles[index][1], md: borderRightStyles[index][2], lg: borderRightStyles[index][3] },
                        borderBottom: { xs: borderBottomStyles[index][0], sm: borderBottomStyles[index][1], md: borderBottomStyles[index][2], lg: borderBottomStyles[index][3] }
                    }}>
                        <RecipeCard product={favorite}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

