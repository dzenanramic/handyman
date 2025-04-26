import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import Navigation from "../components/Navigation/Navigation";

export default function Services() {
  const theme = useTheme();

  const services = [
    {
      title: "Home Repairs",
      icon: "🔧",
      description: "From fixing leaky faucets to repairing drywall",
      price: "Starting from $50/hour",
      features: ["Emergency repairs", "Quality parts", "Guaranteed work"],
    },
    {
      title: "Installation",
      icon: "🛠️",
      description: "Furniture assembly, TV mounting, and more",
      price: "Starting from $60/hour",
      features: ["Professional tools", "Safe mounting", "Setup included"],
    },
    {
      title: "Maintenance",
      icon: "🏠",
      description: "Regular home maintenance and inspections",
      price: "Starting from $45/hour",
      features: ["Scheduled visits", "Detailed reports", "Preventive care"],
    },
    {
      title: "Wall Painting",
      icon: "🎨",
      description: "Interior and exterior painting services",
      price: "Starting from $40/sqft",
      features: ["Premium paints", "Surface prep", "Clean finish"],
    },
    {
      title: "Flooring",
      icon: "🧱",
      description: "Installation and repair of flooring materials",
      price: "Starting from $6/sqft",
      features: ["Multiple materials", "Subfloor prep", "Expert installation"],
    },
    {
      title: "Electricity",
      icon: "⚡",
      description: "Wiring, lighting, and electrical repairs",
      price: "Starting from $75/hour",
      features: ["Licensed work", "Safety first", "Code compliant"],
    },
  ];

  const handleBookNow = () => {
    console.log("Booking now");
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1a1a1a",
        }}
      >
        <Navigation />

        {/* Header Section */}
        <Box
          sx={{
            textAlign: "center",
            pt: { xs: 12, md: 16 },
            pb: { xs: 6, md: 8 },
            px: { xs: 2, sm: 4, md: 8 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
              fontWeight: "800",
              color: "white",
              mb: 2,
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              opacity: 0.8,
              maxWidth: "800px",
              mx: "auto",
              mb: 8,
            }}
          >
            Professional and reliable handyman services for all your home needs
          </Typography>
        </Box>

        {/* Services Grid */}
        <Box
          sx={{
            px: { xs: 2, sm: 4, md: 8 },
            pb: 8,
          }}
        >
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
            {services.map((service) => (
              <Box
                key={service.title}
                sx={{
                  backgroundColor: "#242424",
                  borderRadius: 4,
                  p: 4,
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Typography sx={{ fontSize: "3rem", mb: 2 }}>
                  {service.icon}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    opacity: 0.8,
                    mb: 2,
                  }}
                >
                  {service.description}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  {service.price}
                </Typography>
                <Box sx={{ mb: 3 }}>
                  {service.features.map((feature) => (
                    <Typography
                      key={feature}
                      sx={{
                        color: "white",
                        opacity: 0.8,
                        fontSize: "0.9rem",
                        mb: 1,
                      }}
                    >
                      • {feature}
                    </Typography>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  onClick={handleBookNow}
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    textTransform: "none",
                    borderRadius: "10px",
                    py: 1.5,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Book Service
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
