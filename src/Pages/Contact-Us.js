import React, { useEffect } from 'react'
import Navbar from '../Component/Navbar'
import { Box, Container, Paper, Typography } from '@mui/material'
import Title from '../Component/Title'
import EmailIcon from '@mui/icons-material/Email';
import PhoneCallback from '@mui/icons-material/PhoneCallback';
import Footer from '../Component/Footer';
export const Contact = () => {
    useEffect(() => {
        document.title = "Contact Us";
    }, []);
    return (
        <>
            <Navbar color="#000" />
            <Box
                component='img'
                id='pack'
                src='Images/aboutimage/ab4.jpg'
                alt='pack'
                sx={{
                    width: ["100%"],
                    height:'50vh',
                    position: 'absolute',
                    mt:[2,4,2],
                    zIndex: -2
                }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', height: '50vh', zIndex: 2, alignItems: 'center' }}>
                <Title color="#fff">Contact Us</Title>
            </Box>
            <Box sx={{ pb: 10 }}>
                <Box sx={{ fontFamily: '"League Spartan", sans-serif' }}>
                    <Container sx={{ pt: { xs: 8, md: 18 } }}>
                        <Paper elevation={3} sx={{ mx: 'auto', maxWidth: 800, border: 4, borderColor: '#92553D', borderRadius: 3 }}>
                            <Typography variant="h4" align="center" sx={{ py: 2, backgroundColor: '#92553D', color: 'white', fontWeight: 'bold' ,fontSize:['1.5rem','1.5rem','2rem']}}>
                                Registered address
                            </Typography>
                            <Box sx={{ borderBottom: 2, borderColor: '#92553D', mx:[2,4], py: 4 }}>
                                <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                                    Smart Dry Fruits
                                </Typography>
                                <Typography variant="body1" align="center" sx={{ mt: 2, lineHeight: 2 }}>
                                    X97F+92G, Chakrapani Sannathi Street,<br />
                                    Karna Kollai Agraharam, Valayapettai Agraharam,<br />
                                    Kumbakonam, Tamil Nadu 612001, India.
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', py: 2, pb: [4], justifyContent: 'center', gap:['1rem','5rem'],flexDirection:['column','row'] }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <EmailIcon sx={{ color: '#282828', mr: 1 }} />
                                    <Typography variant="body1" sx={{ fontWeight: 'medium', letterSpacing: 1 }}>
                                        smartdryfruits@gmail.com
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <PhoneCallback sx={{ color: '#282828', mr: 1 }} />
                                    <Typography variant="body1" sx={{ fontWeight: 'medium', letterSpacing: 1 }}>
                                       +91 9952857016
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Container>
                </Box>
            </Box>
            <Box sx={{ bgcolor: 'black', mt: 10, px: 2 }}>
                <Footer />
            </Box>
        </>
    )
}
