"use client";

import { Box, CardMedia, Container, Grid } from "@mui/material";

import CerficateTextCard from "../Card/CerficateTextCard";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

const CerficateSection = ({ data, index }) => {
  const [reverse, setReverse] = useState(false);
  const lang = useLocale();

  useEffect(() => {
    setReverse(index % 2 !== 0);
  }, [index]);

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: reverse ? "#E8DFD9" : "#fff",
        overflow: "visible",
      }}
    >
      <Container sx={{ overflow: "visible" }}>
        <Grid
          container
          paddingY={8}
          direction={reverse ? "row-reverse" : "row"}
          sx={{ position: "relative" }}
        >
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            sx={{
              position: { sm: "sticky" },
              top: 64,
              zIndex: 10,
              alignSelf: "flex-start",
              padding: 2,
            }}
          >
            <CerficateTextCard data={data} />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <CardMedia
              component="img"
              src={lang === "mn" ? data.image_url2 : data.image_url1}
              alt={data}
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
        </Grid>
      </Container>
    </Box>
  );
};

export default CerficateSection;
