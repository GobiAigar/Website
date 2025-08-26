import React from "react";
import GoldenDivider from "../../components/keyComponents/GoldenDivider";
import Title from "../../components/keyComponents/Title";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { useLocale } from "next-intl";

const ProductInspection = ({ data }) => {
  const lang = useLocale();
  return (
    <Box marginY={{ xs: "7.5rem", md: "10rem" }} width={"100%"}>
      <Container>
        <Title mntitle={data?.mntitle} entitle={data?.entitle} />
        <GoldenDivider />
        <Typography
          color="#333"
          variant="body1"
          sx={{
            whiteSpace: "pre-line",
            lineHeight: "1.5",
            marginTop: "1rem",
            marginBottom: {
              xs: "1rem",
              lg: "2rem",
            },
            textAlign: "justify",
          }}
        >
          {lang === "mn" ? data?.mndescription : data?.endescription}
        </Typography>
      </Container>
      <Box
        sx={{
          height: { xs: "fit", sm: "350px", md: "290px" },
          paddingY: 7.5,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          backgroundImage: "url('/slogan.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container>
          <Grid
            container
            size={12}
            justifyContent={"space-between"}
            spacing={3}
          >
            <Grid size={{ xs: 12, sm: 5.8, md: 2.9 }}>
              <Typography variant="h3">+40 MM</Typography>
              <Typography variant="body1">
                {lang === "mn" ? "Урт" : "Length"}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Divider orientation={{ xs: "horziontal", md: "vertical" }} />
            </Grid>
            <Grid size={{ xs: 12, sm: 5.8, md: 2.9 }}>
              <Typography variant="h3">-16.8 МКМ</Typography>
              <Typography variant="body1">
                {lang === "mn" ? "Микрон" : "Micron"}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Divider orientation={{ md: "vertical" }} />
            </Grid>
            <Grid size={{ xs: 12, sm: 5.8, md: 2.9 }}>
              <Typography variant="h3">-0.2%</Typography>
              <Typography variant="body1">
                {lang === "mn" ? "Хаг" : "Dandruff"}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Divider orientation={{ md: "vertical" }} />
            </Grid>
            <Grid size={{ xs: 12, sm: 5.8, md: 2.9 }}>
              <Typography variant="h3">-0.2%</Typography>
              <Typography variant="body1">
                {lang === "mn" ? "Бүдүүн хялгас" : "Coarse Hair"}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
export default ProductInspection;
