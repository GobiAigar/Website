import * as React from "react";
import { Grid, Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function ProductImageList({ sections = [], lang = "en" }) {
  const theme = useTheme();
  const isTabletOrLess = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={{ xs: 1, sm: 0.4, md: 0.2 }}>
        {sections.map((item, index) => (
          <Grid
            key={item.id || index}
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 300 },
                overflow: "hidden",
                borderRadius: { md: "0.2rem" },
                borderTopRightRadius: { xs: "0.2rem" },
                borderTopLeftRadius: { xs: "0.2rem" },
                "&:hover .overlay": {
                  opacity: isTabletOrLess ? 1 : 1,
                  transform: isTabletOrLess ? "none" : "translateY(0)",
                },
              }}
            >
              <Box
                component="img"
                src={item.image_url1}
                alt={lang === "mn" ? item.mntitle : item.entitle}
                sx={{
                  width: "100%",
                  height: { xs: 300 },
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {!isTabletOrLess && (
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    opacity: 0,
                    transition: "all 0.3s ease",
                    transform: "translateY(100%)",
                  }}
                >
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {lang === "mn" ? item.mntitle : item.entitle}
                  </Typography>
                  <Typography variant="body2">
                    {lang === "mn" ? item.mndescription : item.endescription}
                  </Typography>
                </Box>
              )}
            </Box>

            {isTabletOrLess && (
              <Box
                sx={{
                  bgcolor: "#EFE1CE",

                  flexGrow: 1,
                  height: "auto",
                  borderBottomRightRadius: { xs: "0.2rem" },
                  borderBottomLeftRadius: { xs: "0.2rem" },
                }}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  sx={{ mb: 0.5 }}
                >
                  {lang === "mn" ? item.mntitle : item.entitle}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {lang === "mn" ? item.mndescription : item.endescription}
                </Typography>
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
