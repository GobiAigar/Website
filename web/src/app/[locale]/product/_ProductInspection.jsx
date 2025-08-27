import React from "react";
import GoldenDivider from "../../components/keyComponents/GoldenDivider";
import Title from "../../components/keyComponents/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useLocale } from "next-intl";

const ProductInspection = ({ data, detials }) => {
  const lang = useLocale();
  return (
    <Box marginY={{ xs: "1.5rem", md: "2rem" }} width={"100%"}>
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
          height: { xs: "fit", sm: "auto", md: "290px" },
          paddingY: { xs: 2.5, sm: 0.5, md: 7.5 },
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
          <Grid container size={12} justifyContent={"space-between"}>
            <Grid
              size={3}
              sx={{
                paddingY: { xs: 0, sm: 4 },
              }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
              >
                <Typography
                  sx={{ fontSize: { xs: "1rem", sm: "2rem", md: "3rem" } }}
                >
                  {detials[0]?.endescription}
                </Typography>
                <Typography variant="body1">
                  {lang === "mn" ? detials[0]?.mntitle : detials[0]?.entitle}
                </Typography>
              </Box>
            </Grid>

            <Grid
              size={3}
              sx={{
                paddingY: { xs: 0, sm: 4 },
              }}
            >
              <Box
                marginx={2}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
                borderLeft={{ xs: `solid 1px #F5BF03` }}
              >
                <Typography
                  sx={{ fontSize: { xs: "1rem", sm: "2rem", md: "3rem" } }}
                >
                  {detials[1]?.endescription}
                </Typography>
                <Typography variant="body1">
                  {lang === "mn" ? detials[1]?.mntitle : detials[1]?.entitle}
                </Typography>
              </Box>
            </Grid>

            <Grid
              size={3}
              sx={{
                paddingY: { xs: 0, sm: 4 },
              }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
                borderLeft={{ xs: `solid 1px  #F5BF03` }}
              >
                <Typography
                  sx={{ fontSize: { xs: "1rem", sm: "2rem", md: "3rem" } }}
                >
                  {detials[2]?.endescription}
                </Typography>
                <Typography variant="body1">
                  {lang === "mn" ? detials[2]?.mntitle : detials[2]?.entitle}
                </Typography>
              </Box>
            </Grid>

            <Grid
              size={3}
              sx={{
                paddingY: { xs: 0, sm: 4 },
              }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
                borderLeft={{ xs: `solid 1px  #F5BF03` }}
              >
                <Typography
                  sx={{ fontSize: { xs: "1rem", sm: "2rem", md: "3rem" } }}
                >
                  {detials[3]?.endescription}
                </Typography>
                <Typography variant="body1">
                  {lang === "mn" ? detials[3]?.mntitle : detials[3]?.entitle}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
export default ProductInspection;
