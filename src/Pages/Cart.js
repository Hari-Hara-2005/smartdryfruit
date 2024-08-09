import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, List, ListItem } from '@mui/material';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>Cart Items</Typography>
            {cartItems.length === 0 ? (
                <Typography variant="body1">Your cart is empty.</Typography>
            ) : (
                <List>
                    {cartItems.map((item) => (
                        <ListItem key={item.id}>
                            <Typography variant="body1">
                                {item.name} - {item.selectedGram} - ${item.price}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
};

export default Cart;
