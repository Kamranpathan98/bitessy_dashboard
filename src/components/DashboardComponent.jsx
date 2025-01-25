import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import SidebarComponent from "./SidebarComponent";
import { ShoppingCart, People, MonetizationOn } from "@mui/icons-material"; // Import icons

const DashboardComponent = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <SidebarComponent />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 3,
            mt: 5,
          }}
        >
          {/* Orders Card */}
          <Box sx={{ flex: "1 1 30%", minWidth: "250px" }}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  <ShoppingCart /> Orders
                </Typography>
                <Typography color="text.secondary">
                  Manage and view all orders placed by customers.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Customers Card */}
          <Box sx={{ flex: "1 1 30%", minWidth: "250px" }}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  <People /> Customers
                </Typography>
                <Typography color="text.secondary">
                  View and manage your customers' information.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Sales Card */}
          <Box sx={{ flex: "1 1 30%", minWidth: "250px" }}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  <MonetizationOn /> Sales
                </Typography>
                <Typography color="text.secondary">
                  Analyze and track your sales performance.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardComponent;
