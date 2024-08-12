import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { animateHero } from '../gsapAnimations';
import Navbar from '../Component/Navbar';
import StickyWhatsapp from '../Component/StickyWhatsapp';
import CustomerReview from '../Component/CustomerReview';
import Title from '../Component/Title';
import IndustryCarousel from '../Component/ProductSlide';
import Faq from '../Component/Faq';
import Footer from '../Component/Footer';
import { Link } from 'react-router-dom';
import MainProductSlide from '../Component/MainProductSlide';
import { ScrollDownButton } from '../Component/ScrollDownButton';

const Hero = () => {
    useEffect(() => {
        animateHero();
    }, []);

    const industryData = [
        { id: "1", img: "Images/ProductsImages/ourproducts images/dates.png", title: "Dates", link: "/dates" },
        { id: "2", img: "Images/ProductsImages/ourproducts images/nuts.png", title: "Nuts", link: "/nuts" },
        { id: "3", img: "Images/ProductsImages/ourproducts images/seeds.webp", title: "Seeds", link: "/seeds" },
        { id: "4", img: "Images/ProductsImages/ourproducts images/dryfruitss.jpg", title: "Dry Fruits", link: "/dryfruits" },
        { id: "5", img: "Images/ProductsImages/ourproducts images/choco.avif", title: "Chocolates", link: "/chocolates" },
        { id: "6", img: "Images/ProductsImages/ourproducts images/juice.jpeg", title: "Drinks", link: "/juice" },
    ];
    return (
        <Box>
            <StickyWhatsapp link={"https://wa.me/7339534672"} />
            <Box sx={{}} className="hero_bg">
                <Navbar />
                <MainProductSlide />
                <ScrollDownButton />
            </Box>
            <Box sx={{ height: ['100vh', '100vh'], bgcolor: '#92553D' }}>
                <Navbar color="#fff" />
                <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center', justifyContent: "space-between", height: ['75%'], mx: [2, 11] }}>
                    <Box sx={{ display: 'flex', justifyContent: ['center', 'center', 'normal'] }}>
                        <Box component='img' src='Images/platte-1.png' alt='Cover 2' sx={{ width: ["70%", "80%", "36%"], mt: [17.5, 40, 40, 50, 9], position: 'absolute' }} />
                    </Box>
                    <Box
                        component='img'
                        src='Images/mpi/img4.png'
                        alt='pack'
                        sx={{
                            width: ["35%", "40%", "22%"],
                            transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 2s',
                            position: 'absolute',
                            ml: [0, 0, 13],
                            zIndex: 2
                        }}
                    />
                    <Box sx={{ width: ["100%", "100%", "50%"] }}>
                        <Typography sx={{
                            fontSize: ['1.5rem', '1.5rem', '2.5rem'],
                            fontWeight: '600',
                            color: '#FFF',
                            py: 1
                        }}>
                            Flavour Updated
                        </Typography>
                        <Typography sx={{ textAlign: 'justify', fontSize: 20, color: '#fff' }}>
                            We're thrilled to introduce new flavors to our cashews! Whether you love bold, spicy, or sweet tastes, our updated selection has something for everyone. Each flavor is crafted with care to ensure a satisfying crunch and a burst of deliciousness in every bite. Try them today and elevate your snacking experience!
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {/* <Box component='img'
                src='Images/img-right-up@2x.avif'
                alt='leaf'
                sx={{
                    width: ["40%", "20%", "20%"],
                    right: 0,
                    position: 'absolute',
                }}
            /> */}
            <Box sx={{ bgcolor: '#fff' }} className="three" >
                <Box component='img'
                    src='Images/leaf3.avif'
                    alt='leaf'
                    sx={{
                        width: ["70%", "50%", "30%"],
                        ml: [-10],
                        mt: [54, 20, -5],
                        position: 'absolute',
                    }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'start', color: 'black', px: [2, 5, 8], pb: [5, 12] }}>
                    <Title color="#282828">Our Products</Title>
                </Box>
                <Box sx={{ mx: [2, 5, 5, 12] }}>
                    <Grid container spacing={{ xs: 3, sm: 3, md: 5 }} justifyContent={'center'} columns={{ xs: 2, sm: 3, md: 3 }}>
                        {industryData.map((item, index) => (
                            <Grid item xs={1} sm={1} md={1} key={index} sx={{
                                cursor: 'pointer',
                                transition: 'transform 0.5s ease',
                                '&:hover': {
                                    transform: 'scale(1.10)',
                                }
                            }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Link
                                        to={item.link}
                                        color={"inherit"}
                                        style={{ textDecoration: 'none' }}
                                        key={index}
                                    >
                                        <Box sx={{ width: ["100%", "100%", "100%", "100%", '25rem'] }}>
                                            <Box
                                                component='img'
                                                src={item.img}
                                                alt='pack'
                                                sx={{
                                                    width: ["100%"],
                                                    borderRadius: '3%',
                                                    height: ['12rem', '18rem', '20rem', '25rem'],
                                                    border: '3px solid #92553D',
                                                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
                                                    cursor: 'pointer',
                                                    mb: [-4.5, -6]
                                                }}
                                            />
                                        </Box>
                                        <Typography sx={{
                                            fontSize: ['1.2rem', '1.5rem', '1.5rem'],
                                            fontWeight: '600',
                                            color: '#fff',
                                            textAlign: 'center',
                                            letterSpacing: 1,
                                        }}>
                                            {item.title}
                                        </Typography>
                                    </Link>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <IndustryCarousel />
            </Box>
            <Box sx={{ bgcolor: '#282828', }}>
                <Box sx={{ display: 'flex', justifyContent: 'start', px: [2, 5, 8], pb: [0, 0, 3], pt: 5 }}>
                    <Title color="#fff" >Read our customers say</Title>
                </Box>
                <CustomerReview />
            </Box>
            <Box sx={{ px: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'start', color: 'black', px: [2, 5, 8], pb: 5 }}>
                    <Title color="#282828">Frequently Asked Question</Title>
                </Box>
                <Faq />
            </Box>
            <Box sx={{ bgcolor: 'black', mt: 20, px: 2 }}>
                <Footer />
            </Box>
        </Box>
    );
}

export default Hero;
