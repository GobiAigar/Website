import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useLocale } from "next-intl";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CustomButton from "./Button";

import { useTranslations } from "use-intl";
import { Link } from "../../../i18n/navigation";

const Hero = ({ data }) => {
  const lang = useLocale();
  const t = useTranslations("home");

  return (
    <Container
      sx={{
        position: "relative",
        textAlign: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <>
        <Box
          sx={{
            gap: "3rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              fontWeight="bold"
              color="common.white"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "1.75rem",
                  sm: "2.25rem",
                  md: "3rem",
                  lg: "3.5rem",
                },
              }}
            >
              {lang === "mn" ? data?.mntitle : data?.entitle}
            </Typography>
            <Typography
              color="common.white"
              mb="1rem"
              sx={{
                fontSize: {
                  xs: "0.8rem",
                  md: "1rem",
                  lg: "1.2rem",
                },
                px: {
                  xs: "3rem",
                  sm: "6rem",
                  md: "8rem",
                  lg: "12rem",
                },
              }}
            >
              {lang === "mn" ? data?.mnsubtitle : data?.ensubtitle}
            </Typography>
          </Box>

          <Grid container spacing={2} justifyContent="center">
            <Grid size="auto">
              <CustomButton
                url={"product"}
                text={"seeProduct"}
                variant={"contained"}
                color={"white"}
              />
            </Grid>
            <Grid size="auto">
              <CustomButton
                url={"sustainability"}
                text={"ourHistory"}
                variant={"outlined"}
              />
            </Grid>
          </Grid>
        </Box>
      </>
    </Container>
  );
};

export default Hero;
