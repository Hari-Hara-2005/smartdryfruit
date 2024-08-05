import Navbar from '../Component/Navbar'
import Title from '../Component/Title'
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

export const About = () => {
    const industryData = [
        { id: "1", img: "Images/download.jpg", title: "Nuts 1" },
        { id: "2", img: "Images/download.jpg", title: "Nuts 2" },
        { id: "3", img: "Images/download.jpg", title: "Nuts 3" },
        { id: "4", img: "Images/download.jpg", title: "Nuts 4" },
        { id: "5", img: "Images/download.jpg", title: "Nuts 5" },
        { id: "6", img: "Images/download.jpg", title: "Nuts 6" },
    ];
    return (
        <>
            <Navbar color="#000" />
            <Box component='img'
                src='Images/leaf3.avif'
                alt='leaf'
                sx={{
                    width: ["70%", "50%", "25%", "25%", "30rem"],
                    zIndex: 5,
                    ml: [-10, -10, -10, -10, -15],
                    mt: [0, 20, -2.5, -2.5, -5],
                    position: 'absolute',
                }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'start', color: 'black', px: [2, 5, 5], zIndex: 30 }}>
                <Title color="#282828">About</Title>
            </Box>
            <Box>
                <Box sx={{display:'flex',justifyContent:'center',mt:10}}>
                    <Box sx={{ width: { xs: "91%", sm: "85%", md: "90%", lg: "90%", xl: "95%" }, height: { xs: "15rem", sm: "18rem", md: "25rem", lg: "25rem", xl: "28rem" }, borderRadius: '15px', border: '3px solid #92553D', }}>
                        <Swiper

                            className="mySwiper"
                        >
                            {industryData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: { xs: "15rem", sm: "18rem", md: "25rem", lg: "25rem", xl: "28rem" },
                                            borderRadius: "16px",
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: "16px",
                                            }}
                                        />
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
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

                   
                `}
                        </style>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
