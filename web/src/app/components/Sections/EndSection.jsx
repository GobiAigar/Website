import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useLocale } from "next-intl";

const EndSection = ({ datas }) => {
  const lang = useLocale();
  return (
    <Box
      sx={{
        marginTop: { xs: 4, md: 6 },
        height: "350px",
        position: "relative",
        backgroundImage: `url(${datas?.image_url1})`,
        backgroundColor: "#E8DFD9",
        backdropFilter: "blur(2px)",
        backgroundOrigin: "border-box",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",

          zIndex: 1,
          display: "flex",
          alignItems: "center",
          paddingLeft: "10%",
        }}
      >
        <Box width={{ xs: "75%", md: "60%" }}>
          <Typography
            sx={{
              color: "#000",
              textShadow: " 1px 1px 1px #333",
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            {lang === "mn" ? datas?.mntitle : datas?.entitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EndSection;
