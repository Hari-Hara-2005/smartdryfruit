import { Box, Grid, Typography } from '@mui/material';
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
const Hero = () => {
    useEffect(() => {
        animateHero();
    }, []);

    const industryData = [
        { id: "1", img: "Images/ProductsImages/ourproducts images/dates.png", title: "Dates", link: "/dates" },
        { id: "2", img: "Images/ProductsImages/ourproducts images/nuts.png", title: "Nuts", link: "/nuts" },
        { id: "3", img: "Images/ProductsImages/ourproducts images/seeds.webp", title: "Seeds", link: "/seeds" },
        { id: "4", img: "Images/ProductsImages/ourproducts images/dryfruitss.jpg", title: "Dry Fruits", link: "/dryfruits" },
        { id: "5", img: "Images/ProductsImages/ourproducts images/choco.jpeg", title: "Chocolates", link: "/chocolates" },
        { id: "6", img: "Images/ProductsImages/ourproducts images/juice.jpeg", title: "Drinks", link: "/juice" },
    ];
    return (
        <Box>
            <StickyWhatsapp link={"https://wa.me/8220570301"} />
            <Box sx={{ }} className="hero_bg">
                <Navbar />
                <MainProductSlide />
            </Box>
            {/* <Box sx={{ height: '100vh', bgcolor: '#4b0082', position: 'relative' }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: ["6rem", "23rem"],
                        fontWeight: "bold",
                        letterSpacing: [0, 30],
                        color: "white",
                        position: 'absolute',
                        top: {
                            xs: "45%",  // Extra small devices
                            sm: "40%",  // Small devices
                            md: "50%",  // Medium devices
                            lg: "50%",  // Large devices
                            xl: "50%"   // Extra large devices
                        },
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 1,
                        // opacity: 0.2,
                        textTransform: 'uppercase',
                        fontFamily: "'Poppins ', serif",
                    }}
                >
                    Smart
                </Typography>
                <Box
                    component='img'
                    id='leaf'
                    src='/Images/leaf.png'
                    alt='leaf'
                    sx={{
                        width: ["25%", "15%", "12.5%"],
                        ml: "3.5%",
                        mt: ["10%", "30%", "0%"],
                        transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 2s',
                        position: 'absolute',
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 0.5s',
                        ml: [1, -4.5],
                        py: [3, 0]
                    }}
                >
                    <Box
                        component='img'
                        id='pack'
                        src='/Images/img-4.png'
                        alt='pack'
                        sx={{
                            width: ["25%", "43%", "22%"],
                            mt: ['45%', 30, -1],
                            ml: [0, 4.5],
                            transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 2s',
                            position: 'absolute',
                            zIndex: 2
                        }}
                    />
                    <Box
                        component='img'
                        id='cashew'
                        src='/Images/cashew.png'
                        alt='pack'
                        sx={{
                            width: ["28%", "25%", "15%"],
                            mt: ["72%", "70%", '26%'],
                            ml: ['20%', '18%'],
                            transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 2s',
                            position: 'absolute',
                            zIndex: 2
                        }}
                    />
                </Box>
                <Box
                    component='img'
                    id='leaf2'
                    src='/Images/leaf2.png'
                    alt='leaf'
                    sx={{
                        width: ["35%", "20%", "14%"],
                        bottom: [50, 5],
                        right: [10, "10rem"],
                        transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 2s',
                        position: 'absolute',
                    }}
                />
            </Box> */}
            <Box sx={{ height: ['100vh', '110vh'], bgcolor: '#92553D' }}>
                <Navbar color="#fff" />
                <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center', justifyContent: "space-between", height: ['80%'], mx: [2, 11] }}>
                    <Box sx={{ display: 'flex', justifyContent: ['center', 'center', 'normal'] }}>
                        <Box component='img' src='Images/platte-1.png' alt='Cover 2' sx={{ width: ["70%", "80%", "36%"], mt: [18, 40, 50, 9], position: 'absolute' }} />
                    </Box>
                    <Box
                        component='img'
                        src='/Images/img-4.png'
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
                            color: 'white',
                            py: 1
                        }}>
                            Flavour Updated
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ut et numquam repudiandae, ullam laudantium in? Repudiandae, veniam nemo, iure cum facere accusamus est eligendi quisquam asperiores delectus aspernatur nisi?
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
