import {
  Box,
  Button,
  Typography,
  Drawer,
  IconButton,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { Link } from "react-router-dom";

export default function Navigation({ sx = {} }) {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigations = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "My work", path: "/my-work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          paddingY: theme.spacing(2),
          paddingLeft: {
            xs: theme.spacing(2),
            sm: theme.spacing(4),
            md: theme.spacing(8),
          },
          paddingRight: {
            xs: theme.spacing(2),
            sm: theme.spacing(4),
            md: theme.spacing(3.5),
          },
          backgroundColor: "transparent",
          ...sx, // Allow custom styling from parent
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "medium",
            fontFamily: "inter",
            fontSize: "18px",
            letterSpacing: "0.1rem",
          }}
        >
          Elvir, your local handyman
        </Typography>
        <Box>
          {navigations.map((nav) => (
            <Button
              component={Link}
              to={nav.path}
              key={nav.name}
              sx={{
                color: "white",
                fontWeight: "medium",
                width: "150px",
                fontFamily: "inter",
                fontSize: "16px",
                letterSpacing: "0.15rem",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              {nav.name}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Mobile Header */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "space-between",
          alignItems: "center",
          padding: theme.spacing(2),
          backgroundColor: "black",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "medium",
            fontFamily: "inter",
            fontSize: "16px",
            letterSpacing: "0.1rem",
          }}
        >
          Elvir, your local handyman
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ color: "white" }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            backgroundColor: "black",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              mt: 2,
            }}
          >
            {navigations.map((nav) => (
              <Button
                component={Link}
                to={nav.path}
                key={nav.name}
                onClick={handleDrawerToggle}
                sx={{
                  color: "white",
                  fontWeight: "medium",
                  fontFamily: "inter",
                  fontSize: "16px",
                  letterSpacing: "0.1rem",
                  textTransform: "none",
                  justifyContent: "flex-start",
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                {nav.name}
              </Button>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
