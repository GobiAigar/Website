"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import { GlobeIcon, HomeHashtagIcon } from "../Icon";
import { Fade } from "@mui/material";
import Title from "../keyComponents/Title";
import GoldenDivider from "../keyComponents/GoldenDivider";

const TradeSection = ({ datas }) => {
  const [selectedId, setSelectedId] = useState(10);
  const t = useTranslations("product");
  const lang = useLocale();
  const theme = useTheme();
  const selectedData = datas.find((data) => data?.id === selectedId);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const textRef = useRef(null);
  const [showFull, setShowFull] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const timer = setTimeout(() => {
      const { scrollHeight, clientHeight } = el;
      setIsOverflowing(scrollHeight > clientHeight);
    }, 50);

    return () => clearTimeout(timer);
  }, [
    selectedData?.mndescription,
    selectedData?.endescription,
    lang,
    selectedId,
  ]);

  useEffect(() => {
    setShowFull(false);
  }, [
    selectedData?.mndescription,
    selectedData?.endescription,
    lang,
    selectedId,
  ]);

  return (
    <Box marginBottom={{ xs: "3rem", md: "5rem" }}>
      <Container id={"tradeTerm"}>
        <Title
          entitle={selectedData?.entitle}
          mntitle={selectedData?.mntitle}
        />
        <GoldenDivider />
        <Box
          paddingTop={{ xs: 2, sm: 4, md: 4 }}
          paddingBottom={{ xs: 5, sm: 7, md: 7 }}
        >
          <Grid
            container
            spacing={4}
            alignItems="flex-start"
            flexDirection={{ xs: "column-reverse", md: "row" }}
          >
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                position: { md: "sticky" },
                top: 100,
                backgroundColor: "white",
                zIndex: 10,
              }}
            >
              <Fade in key={selectedId} timeout={500}>
                <Box
                  component="img"
                  src={selectedData?.image_url1}
                  alt={selectedData?.title}
                  sx={{
                    height: { xs: "350px", sm: "400px", md: "700px" },
                    width: "100%",
                    objectFit: "cover",
                    boxShadow: 3,
                  }}
                />
              </Fade>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container mb={3}>
                <Grid size={{ xs: 6 }}>
                  <Button
                    onClick={() => setSelectedId(10)}
                    fullWidth
                    sx={{
                      backgroundColor: "transparent",
                      color: "#6E1221",
                      borderBottom:
                        selectedId === 10
                          ? "0.125rem solid #F5BF03"
                          : "0.125rem solid #E5E7EB",
                      borderRadius: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      fontSize: {
                        xs: "1rem",
                        sm: "1.2rem",
                        md: "1.25rem",
                        lg: "1.5rem",
                      },
                      fontWeight: 500,
                      px: 2,
                      py: 1.5,
                      "&:hover": {
                        backgroundColor: "transparent",
                        borderBottom: "0.125rem solid #FDF5D8",
                      },
                    }}
                  >
                    <HomeHashtagIcon color="#6E1221" />
                    <Typography
                      variant="body1"
                      sx={{
                        whiteSpace: "pre-line",
                      }}
                    >
                      {t("domestic")}
                    </Typography>
                  </Button>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Button
                    onClick={() => setSelectedId(9)}
                    fullWidth
                    sx={{
                      backgroundColor: "transparent",
                      color: "#6E1221",
                      borderBottom:
                        selectedId === 9
                          ? "0.125rem solid #F5BF03"
                          : "0.125rem solid #E5E7EB",
                      borderRadius: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      fontSize: {
                        xs: "1rem",
                        sm: "1.2rem",
                        md: "1.25rem",
                        lg: "1.5rem",
                      },
                      fontWeight: 500,

                      py: 1.5,
                      "&:hover": {
                        backgroundColor: "transparent",
                        borderBottom: "0.125rem solid #FDF5D8",
                      },
                    }}
                  >
                    <GlobeIcon color="#6E1221" />
                    <Typography
                      variant="body1"
                      sx={{
                        whiteSpace: "pre-line",
                      }}
                    >
                      {t("international")}
                    </Typography>
                  </Button>
                </Grid>
              </Grid>

              <Box
                sx={{
                  maxHeight: isDesktop && showFull ? "auto" : "none",
                  overflowY: isDesktop && showFull ? "auto" : "visible",
                  pr: isDesktop && showFull ? 1 : 0,
                  scrollbarWidth: isDesktop ? "thin" : "none",
                  "&::-webkit-scrollbar": {
                    width: isDesktop ? 0 : "0px",
                  },
                  "&:hover::-webkit-scrollbar": {
                    width: isDesktop ? "6px" : "0px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#aaa",
                    borderRadius: "6px",
                  },
                }}
              >
                <Fade in key={selectedId} timeout={500}>
                  <Typography
                    color="#333"
                    variant="body1"
                    textAlign={"justify"}
                    sx={{
                      whiteSpace: "pre-line",
                      lineHeight: "1.5",
                      marginTop: "1rem",
                      marginBottom: {
                        xs: "1rem",
                        lg: "2rem",
                      },
                    }}
                  >
                    {lang === "mn"
                      ? selectedData?.mndescription
                      : selectedData?.endescription}
                  </Typography>
                </Fade>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TradeSection;
