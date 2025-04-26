import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Navigation from "../components/Navigation/Navigation";

export default function About() {
  const theme = useTheme();

  return (
    <>
      {/* Hero Section with Full-Width Background Image */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: "50vh", md: "90vh" },
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          background: {
            xs: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.95)), url('/handyman-skills.jpg')`,
            md: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.95)), url('/handyman-skills1.jpg')`,
          },
          backgroundSize: {
            xs: "contain", // show the *whole* image on extra-small
            md: "cover", // keep the cover effect on medium and up
          },
          backgroundPosition: {
            xs: " center", // move 30% from the left edge on xs
            md: "center", // default back to center on md and up
          },
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Navigation Bar */}
        <Navigation
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
          }}
        />

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: {
              xs: theme.spacing(2),
              sm: theme.spacing(4),
              md: theme.spacing(8),
            },
            paddingTop: { xs: theme.spacing(8), md: theme.spacing(12) },
            height: "100%",
            zIndex: 1,
          }}
        >
          {/* Text Content */}
          <Box
            sx={{
              flex: 1,
              pr: { md: 4 },
              mb: { xs: 4, md: 0 },
              color: "white",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                fontFamily: "inter",
                fontWeight: "800",
                marginBottom: 2,
                marginTop: { xs: 18, md: 0 },
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
                opacity: 0.9,
                maxWidth: "600px",
              }}
            >
              Your trusted local handyman with years of experience
            </Typography>
          </Box>

          {/* Empty Space to Maintain Layout Balance */}
          <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }} />
        </Box>
      </Box>

      {/* Story Section */}
      <Box
        sx={{
          my: 8,
          py: 10,
          mx: { xs: 2, sm: 4, md: 8 },
          px: { xs: 2, sm: 4, md: 8 },
          bgcolor: "#242424",
          borderRadius: 7,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 6,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: "bold",
            color: "white",
          }}
        >
          My Story
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            lineHeight: 1.8,
            maxWidth: "800px",
            mb: 4,
          }}
        >
          With over a decade of experience in home maintenance and repairs, I've
          built my reputation on reliability, quality workmanship, and attention
          to detail. My journey began with a simple passion for fixing things
          and has grown into a trusted service that many homeowners depend on.
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            lineHeight: 1.8,
            maxWidth: "800px",
          }}
        >
          I take pride in providing personalized solutions for each client,
          understanding that every home and project is unique. My approach
          combines traditional craftsmanship with modern techniques to deliver
          the best results for your home.
        </Typography>
      </Box>

      {/* Values Section */}
      <Box
        sx={{
          my: 8,
          py: 10,
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
          My Values
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
              title: "Quality First",
              icon: "⭐",
              description: "No compromises when it comes to quality of work",
            },
            {
              title: "Honesty",
              icon: "🤝",
              description: "Transparent pricing and honest recommendations",
            },
            {
              title: "Reliability",
              icon: "⏰",
              description: "Always on time and committed to deadlines",
            },
            {
              title: "Expertise",
              icon: "🛠️",
              description: "Continuous learning and skill improvement",
            },
            {
              title: "Customer Focus",
              icon: "👥",
              description: "Your satisfaction is my top priority",
            },
            {
              title: "Clean Work",
              icon: "✨",
              description: "Leaving your space cleaner than I found it",
            },
          ].map((value) => (
            <Box
              key={value.title}
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 4,
                backgroundColor: "#333",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Typography sx={{ fontSize: "3rem", mb: 2 }}>
                {value.icon}
              </Typography>
              <Typography
                variant="h5"
                sx={{ mb: 2, fontWeight: "bold", color: "white" }}
              >
                {value.title}
              </Typography>
              <Typography sx={{ color: "white" }}>
                {value.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
