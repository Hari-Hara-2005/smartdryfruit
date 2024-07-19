import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { animateHero } from './gsapAnimations';
import Navbar from './Navbar';

const Hero = () => {
    useEffect(() => {
        animateHero();
    }, []);

    return (
        <Box>
            <Box sx={{ height: '100vh', bgcolor: '#4b0082' }} className="hero_bg" >
                {/* <Box sx={{display:'flex',justifyContent:'center'}}>
                    <Box component='img' src="/Assets/logo.png" sx={{ position: 'absolute'}} />
                </Box> */}
                <Box component='img'
                    id='leaf'
                    src='/Images/leaf.png'
                    alt='leaf'
                    sx={{
                        width: "12.5%",
                        ml: "3.5%",
                        mt: "6.5%",
                        transition: 'tranaform',
                        transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 2.5s',
                        position: 'absolute',
                    }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', py: '2rem', transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 0.5s', ml: -1.2 }}>
                    <Box component='img'
                        id='pack'
                        src='/Images/img-4.png'
                        alt='pack'
                        sx={{
                            width: "28%",
                            transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 2.5s',
                            position: 'absolute',
                            zIndex: 2
                        }}
                    />
                    <Box component='img'
                        id='cashew'
                        src='/Images/cashew.png'
                        alt='pack'
                        sx={{
                            width: "15%",
                            mt: '26%',
                            ml: '15%',
                            transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 2.5s',
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
                        width: "14%",
                        bottom: 20,
                        right: "10rem",
                        transition: 'tranaform',
                        transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 2.5s',
                        position: 'absolute',
                    }}
                />
            </Box>
            <Box sx={{ height: '102vh', bgcolor: '#92553D' }} className="two">
                <Navbar />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", height: '80%', mx: 11 }}>
                    <Box>
                        <Box component='img' src='/Images/platte.png' alt='Cover 2' sx={{ width: "38%", position: 'absolute' }} />
                    </Box>
                    <Box sx={{ width: "50%" }}>
                        <Typography sx={{
                            fontSize: ['1.5rem', '1.5rem', '2.5rem'],
                            fontWeight: '600',
                            color: 'white',
                            py:1
                        }}>
                            Flavour Updated
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ut et numquam repudiandae, ullam laudantium in? Repudiandae, veniam nemo, iure cum facere accusamus est eligendi quisquam asperiores delectus aspernatur nisi?
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Hero;
