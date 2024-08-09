import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, IconButton, Typography, Grid, Box, Stack, Button, Skeleton, Select, MenuItem, InputLabel } from '@mui/material';
import { styled } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShareIcon from '@mui/icons-material/Share';
import { seeds } from "../../utils/data";
import Navbar from '../../Component/Navbar';
import Title from '../../Component/Title';
import ProductNavbar from '../../Component/ProductNavbar';
import Footer from '../../Component/Footer';

const gramOptions = [
  { value: '100g', label: '100g' },
  { value: '250g', label: '250g' },
  { value: '500g', label: '500g' },
  { value: '1kg', label: '1kg' },
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
  const [liked, setLiked] = useState(false);
  const [selectedGram, setSelectedGram] = useState('100g'); // Default to 100g
  const [price, setPrice] = useState(product.prices[selectedGram].currentPrice); // Set initial price based on default gram
  const [originalPrice, setOriginalPrice] = useState(product.prices[selectedGram].originalPrice); // Set initial original price based on default gram

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleGramChange = (e) => {
    const newGram = e.target.value;
    setSelectedGram(newGram);
    setPrice(product.prices[newGram].currentPrice); // Update the current price based on the selected gram
    setOriginalPrice(product.prices[newGram].originalPrice); // Update the original price based on the selected gram
  };

  const handleShoppingClick = (product) => {
    const encodedMessage = encodeURIComponent(`Hi! I'm interested in this product:\n\nName: ${product.name}\nPrice: ${price}\nOriginal Price: ${originalPrice}\nGrams: ${selectedGram}\n\nPlease provide more details and help me place an order.`);
    const whatsappNumber = '919952857016';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };



  const handleShareClick = async (product) => {
    // Construct the URL for the product page on Vercel
    const shareUrl = `https://smartdryfruitdryfruit.vercel.app/products/${product.id}`;
    const message = `Check out this amazing product: ${product.name}\nPrice: ${product.price}\n${shareUrl}`;

    // Encode URL and message
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp URL with the specific number
    const whatsappNumber = '+919952857016'; // Make sure to remove any '+' in the number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Share using the Web Share API if supported
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Product Share',
          text: message,
          url: shareUrl,
        });
        console.log('Successful share');
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      window.open(whatsappUrl, '_blank');
    }
  };




  return (
    <StyledCard>
      {isLoading ? (
        <Skeleton variant="rectangular" width="100%" height={220} />
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
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="circular" width={40} height={40} />
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
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
            <Skeleton variant="rectangular" width="100%" height={50} />
          </>
        ) : (
          <>
            <Typography  component="div" sx={{ textAlign: 'start', fontWeight: [700, 600], letterSpacing: 1,fontSize:['0.8rem','1.3rem'] }} >
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
                      borderColor: '#ccc', // Default border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#92553D', // Border color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#92553D', // Border color when focused
                    },
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ccc', // Default border color
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#92553D !important', // Border color when focused
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
                <Typography color={'#282828'} sx={{ textAlign: 'start', fontWeight: 700, fontSize: '1rem', letterSpacing: 0.5, display: 'flex', alignItems: 'center' }} >
                  {price}
                  <LocalOfferOutlinedIcon sx={{ fontSize: '0.9rem' }} />
                </Typography>
                <Typography color={'gray'} sx={{ textAlign: 'start', fontWeight: 600, fontSize: '0.8rem', letterSpacing: 0.5, textDecoration: "line-through" }} >
                  {originalPrice}
                </Typography>
              </Box>
              <Box sx={{ display: ['flex'], alignItems: 'center', mt: 1.5 }}>
                <Button variant="contained" startIcon={<ShoppingCartOutlinedIcon />} sx={{
                  bgcolor: "#92553D", textTransform: 'none', borderRadius: '50px', px: [2.5], '&:hover': {
                    bgcolor: "#282828"
                  }
                }}>
                  Add to cart
                </Button>
              </Box>
            </Stack>
          </>
        )}
      </CardContent>
    </StyledCard >
  );
};

const Seeds = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Simulate a 2-second loading time
  }, []);

  useEffect(() => {
    document.title = "Seeds";
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
        <Title color="#282828">Seeds</Title>
      </Box>
      <Box sx={{ display: ['none', 'block'] }}>
        <ProductNavbar />
      </Box>
      <Box sx={{ textAlign: 'center', px: [2, 3, 0], py: [5], zIndex: 30 }}>
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          {seeds.map((seed) => (
            <Grid item key={seed.id} xs={12} sm={6} md={3.8} lg={3.6}>
              <ProductCard product={seed} isLoading={isLoading} />
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

export default Seeds;
