import { Box, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProductNavbar = () => {
  const location = useLocation();
  const items = [
    { link: "/dates", name: "Dates" },
    { link: "/dryfruits", name: "Dry Fruits" },
    { link: "/seeds", name: "Seeds" },
    { link: "/nuts", name: "Nuts" }
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <List sx={{ display: 'flex', padding: 0 }}>
        {items.map((item, index) => {
          const isActive = location.pathname === item.link;
          return (
            <Link 
              key={index}
              to={item.link} 
              style={{ textDecoration: 'none', color: '#000' }}
            >
              <ListItem
                sx={{
                  width: 'auto',
                  py: 0,
                  px: { xs: '1.5rem', sm: '3rem' },
                  borderBottom: isActive ? '2px solid black' : 'none',
                }}
              >
                <ListItemText
                  primary={item.name}
                  sx={{
                    color: isActive ? '#92553D' : 'inherit',
                  }}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );
};

export default ProductNavbar;
