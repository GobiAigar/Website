import * as React from "react";
import { useLocale } from "next-intl";
import { Grid, Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function ProductImageList({ sections = [] }) {
  const theme = useTheme();
  const isTabletOrLess = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const lang = useLocale();

  return (
    <Grid
      container
      width="100%"
      spacing={{ xs: 2, sm: 0.5 }}
      justifyContent="space-between"
    >
      {sections.map((item, index) => (
        <Grid
          key={item.id || index}
          item
          width={"100%"}
          size={{
            xs: 12,
            sm: 6,
            md: 3,
            lg: 3,
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: 300 },
              overflow: "hidden",

              "&:hover .overlay": {
                opacity: isMobile ? 1 : 1,
                transform: isMobile ? "none" : "translateY(0)",
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
                flexGrow: 1,
                height: "auto",
              }}
            >
              <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 0.5 }}>
                {lang === "mn" ? item.mntitle : item.entitle}
              </Typography>
              <Typography variant="body2">
                {lang === "mn" ? item.mndescription : item.endescription}
              </Typography>
            </Box>
          )}
        </Grid>
      ))}
    </Grid>
  );
}
