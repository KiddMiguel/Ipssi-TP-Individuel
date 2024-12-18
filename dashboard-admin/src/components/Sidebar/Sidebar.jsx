import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import {
  Dashboard,
  ShoppingCart,
  Analytics,
  AccountBalance,
  EventNote,
} from "@mui/icons-material";
import ProfileImage from "../../assets/images/avatar.png";

const Sidebar = () => {
  const [selected, setSelected] = useState("Analytics"); // Élément sélectionné par défaut

  const menuItems = [
    { text: "Analytics", icon: <Analytics /> },
    { text: "Banking", icon: <AccountBalance /> },
    { text: "Ecommerce", icon: <ShoppingCart /> },
    { text: "App", icon: <Dashboard /> },
    { text: "Booking", icon: <EventNote /> },
  ];

  return (
    <Drawer variant="permanent" sx={{ width: 260 }}>
      <Box
        sx={{
          width: 200,
          bgcolor: "#fff",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        {/* Custom Scrollbar */}
        <style>
          {`
            ::-webkit-scrollbar {
              width: 8px;
            }
            ::-webkit-scrollbar-track {
              background: #f1f1f1;
            }
            ::-webkit-scrollbar-thumb {
              background: #c1c1c1;
              border-radius: 4px;
            }
            ::-webkit-scrollbar-thumb:hover {
              background: #a8a8a8;
            }
          `}
        </style>

        <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
            <Avatar
                src={ProfileImage}
                alt="Profile Avatar"
                sx={{ width: 60, height: 60, border: "2px solid #22C55E" }}
            />
        </Box>

        {/* Liste des éléments */}
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              onClick={() => setSelected(item.text)} // Met à jour l'élément sélectionné
              sx={{
                borderRadius: "8px",
                mb: 0.5,
                bgcolor: selected === item.text ? "#ECFDF5" : "transparent", // Background actif
                color: selected === item.text ? "#10B981" : "#9CA3AF", // Couleur du texte actif
                "&:hover": { bgcolor: "#E5E7EB" },
              }}
            >
              <ListItemIcon
                sx={{
                  color: selected === item.text ? "#10B981" : "#9CA3AF",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontSize: "0.875rem", fontFamily: "Roboto, sans-serif" }}
                  >
                    {item.text}
                  </Typography>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
