import { Box } from "@mui/material";
import { Banner } from "../components/banner/banner";
import { BannerProducts } from "../components/banner/bannerProducts";
import { BannerProposes } from "../components/banner/bannerProposes";
import { BannerHotDeals } from "../components/banner/bannerHotDeals";
import { BannerCategories } from "../components/banner/bannerCategories";
import { BannerDiscount } from "../components/banner/bannerDiscount";

export const Home = () => {

    return (
        <Box component="main" sx={{ width: '100%', minHeight: '100vh' }}>
            <Banner />
            <BannerProducts />
            <BannerProposes />
            <BannerHotDeals />
            <BannerCategories />
            <BannerDiscount />
        </Box>
    );
}