"use client";
import React, { useState } from "react";

// @ MUI/Core
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";

// @ Icons
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import CategoryIcon from "@mui/icons-material/Category";
import BallotIcon from "@mui/icons-material/Ballot";
import Link from "next/link";
import ListMenu from "./ListMenu";

const drawerWidth = 267;
export const SideBar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        background: "#42AF59",
        alignItems: "center",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <AppBar
        position="static"
        sx={{
          background: "#42AF59",
          maxWidth: "1500px",
          boxShadow: "none"
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Typography
            fontFamily="'Poppins', sans-serif"
            component={Link}
            href="/"
            sx={{
              margin: "0px",
              fontWeight: "700",
              lineHeight: "1.5",
              fontSize: "1.7rem"
            }}
          >
            RICA
          </Typography>
          <Link href="http://localhost:3001" target="_blank">
            <Button
              variant="outlined"
              color="success"
              sx={{
                background: "#ADEABA",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "400",

                borderRadius: 50,
                backgroundColor: "#ffffff",
                "&:hover": {
                  backgroundColor: "#ffffff"
                },

                textTransform: "none"
              }}
            >
              Conecte-se
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerOpen}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Link href="/">
            <Typography
              onClick={handleDrawerOpen}
              sx={{
                margin: "0px",
                fontWeight: "700",
                lineHeight: "1.5"
              }}
            >
              RICA
            </Typography>
          </Link>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <HighlightOffIcon />
          </IconButton>
        </Toolbar>
        <Divider />

        <List>
          {NavIconsList.map((item) => (
            <ListItem key={item.text} disablePadding>
              <Link href={item.href} onClick={handleDrawerOpen}>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
          <ListMenu icon={<CategoryIcon />} text="Categorias" />
        </List>
      </Drawer>
    </Box>
  );
};

const NavIconsList = [
  {
    icon: <BallotIcon />,
    text: "Destaques",
    href: "/highlights"
  },
  {
    icon: <UnsubscribeIcon />,
    text: "Newsletters",
    href: "/newsletters"
  }
];
