import React from 'react'
import Navbar from '../Component/Navbar'
import { Box } from '@mui/material'
import Title from '../Component/Title'

export const Contact = () => {
    return (
        <>
            <Navbar color="#000" />
            <Box component='img'
                src='Images/leaf3.avif'
                alt='leaf'
                sx={{
                    width: ["70%", "50%", "25%", "25%", "25rem"],
                    zIndex: -2,
                    ml: [-10, -10, -10, -10, -12],
                    mt: [0, 20, -2.5, -2.5, -3.5],
                    position: 'absolute',
                }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'start', color: 'black', px: [2, 5, 4], zIndex: 30 }}>
                <Title color="#282828">Contact Us</Title>
            </Box>
        </>
    )
}
