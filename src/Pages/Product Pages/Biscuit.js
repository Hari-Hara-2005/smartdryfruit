import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, IconButton, Typography, Grid, Box, Stack, Button, Skeleton, Select, MenuItem, InputLabel } from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShareIcon from '@mui/icons-material/Share';
import { biscuits } from "../../utils/data";
import Navbar from '../../Component/Navbar';
import Title from '../../Component/Title';
import ProductNavbar from '../../Component/ProductNavbar';
import Footer from '../../Component/Footer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
const gramOptions = [
    { value: '1pocket', label: '1pocket' },
    { value: '2pocket', label: '2pocket' },
    { value: '3pocket', label: '3pocket' },
    { value: '4pocket', label: '4pocket' },
];
const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#fff',
    color: '#92553D',
    fontWeight: 900,
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
    transition: 'transform 0.5s, box-shadow 0.5s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
    },
    borderRadius: 16,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row', // Default for mobile
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'column', // Change to column for larger screens
    },
}));

const StyledMedia = styled(CardMedia)`
  height: 220px;
  
  @media (min-width: 600px) {
    height: 350px;
  }
`;

const IconContainer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 15,
    right: 15,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,

    [theme.breakpoints.down('sm')]: {
        width: '8%',
    },
}));

const RatingStars = ({ rating, size }) => (
    <Box display="flex" alignItems="center" sx={{ py: 1.5 }}>
        {[...Array(5)].map((_, index) => (
            <StarIcon
                key={index}
                sx={{ color: index < rating ? 'orange' : 'rgba(255, 215, 0, 0.6)', fontSize: size }}
            />
        ))}
    </Box>
);

const ProductCard = ({ product, isLoading }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: product.id,
            name: product.name,
            image: product.image,
            price,
            originalPrice,
            selectedGram
        }));
        toast.success('Successfully added to cart!', {
            position: 'bottom-left',
            autoClose: 3000,
        });
    }

    const [liked, setLiked] = useState(false);
    const [selectedGram, setSelectedGram] = useState('1pocket'); // Default to 1pocket
    const [price, setPrice] = useState(0); // Default price
    const [originalPrice, setOriginalPrice] = useState(0); // Default original price

    useEffect(() => {
        if (product && product.prices && product.prices[selectedGram]) {
            setPrice(product.prices[selectedGram].currentPrice);
            setOriginalPrice(product.prices[selectedGram].originalPrice);
        }
    }, [product, selectedGram]);

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    const handleGramChange = (e) => {
        const newGram = e.target.value;
        setSelectedGram(newGram);
    };

    const handleShoppingClick = (product) => {
        const encodedMessage = encodeURIComponent(`Hi! I'm interested in this product:\n\nName: ${product.name}\nPrice: ${price}\n\nPockets: ${selectedGram}\n\nPlease provide more details and help me place an order.`);
        const whatsappNumber = '919952857016';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleShareClick = async (product) => {
        const shareUrl = `https://smartdryfruitdryfruit.vercel.app/biscuits`;
        const message = `Check out this amazing product: ${product.name}\nPrice: ${price}\n${shareUrl}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = '+919952857016';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Product Share',
                    text: message,
                    url: shareUrl,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            window.open(whatsappUrl, '_blank');
        }
    };

    return (
        <StyledCard>
            {isLoading ? (
                <Skeleton variant="rectangular" animation="wave" width="100%" height={260} />
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ml: [2, 0], mt: [0, 2] }}>
                    <Box sx={{ width: ["7.5rem", "12rem"] }}>
                        <Box component="img" sx={{ width: ['85%', '100%'], }} src={product.image} alt={product.name} />
                    </Box>
                </Box>
            )}
            <IconContainer>
                {isLoading ? (
                    <>
                        <Skeleton variant="circular" animation="wave" width={40} height={40} />
                        <Skeleton variant="circular" animation="wave" width={40} height={40} />
                        <Skeleton variant="circular" animation="wave" width={40} height={40} />
                    </>
                ) : (
                    <>
                        <IconButton aria-label="add to favorites" sx={{
                            color: liked ? 'red' : '#fff', bgcolor: '#92553D', '&:hover': {
                                bgcolor: '#212121',
                                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
                            },
                        }} onClick={handleLikeClick}>
                            <FavoriteIcon sx={{ fontSize: ['0.8rem', '1.5rem'] }} />
                        </IconButton>
                        <IconButton aria-label="share" sx={{
                            color: '#fff', bgcolor: '#92553D', '&:hover': {
                                bgcolor: '#212121',
                                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
                            },
                        }} onClick={() => handleShareClick(product)}>
                            <ShareIcon sx={{ fontSize: ['0.8rem', '1.5rem'] }} />
                        </IconButton >
                        <IconButton aria-label="add to cart" sx={{
                            color: '#fff', bgcolor: '#92553D', '&:hover': {
                                bgcolor: '#212121',
                                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
                            },
                        }} onClick={() => handleShoppingClick(product)}>
                            <ShoppingCartIcon sx={{ fontSize: ['0.8rem', '1.5rem'] }} />
                        </IconButton>
                    </>
                )}
            </IconContainer>
            <CardContent>
                {isLoading ? (
                    <>
                        <Skeleton variant="text" animation="wave" width="80%" />
                        <Skeleton variant="text" animation="wave" width="60%" />
                        <Skeleton variant="text" animation="wave" width="40%" />
                        <Skeleton variant="rectangular" width="100%" height={50} />
                    </>
                ) : (
                    <>
                        <Typography component="div" sx={{ textAlign: 'start', fontWeight: [700, 600], letterSpacing: 1, fontSize: ['0.8rem', '1.3rem'] }} >
                            {product.name}
                        </Typography>
                        <Typography variant="body2" component="div" sx={{ textAlign: 'start', letterSpacing: 1, py: 1 }}>
                            <Select
                                value={selectedGram}
                                displayEmpty
                                style={{ height: 40 }}
                                onChange={handleGramChange}
                                sx={{
                                    fontSize: ['1rem', '1rem'],
                                    minWidth: 100,
                                    letterSpacing: 0.5,
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#ccc',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#92553D',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#92553D',
                                        },
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#ccc',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#92553D !important',
                                    },
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Select weight
                                </MenuItem>
                                {gramOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Typography>

                        <Typography color={'#92553D'} sx={{ textAlign: 'start', fontWeight: 600, fontSize: '0.8rem', letterSpacing: 0.5, mt: 1, display: 'flex', }} >
                            <VerifiedIcon sx={{ fontSize: '1rem' }} />
                            Smart Dry Fruits
                        </Typography>
                        <Stack direction={["column", 'row']} justifyContent={'space-between'}>
                            <Box>
                                <RatingStars rating={product.rating} size="1.2rem" />
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Typography color={'#282828'} sx={{ textAlign: 'start', fontWeight: 700, fontSize: '1rem', letterSpacing: 0.5, display: 'flex', alignItems: 'center' }} >
                                        {price}
                                        <LocalOfferOutlinedIcon sx={{ fontSize: '0.9rem' }} />
                                    </Typography>
                                    <Typography color={'gray'} sx={{ textAlign: 'start', fontWeight: 600, fontSize: '0.9rem', letterSpacing: 0.5, textDecoration: "line-through" }} >
                                        {originalPrice}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: ['flex'], alignItems: 'center', mt: [1.5, 0] }}>
                                <Box sx={{ mt: [0, 2] }}>
                                    <Box sx={{ display: ['flex'], alignItems: 'center', mt: [0, 1.5] }}>
                                        <Button variant="contained" startIcon={<ShoppingCartOutlinedIcon />} sx={{
                                            bgcolor: "#92553D", textTransform: 'none', borderRadius: '50px', px: [2.5], '&:hover': {
                                                bgcolor: "#282828"
                                            }
                                        }} onClick={handleAddToCart}>
                                            Add to cart
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Stack>
                    </>
                )}
            </CardContent>
        </StyledCard >
    );
};

const Biscuits = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading data
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500); // Simulate a 2-second loading time
    }, []);

    useEffect(() => {
        document.title = "Biscuits";
    }, []);

    return (
        <>
            <Navbar color="#000" />
            <Box component='img'
                src='Images/leaf3.avif'
                alt='leaf'
                sx={{
                    width: ["70%", "50%", "25%", "25%", "25%"],
                    zIndex: -2,
                    ml: [-10],
                    mt: [0, 20, -2, -2, -2],
                    position: 'absolute',
                }}
            />
            <Box sx={{ display: ['block', 'none'] }}>
                <ProductNavbar />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'start', color: 'black', px: [2, 5, 4] }}>
                <Title color="#282828">Biscuits</Title>
            </Box>
            <Box sx={{ display: ['none', 'block'] }}>
                <ProductNavbar />
            </Box>
            <Box sx={{ textAlign: 'center', px: [2, 3, 0], py: [5], zIndex: 30 }}>
                <Grid container spacing={6} justifyContent="center" alignItems="center">
                    {biscuits.map((biscuit) => (
                        <Grid item key={biscuit.id} xs={12} sm={6} md={3.8} lg={3.6}>
                            <ProductCard product={biscuit} isLoading={isLoading} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box sx={{ bgcolor: 'black', mt: 20, px: 2 }}>
                <Footer />
            </Box>
        </>
    );
};

export default Biscuits;