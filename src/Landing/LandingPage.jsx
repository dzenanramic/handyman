import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

export default function LandingPage() {
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
  const handleNavigation = (path) => {
    // Implement your navigation logic here
    console.log(`Navigating to ${path}`);
  };
  const handleBookNow = () => {
    // Implement your booking logic here
    console.log("Booking now");
  };
  const handleCallNow = () => {
    // Implement your call logic here
    console.log("Calling now");
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: "100vh", md: "90vh" },
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: {
              xs: "url('/handyman-portrait.png')",
              md: "url('/handyman.jpg')",
            },
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: { xs: "cover", md: "cover" }, // Full width on mobile, cover on desktop
            zIndex: -2,
          }}
        />
        {/* Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.95))",
            zIndex: -1,
          }}
        />
        {/* Navigation Bar - Now integrated */}
        <Navigation
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        />

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: { xs: 0, md: 1 },
            display: "flex",
            flexDirection: "column",
            justifyContent: {
              xs: "flex-start",
              md: "flex-start",
            },
            textAlign: "left",
            paddingX: {
              xs: theme.spacing(2),
              sm: theme.spacing(4),
              md: theme.spacing(8),
            },
            paddingY: {
              xs: theme.spacing(4),
              sm: theme.spacing(4),
            },
            marginTop: "200px",
          }}
        >
          <Box sx={{ marginBottom: { xs: 4, md: 2 } }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "3rem",
                  md: "64px",
                },
                fontFamily: "inter",
                fontWeight: "800",
                letterSpacing: "0.05rem",
                fontStyle: "italic",
                color: "white",
                marginBottom: 2,
              }}
            >
              Fix. Build. Improve.
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.8rem",
                  md: "27px",
                },
                color: "white",
              }}
            >
              One call away from a better home
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              marginTop: {
                xs: "auto",
                md: "20px",
              },
              flexDirection: { xs: "column", sm: "row" },
              width: { xs: "100%", sm: "auto" },
              paddingBottom: { xs: theme.spacing(2), md: 0 },
            }}
          >
            <Button
              variant="contained"
              onClick={handleBookNow}
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
                fontFamily: "inter",
                backgroundColor: "black",
                color: "white",
                textTransform: "none",
                padding: "8px 30px",
                borderRadius: "10px",
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              Book Now
            </Button>
            <Button
              variant="outlined"
              onClick={handleCallNow}
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
                fontFamily: "inter",
                color: "white",
                borderColor: "white",
                textTransform: "none",
                padding: "8px 30px",
                borderRadius: "10px",
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "white",
                },
              }}
            >
              Call Now
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Rest of your sections remain exactly the same */}
      {/* Services Section */}
      <Box
        sx={{
          my: 8,
          py: 10,
          paddingBottom: "120px",
          mx: { xs: 2, sm: 4, md: 8 },
          px: { xs: 2, sm: 4, md: 8 },
          bgcolor: "#242424",
          borderRadius: 7,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: "bold",
            color: "white",
          }}
        >
          Our Services
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 4,
          }}
        >
          {[
            {
              title: "Home Repairs",
              icon: "🔧",
              description: "From fixing leaky faucets to repairing drywall",
            },
            {
              title: "Installation",
              icon: "🛠️",
              description: "Furniture assembly, TV mounting, and more",
            },
            {
              title: "Maintenance",
              icon: "🏠",
              description: "Regular home maintenance and inspections",
            },
            {
              title: "Wall Painting",
              icon: "🎨",
              description: "Interior and exterior painting services",
            },
            {
              title: "Flooring",
              icon: "🧱",
              description: "Installation and repair of flooring materials",
            },
            {
              title: "Electricity",
              icon: "⚡",
              description: "Wiring, lighting, and electrical repairs",
            },
          ].map((service) => (
            <Box
              key={service.title}
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 7,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.2s",
                backgroundColor: "#333",
                color: "white",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Typography sx={{ fontSize: "3rem", mb: 2 }}>
                {service.icon}
              </Typography>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                {service.title}
              </Typography>
              <Typography>{service.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Why Choose Us Section */}
      <Box
        sx={{
          my: { xs: 4, md: 8 },
          py: { xs: 6, md: 10 },
          paddingBottom: { xs: "60px", md: "120px" },
          mx: { xs: 1, sm: 4, md: 6 },
          px: { xs: 2, sm: 4, md: 6 },
          bgcolor: "#242424",
          borderRadius: { xs: 4, md: 7 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            fontSize: {
              xs: "1.75rem",
              sm: "2.25rem",
              md: "2.75rem",
            },
            fontWeight: "bold",
            color: "white",
            px: 2,
          }}
        >
          Why Choose Me
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 3,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {[
            { title: "Experienced", description: "10+ years in the field" },
            { title: "Licensed", description: "Fully licensed and insured" },
            {
              title: "Reliable",
              description: "On-time and professional service",
            },
            {
              title: "Affordable",
              description: "Competitive and transparent pricing",
            },
          ].map((feature) => (
            <Box
              key={feature.title}
              sx={{
                textAlign: "center",
                color: "white",
                p: 3,
                bgcolor: "rgba(255, 255, 255, 0.05)",
                borderRadius: 4,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  fontSize: {
                    xs: "1.25rem",
                    md: "1.5rem",
                  },
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.875rem",
                    md: "1rem",
                  },
                  lineHeight: 1.4,
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Contact Section */}
      <Box
        sx={{
          my: 8,
          py: 10,
          paddingBottom: "120px",
          mx: { xs: 2, sm: 4, md: 8 },
          px: { xs: 2, sm: 4, md: 8 },
          bgcolor: "#242424",
          borderRadius: 7,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: "bold",
            color: "white",
          }}
        >
          Get in Touch
        </Typography>
        <Box
          sx={{
            maxWidth: "600px",
            mx: "auto",
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography sx={{ mb: 4 }}>
            Ready to start your project? Contact us today for a free quote!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              onClick={handleBookNow}
              sx={{
                fontSize: "18px",
                fontFamily: "inter",
                backgroundColor: "black",
                color: "white",
                textTransform: "none",
                padding: "12px 40px",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              Book Now
            </Button>
            <Button
              variant="outlined"
              onClick={handleCallNow}
              sx={{
                fontSize: "18px",
                fontFamily: "inter",
                borderColor: "white",
                color: "white",
                textTransform: "none",
                padding: "12px 40px",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "white",
                },
              }}
            >
              Call Now
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: "black",
          color: "white",
          py: 4,
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
            textAlign: { xs: "left", sm: "center" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "inter",
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            © {new Date().getFullYear()} Elvir's Handyman Services. All rights
            reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography
              variant="body2"
              sx={{
                color: "#ccc",
                fontSize: { xs: "14px", sm: "16px" },
                fontFamily: "inter",
                "& a": {
                  color: "#2a75b3",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#3891db",
                  },
                },
              }}
            >
              Website development and maintenance by {""}
              <a
                href="https://lightcit.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Light & ConsulITing
              </a>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
