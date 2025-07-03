"use client";

import { Box, Container, Grid } from "@mui/material";
import ImageCard from "../Card/ImageCard";
import CerficateTextCard from "../Card/CerficateTextCard";
import { useEffect, useState } from "react";

const CerficateSection = ({ data, index }) => {
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    setReverse(index % 2 !== 0);
  }, [index]);

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: reverse ? "#f5fefd" : "#E8DFD9",
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
            <ImageCard data={data.image_url} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CerficateSection;
