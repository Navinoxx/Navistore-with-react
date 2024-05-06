import { useState } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Thumbs, FreeMode } from "swiper/modules";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";

export const CarouselDetails = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <Swiper
                style={{ '--swiper-pagination-color': '#fff' }}
                loop={true}
                spaceBetween={10}
                grabCursor={true}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                thumbs={{
                    swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                }}
                modules={[FreeMode, Pagination, Thumbs]}
            >
                {images?.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            component="img"
                            src={image}
                            alt={`Slide ${index}`}
                            sx={{
                                width: '100%',
                                height: '22rem',
                                objectFit: 'cover',
                                transform: index === activeIndex ? 'scale(1.1)' : 'scale(1)',
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={Math.min(4, images?.length)}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Pagination, Thumbs]}
            >
                {images?.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            component="img"
                            src={image}
                            alt={`Thumbnail ${index}`}
                            sx={{
                                height: '5rem',
                                minWidth: '20%',
                                maxWidth: '100%',
                                objectFit: 'cover',
                                mt: '1rem',
                                opacity: index === activeIndex ? 1 : 0.6,
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

CarouselDetails.propTypes = {
    images: PropTypes.array.isRequired
};