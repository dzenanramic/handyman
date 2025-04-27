import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Navigation from "../components/Navigation/Navigation";

export default function MyWork() {
  const theme = useTheme();

  const projects = [
    {
      title: "Kitchen Renovation",
      description:
        "Complete kitchen remodeling with new cabinets and countertops",
      image: "/kitchen-renovation.jpg", // Add your image paths here
      category: "Renovation",
    },
    {
      title: "Bathroom Repair",
      description: "Fixing leaky pipes and installing new fixtures",
      image: "/bathroom-repair.jpg",
      category: "Repair",
    },
    {
      title: "Wall Painting",
      description: "Interior painting with premium materials",
      image: "/wall-painting.jpg",
      category: "Painting",
    },
    {
      title: "Flooring Installation",
      description: "Hardwood flooring installation in living room",
      image: "/flooring.jpg",
      category: "Installation",
    },
    {
      title: "Electrical Work",
      description: "New lighting installation and wiring repair",
      image: "/electrical.jpg",
      category: "Electrical",
    },
    {
      title: "Furniture Assembly",
      description: "Assembly and mounting of various furniture pieces",
      image: "/furniture.jpg",
      category: "Assembly",
    },
  ];

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
            My Work
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
            Take a look at some of my recent projects and completed works
          </Typography>
        </Box>

        {/* Projects Grid */}
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
            {projects.map((project) => (
              <Box
                key={project.title}
                sx={{
                  backgroundColor: "#242424",
                  borderRadius: 4,
                  overflow: "hidden",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "200px",
                    backgroundColor: "#333", // Placeholder color
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.primary.main,
                      mb: 1,
                      fontWeight: "500",
                    }}
                  >
                    {project.category}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      mb: 1,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      opacity: 0.8,
                      fontSize: "0.9rem",
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
