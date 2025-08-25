"use client";

import { Box, CardMedia, Container, Divider, Grid } from "@mui/material";

import CerficateTextCard from "../Card/CerficateTextCard";
import { useEffect, useState, useRef } from "react";
import { useLocale } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CerficateSection = ({ data, index }) => {
  const [reverse, setReverse] = useState(false);
  const lang = useLocale();

  return (
    <Box sx={{ width: "100%", overflow: "visible" }}>
      <Container sx={{ overflow: "visible" }}>
        <Grid
          container
          paddingY={8}
          gap={1}
          direction={reverse ? "row-reverse" : "row"}
          sx={{ xs: { position: "static" }, md: { position: "relative" } }}
        >
          <Grid item size={{ xs: 12, md: 5.5 }}>
            <CardMedia
              component="img"
              src={lang === "mn" ? data.image_url2 : data.image_url1}
              alt={data?.entitle}
              sx={{
                borderRadius: "none",
                border: "1px solid",
                borderColor: "#333",
                padding: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid
            item
            size={{ xs: 12, md: 5.5 }}
            sx={{
              position: { md: "sticky" },
              top: 64,
              zIndex: 10,
              alignSelf: "flex-start",
              paddingY: 2,
            }}
          >
            <CerficateTextCard data={data} />
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </Box>
  );
};

export default CerficateSection;
