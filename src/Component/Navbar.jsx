import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import {
  Button,
  Drawer,
  ImageListItem,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  useScrollTrigger,
  Slide,
  CssBaseline,
} from "@mui/material";

const drawerWidth = 240;

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar(props) {
  const [isDown, setIsDown] = React.useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const changeNavStyle = () => {
    if (window.scrollY >= 90) {
      setIsDown(true);
    } else {
      setIsDown(false);
    }
  };
  window.addEventListener("scroll", changeNavStyle);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/product",
      name: "Product",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/contact",
      name: "Contact Us",
    },
  ];
  const drawer = (
    <Stack direction="column">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          pr: 2,
        }}
      >
        <CloseIcon
          sx={{ color: '#fff' }}
          onClick={() => {
            setMobileOpen(false);
          }}
        />
      </Toolbar>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          mt: [10],
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {navItems.map((item, index) => (
          <Link
            href={`${item.link}`}
            color={"inherit"}
            underline="none"
            key={index}
          >
            <ListItem
              onClick={() => {
                setMobileOpen(!mobileOpen);
              }}
              button
              sx={{
                fontWeight: "medium", color: "#fff", ":hover": {
                  color: "#fff",
                },
              }}
            >
              <ListItemText
                sx={{
                  fontWeight: "medium",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                disableTypography
                primary={
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                      textAlign: "center",
                    }}
                  >
                    {item.name}
                  </Typography>
                }
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </Stack>
  );

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{ backgroundColor: "transparent", px: [0, 1, 3], boxShadow: 0 }}
        >
          <Toolbar
            sx={{
              backgroundColor: "transparent",
              py: [0, 1.5, 3],
              color: isDown ? "#000" : "#fff",
              bgcolor: isDown ? "rgba(255,255,255,.6)" : null,
              backdropFilter: isDown ? "blur(25px)" : null,
              borderRadius: isDown
                ? ["0 0 .7rem .7rem", "0 0 1.5rem 1.5rem"]
                : null,
              boxShadow: isDown ? 3 : null,
              justifyContent: "space-between",
            }}
          >
            <Stack
              direction={"row"}
              width={"100%"}
              gap={1}
              sx={{
                display: ["flex", "flex", "none"],
                justifyContent: 'space-between'
              }}
            >
              <Link color={"inherit"} underline="none" href="/"><Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <ImageListItem sx={{}}>
                  <Box component='img' src="/logoh.png" sx={{ width: ['4rem', '5rem', '6rem'], height: ['4rem', '5rem', '6rem'], }} alt='logo' />
                </ImageListItem>
              </Box></Link>
              <IconButton
                onClick={handleDrawerToggle}
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
            </Stack>

            <Link color={"inherit"} underline="none" href="/">
              <ImageListItem sx={{ my: -5, display: { xs: 'none', md: 'block' } }}>
                <Box
                  component='img'
                  src="/logoh.png"
                  sx={{ width: ['4rem', '5rem', '6rem'], height: ['4rem', '5rem', '6rem'] }}
                  alt='logo'
                />
              </ImageListItem>
            </Link>
            <Box sx={{ display: { xs: "none", md: "flex", gap: '2rem' } }}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  href={item.link}
                  sx={{
                    fontSize: [17],
                    fontWeight: '600',
                    color: isDown ? "#000" : "#fff",
                    textTransform: "none",
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Box
        display={{ xs: "block", md: "none" }}
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
              background:
                "linear-gradient(180.83deg, #181818 0%, #181818 100%)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
