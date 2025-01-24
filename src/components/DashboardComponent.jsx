import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import SidebarComponent from './SidebarComponent';

const DashboardComponent = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <SidebarComponent />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <Toolbar />
        <Typography paragraph>
          Welcome to the admin dashboard! Here, you can manage your app's settings, users, and more.
        </Typography>
      </Box>
    </Box>
  );
};

export default DashboardComponent;
