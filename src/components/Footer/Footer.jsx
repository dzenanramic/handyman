import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
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
  );
}

export default Footer;
