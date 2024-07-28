import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { animateHero } from './gsapAnimations';
import Navbar from './Component/Navbar';
import StickyWhatsapp from './Component/StickyWhatsapp';
import CustomerReview from './Component/CustomerReview';
import Title from './Component/Title';
import IndustryCarousel from './Component/ProductSlide';
import Faq from './Component/Faq';
import Footer from './Component/Footer';
const Hero = () => {
    useEffect(() => {
        animateHero();
    }, []);
    return (
        <Box>
            <StickyWhatsapp link={"https://wa.me/8220570301"} />
            <Box sx={{ height: '100vh', bgcolor: '#4b0082' }} className="hero_bg" >
                <Navbar />
                {/* <Box sx={{display:'flex',justifyContent:'center'}}>
                    <Box component='img' src="/Assets/logo.png" sx={{ position: 'absolute'}} />
                </Box> */}
                <Box component='img'
                    id='leaf'
                    src='/Images/leaf.png'
                    alt='leaf'
                    sx={{
                        width: ["25%", "15%", "12.5%"],
                        ml: "3.5%",
                        mt: ["10%", "30%", "0%"],
                        transition: 'tranaform',
                        transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 2s',
                        position: 'absolute',
                    }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 0.5s', ml: [1, -4.5], py: [3, 0] }}>
                    <Box component='img'
                        id='pack'
                        src='/Images/img-4.png'
                        alt='pack'
                        sx={{
                            width: ["40%", "43%", "28%"],
                            mt: [15, 30, -1],
                            ml: 0,
                            transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 2s',
                            position: 'absolute',
                            zIndex: 2
                        }}
                    />
                    <Box component='img'
                        id='cashew'
                        src='/Images/cashew.png'
                        alt='pack'
                        sx={{
                            width: ["28%", "25%", "15%"],
                            mt: ["68%", "70%", '26%'],
                            ml: ['20%', '18%'],
                            transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 2s',
                            position: 'absolute',
                            zIndex: 2
                        }}
                    />
                </Box>
                <Box component='img'
                    id='leaf2'
                    src='/Images/leaf2.png'
                    alt='leaf'
                    sx={{
                        width: ["35%", "20%", "14%"],
                        bottom: [50, 5],
                        right: [10, "10rem"],
                        transition: 'tranaform',
                        transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 2s',
                        position: 'absolute',
                    }}
                />
            </Box>
            <Box sx={{ height: ['100vh', '110vh'], bgcolor: '#92553D' }} className="two">
                <Navbar />
                <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center', justifyContent: "space-between", height: ['80%', '95%'], mx: [2, 11] }}>
                    <Box sx={{ display: 'flex', justifyContent: ['center', 'center', 'normal'] }}>
                        <Box component='img' src='Images/platte-1.png' alt='Cover 2' sx={{ width: ["60%", "60%", "38%"], mt: [20, 50, 0], position: 'absolute' }} />
                    </Box>
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
                <Box sx={{ display: 'flex', justifyContent: 'start', color: 'black', px: [2, 5, 8], pb: 5 }}>
                    <Title color="#282828">Our Products</Title>
                </Box>
                <Box component='img'
                    src='Images/leaf3.avif'
                    alt='leaf'
                    sx={{
                        width: ["70%", "50%", "30%"],
                        ml: [-10],
                        mt: [30, 30, -22],
                        position: 'absolute',
                    }}
                />
                <Box sx={{ mx: [2, 5, 25] }}>
                    <Grid container spacing={{ xs: 3, sm: 3, md: 5 }} justifyContent={'center'} columns={{ xs: 2, sm: 3, md: 3 }}>
                        {[...Array(3)].map((_, index) => (
                            <Grid item xs={1} sm={1} md={1} key={index} sx={{
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                }
                            }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Box
                                        component='img'
                                        src='Images/ProductsImages/dry fruits.png'
                                        alt='pack'
                                        sx={{
                                            width: ["100%", "100%"],
                                            borderRadius: '3%',
                                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
                                            height: "80%",
                                            mb: [-4.5, -8],
                                        }}
                                    />
                                    <Typography sx={{
                                        fontSize: ['1.5rem', '1.5rem', '1.5rem'],
                                        fontWeight: '600',
                                        color: '#282828',
                                        textAlign: 'center',
                                        letterSpacing: 1
                                    }}>
                                        Dates
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <IndustryCarousel />
            </Box>
            <Box sx={{ bgcolor: '#282828',}}>
                <Box sx={{ display: 'flex', justifyContent: 'start', px: [2, 5, 8], pb: [0, 0,3], pt: 5 }}>
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
            <Box sx={{ bgcolor: 'black', mt: 10, px: 2 }}>
                <Footer />
            </Box>
        </Box>
    );
}

export default Hero;
