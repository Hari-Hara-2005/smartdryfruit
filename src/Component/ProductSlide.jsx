import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const industryData = [
    { id: "1", img: "Images/download.jpg", title: "Nuts 1" },
    { id: "2", img: "Images/download.jpg", title: "Nuts 2" },
    { id: "3", img: "Images/download.jpg", title: "Nuts 3" },
    { id: "4", img: "Images/download.jpg", title: "Nuts 4" },
    { id: "5", img: "Images/download.jpg", title: "Nuts 5" },
    { id: "6", img: "Images/download.jpg", title: "Nuts 6" },
];

const IndustryCarousel = () => {
    const theme = useTheme();

    return (
        <>
            <Box sx={{ width: '100%', height: ["25rem", "20rem", "25rem", "29rem", "36rem"], pt: 5 }}>
                <Swiper
                    slidesPerView={1.145}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        700: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1700: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {industryData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: { xs: "95%", sm: "18rem", md: "18.5rem", lg: "20rem", xl: "22rem" },
                                    height: { xs: "18rem", sm: "30rem", md: "26.5rem", lg: "24rem", xl: "20rem" },
                                    borderRadius: "8px",
                                    overflow: 'hidden',
                                    boxShadow: 5,
                                    ml: 3,
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    }
                                }}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        width: '100%',
                                        bgcolor: 'rgba(0, 0, 0, 0.6)',
                                        color: '#fff',
                                        textAlign: 'center',
                                        p: 1,
                                    }}
                                >
                                    <Typography sx={{ fontSize: ['1rem'] }}    >
                                        {item.title}
                                    </Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
            <style>
                {`
          .swiper {
            width: 100%;
            height: 100%;
          }

          .swiper-slide {
            text-align: center;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .swiper {
            margin-left: auto;
            margin-right: auto;
          }

          .swiper-button-next,
          .swiper-button-prev {
            background-color: #f5f5f7;
            border-radius: 100%;
            padding: 2rem;
            height: 4rem;
            width: 4rem;
            color: gray;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .swiper-button-next:after {
            font-size: 1.5rem;
            font-weight: 900;
            text-align: center;
            margin-left: 6.5px;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
            -webkit-text-stroke: 3px gray;
            text-stroke: 3px #F44247;
          }

          .swiper-button-prev:after {
            font-size: 1.5rem;
            font-weight: 900;
            text-align: center;
            margin-left: -5px;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
            -webkit-text-stroke: 3px gray;
            text-stroke: 3px #F44247;
          }

          @media (max-width: 800px) {
            .swiper-button-next,
            .swiper-button-prev {
            display:none;
              padding: 1rem;
              height: 2rem;
              width: 2rem;
            }

            .swiper-button-next:after {
              font-size: 1rem;
              margin-left: 0.3rem;
              -webkit-text-stroke: 0.1125rem #F44247;
              text-stroke: 0.1125rem #F44247;
            }

            .swiper-button-prev:after {
              font-size: 1rem;
              margin-left: -0.5rem;
              -webkit-text-stroke: 0.1125rem #F44247;
              text-stroke: 0.1125rem #F44247;
            }
          }
        `}
            </style>
        </>
    );
};

export default IndustryCarousel;
