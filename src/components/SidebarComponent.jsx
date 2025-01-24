import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const SidebarComponent = () => {
  const drawerWidth = 210;

  const menuItems = [
    { label: 'Home', icon: <HomeIcon /> },
    { label: 'Customer', icon: <PeopleIcon /> },
    { label: 'Resto Partners', icon: <RestaurantMenuIcon /> },
    { label: 'Delivery Partners', icon: <DeliveryDiningIcon /> },
    { label: 'Sales', icon: <MonetizationOnIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {menuItems.map((item) => (
            <ListItem sx={{cursor: 'pointer'}} button key={item.label}>
              <ListItemIcon
                sx={{
                  minWidth: 32,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SidebarComponent;