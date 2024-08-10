import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Box, Typography, Button } from '@mui/material';
import Footer from '../Component/Footer';
import { removeFromCart, clearCart } from '../redux/cartSlice';
import CartItemCard from '../Pages/CartItemCard.js';
import Navbar from '../Component/Navbar';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleShoppingClick = () => {
        const message = cartItems.map(item => {
            return `Name: ${item.name}\nPrice: ${item.price}\nGrams: ${item.selectedGram}`;
        }).join('\n\n');

        const encodedMessage = encodeURIComponent(`Hi! I'm interested in these products:\n\n${message}\n\nPlease provide more details and help me place an order.`);
        const whatsappNumber = '919952857016';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <>
            <Navbar color="#000" />
            <Box sx={{ display: 'flex', justifyContent: 'start', color: 'black', px: [2, 5, 4] }}>
                <Typography variant="h4" sx={{ mt: 3, mb: 3, color: '#282828', fontWeight: 700 }}>
                    Your Cart
                </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', px: [2, 3, 0], py: [5], zIndex: 30 }}>
                <Grid container spacing={6} justifyContent="center" alignItems="center">
                    {cartItems.map((item) => (
                        <Grid item key={item.id} xs={12} sm={6} md={3.8} lg={3.6}>
                            <CartItemCard
                                product={item}
                                isLoading={false}
                                cartMode={true}
                                onRemove={() => handleRemoveFromCart(item.id)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2,gap:'5rem' }}>
                {cartItems.length > 0 && (
                    <Button variant="contained" sx={{
                        bgcolor: "#92553D", textTransform: 'none', borderRadius: '50px', px: [2.5], '&:hover': {
                            bgcolor: "#282828"
                        }
                    }} color="primary" onClick={handleClearCart}>
                        Clear Cart
                    </Button>
                )}
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: "#92553D", textTransform: 'none', borderRadius: '50px', px: [2.5], '&:hover': {
                            bgcolor: "#282828"
                        }
                    }}
                    onClick={handleShoppingClick}
                    disabled={cartItems.length === 0}
                >
                    Shop via WhatsApp
                </Button>
            </Box>
            <Box sx={{ bgcolor: 'black', mt: 20, px: 2 }}>
                <Footer />
            </Box>
        </>
    );
};

export default Cart;