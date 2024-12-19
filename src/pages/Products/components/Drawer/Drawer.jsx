import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Home as HomeIcon,
  LocalGroceryStore as ProductIcon,
  AssignmentInd as ProfileIcon,
  PeopleAlt as PeopleAltIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

import "./styles.css";

const SideMenu = ({ children }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // Estrutura dos botões do menu
  const mainMenuItems = [
    { title: "Home", icon: <HomeIcon />, path: "/home" },
    { title: "Produtos", icon: <ProductIcon />, path: "/produtos" },
    { title: "Usuários", icon: <PeopleAltIcon />, path: "/usuarios" },
  ];

  const secondaryMenuItems = [
    { title: "Perfil", icon: <ProfileIcon />, path: "/perfil" },
    { title: "Configurações", icon: <SettingsIcon />, path: "/configuracoes" },
    { title: "Sair", icon: <LogoutIcon />, path: "/" },
  ];

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  // Função de navegação
  const handleNavigation = (path) => {
    navigate(path);
  };

  const renderMenuItems = (items) =>
    items.map((item) => (
      <ListItem key={item.title} disablePadding>
        <ListItemButton onClick={() => handleNavigation(item.path)}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    ));

  return (
    <Box display="flex">
      <CssBaseline />
      <AppBar
        position="fixed"
        className={`appbar ${open ? "appbar-open" : ""}`}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 2,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Sistema de Produtos
          </Typography>
        </Toolbar>
        <Box alignSelf="center">
          <Button color="inherit">
            <NotificationsIcon />
          </Button>
          <Button color="inherit">
            <SettingsIcon />
          </Button>
        </Box>
      </AppBar>
      <Drawer
        className="drawer"
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: "drawer-paper",
        }}
      >
        <Box className="drawer-header">
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Box>
        <Divider />
        <List>{renderMenuItems(mainMenuItems)}</List>
        <Divider />
        <List>{renderMenuItems(secondaryMenuItems)}</List>
      </Drawer>
      <main className={`main ${open ? "main-open" : ""}`}>
        <Box className="drawer-header" />
        {children}
      </main>
    </Box>
  );
};

export default SideMenu;
