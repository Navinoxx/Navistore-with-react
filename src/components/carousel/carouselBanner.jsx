import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import image1 from "../../assets/banner/hot-deal1.png";
import image2 from "../../assets/banner/hot-deal2.png";
import image3 from "../../assets/banner/hot-deal3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

const images = [
    { src: image1, alt: 'image1' },
    { src: image2, alt: 'image2' },
    { src: image3, alt: 'image3' },
]
    
export const CarouselBanner = () => {
    const swiperImages = images.map(({ src, alt }, index) => (
        <SwiperSlide key={index}>
            <Box
                component="img"
                src={src}
                alt={alt}
                sx={{
                width: { xs: '80%', sm: '50%' },
                height: { xs: '80%', sm: '50%' },
                display: 'block',
                margin: '0 auto',
                paddingY: '4rem',
                }}
            />
        </SwiperSlide>
    ));

    return (
        <>
            <Swiper
                style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
                loop
                spaceBetween={10}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Navigation, Pagination, Autoplay]}
            >
                {swiperImages}
            </Swiper>
        </>
    );
};
