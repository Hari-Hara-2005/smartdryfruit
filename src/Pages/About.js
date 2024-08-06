import Navbar from '../Component/Navbar'
import Title from '../Component/Title'
import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import VerifiedIcon from '@mui/icons-material/Verified';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const About = () => {
    const industryData = [
        { id: "1", img: "/Images/aboutimage/ab2.jpg", title: "Nuts 1" },
        { id: "2", img: "/Images/aboutimage/ab3.jpg", title: "Nuts 2" },
        { id: "3", img: "/Images/aboutimage/ab4.jpg", title: "Nuts 3" },
        { id: "4", img: "/Images/aboutimage/ab5.jpg", title: "Nuts 4" },
        { id: "5", img: "/Images/aboutimage/ab6.jpg", title: "Nuts 5" },
        { id: "6", img: "/Images/aboutimage/ab4.jpg", title: "Nuts 6" },
        { id: "6", img: "/Images/aboutimage/ab3.jpg", title: "Nuts 6" },
    ];

    const features = [
        { icon: <LocalShippingIcon sx={{ fontSize: 40, color: '#e53935' }} />, text: 'Free Shipping On Orders Above ₹1299' },
        { icon: <PaymentIcon sx={{ fontSize: 40, color: '#e53935' }} />, text: 'Pay On Delivery' },
        { icon: <VerifiedIcon sx={{ fontSize: 40, color: '#e53935' }} />, text: '100% Quality Guaranteed' },
        { icon: <LoyaltyIcon sx={{ fontSize: 40, color: '#e53935' }} />, text: 'Reward Points On Every Purchase' },
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
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
                    <Box sx={{ width: { xs: "91%", sm: "85%", md: "90%", lg: "90%", xl: "95%" }, height: { xs: "15rem", sm: "18rem", md: "25rem", lg: "25rem", xl: "30rem" }, borderRadius: '20px', }}>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            className="mySwiper"
                        >
                            {industryData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: { xs: "15rem", sm: "18rem", md: "25rem", lg: "25rem", xl: "30rem" },
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
                                                borderRadius: "20px",
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
                                     .swiper-pagination {
                                    bottom: 10px; /* Adjust position as needed */
                                }
                                .swiper-pagination-bullet {
                                    background: #fff; /* Default color */
                                    opacity: 1; /* Ensure bullets are visible */
                                }
                                .swiper-pagination-bullet-active {
                                    background: #92553D; /* Active bullet color */
                                }
                            `}
                        </style>
                    </Box>
                </Box>
            </Box>
            {/* <Box sx={{ mx: 10,my:5, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: 2, boxShadow: 3 }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src="Images/smart shop 5.jpeg"
                            alt="Store Image"
                            sx={{ width: '100%', borderRadius: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" component="div" sx={{ mb: 2, color: '#8b1c30' }}>
                            11+ Stores
                        </Typography>
                        <Divider />
                        <Typography variant="h6" component="div" sx={{ my: 2, color: '#8b1c30' }}>
                            450000+ Happy Customers
                        </Typography>
                        <Divider />
                        <Typography variant="h6" component="div" sx={{ mt: 2, color: '#8b1c30' }}>
                            500000+ Order Delivered
                        </Typography>
                    </Grid>
                </Grid>
            </Box> */}
            <Box sx={{}}>
                <Box sx={{ py: [10], px: 2, display: 'flex', justifyContent: 'center', flexDirection: ['column', 'row'] }}>
                    {/* <Typography variant="h6" component="div" sx={{ color: '#000', fontWeight: 600, pb: [2], textAlign: 'center', letterSpacing: 0.5, fontSize: 17, lineHeight: [1.3, 'normal'], display: ['block', 'none'] }}>
                        Hey,We Aren't That Far!
                    </Typography> */}
                    <Box
                        sx={{
                            position: 'relative',
                            width: { xs: "90%", sm: "85%", md: "90%", lg: "90%", xl: "30%" },
                            height: { xs: "19rem", sm: "18rem", md: "25rem", lg: "25rem", xl: "25rem" },
                        }}
                    >
                        <img
                            src="Images/smart shop 5.jpeg"
                            alt="Store Image"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '3px',
                                borderTopLeftRadius: '15%',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                display: 'flex',
                                flexDirection: ['column', 'row'],
                                bgcolor: 'white',
                                color: '#fff',
                                width: ['38%', '40rem'],
                                right: ['-11%', "-90%"],
                                bottom: ['5%', "-5%"],
                                boxShadow: 3,
                                borderRadius: '2px',
                                px: [2, 5],
                                py: 2
                            }}
                        >
                            <Box sx={{
                                borderRight: ['none', '2px solid #92553D'],
                                borderBottom: ['2px solid #92553D', 'none'], px: [0, 5], pb: [2, 0],
                            }}>
                                <Typography variant="h6" component="div" sx={{ mb: -1, color: '#92553D', fontWeight: 600 }}>
                                    11+
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ color: '#000', fontWeight: 600, fontSize: 15 }}>
                                    Stores
                                </Typography>
                            </Box>
                            <Box sx={{
                                borderRight: ['none', '2px solid #92553D'],
                                borderBottom: ['2px solid #92553D', 'none'], px: [0, 5], ml: [0, 4], py: [2, 0]
                            }}>
                                <Typography variant="h6" component="div" sx={{ mb: -1, color: '#92553D', fontWeight: 600, }}>
                                    450000+
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ color: '#000', fontWeight: 600, fontSize: 15, lineHeight: [1.3, 'normal'] }}>
                                    Happy Customers
                                </Typography>
                            </Box>
                            <Box sx={{ px: [0, 2], ml: [0, 4], pt: [2, 0] }}>
                                <Typography variant="h6" component="div" sx={{ mb: -1, color: '#92553D', fontWeight: 600, }}>
                                    500000+
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ color: '#000', fontWeight: 600, fontSize: 15, lineHeight: [1.3, 'normal'] }}>
                                    Order Delivered
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: ["100%", "25%"], px: [2, 5], textAlign: 'justify' }}>
                        <Typography sx={{
                            fontSize: ['1.5rem', '1.5rem', '1.5rem'],
                            fontWeight: '600',
                            color: ' #92553D',
                            py: 1
                        }}>
                            Hey,We Aren't That Far!
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ut et numquam repudiandae, ullam laudantium in? Repudiandae, veniam nemo, iure cum facere accusamus est eligendi quisquam asperiores delectus aspernatur nisi?
                        </Typography>
                        <Typography sx={{
                            fontSize: ['1rem', '1.5rem', '1rem'],
                            fontWeight: '600',
                            color: ' #92553D',
                            py: 1
                        }}>
                            Click To Shop!
                        </Typography>
                        <Button variant="contained" sx={{
                            bgcolor: "#92553D", textTransform: 'none', borderRadius: '50px', px: [2.5], '&:hover': {
                                bgcolor: "#282828"
                            },
                        }}>
                            Shop Now
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ p: 4, backgroundColor: '#1c1c1c', borderRadius: 2, boxShadow: 3, color: '#fff' }}>
                <Grid container spacing={4} justifyContent="center">
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index} sx={{ textAlign: 'center' }}>
                            {feature.icon}
                            <Typography variant="body1" sx={{ mt: 2 }}>
                                {feature.text}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}
