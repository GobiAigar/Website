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
import Description from "../keyComponents/Description";

const TradeSection = ({ datas }) => {
  const [selectedId, setSelectedId] = useState(3);
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
    <Container>
      <Box padding={{ xs: 2, sm: 4, md: 6 }}>
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
            <Box
              component="img"
              src={selectedData?.image_url1}
              alt={selectedData?.title}
              sx={{
                width: "100%",
                objectFit: "cover",
                boxShadow: 3,
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container mb={3}>
              <Grid size={{ xs: 6 }}>
                <Button
                  onClick={() => setSelectedId(3)}
                  fullWidth
                  sx={{
                    backgroundColor: "transparent",
                    color: "#6E1221",
                    borderBottom:
                      selectedId === 3
                        ? "0.125rem solid #6E1221"
                        : "0.125rem solid transparent",
                    borderRadius: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    fontSize: {
                      xs: "0.575rem",
                      sm: "0.8rem",
                      md: "0.85rem",
                      lg: "1rem",
                    },
                    fontWeight: 500,
                    px: 2,
                    py: 1.5,
                    "&:hover": {
                      backgroundColor: "transparent",
                      borderBottom: "0.125rem solid #",
                    },
                  }}
                >
                  <HomeHashtagIcon color="#6E1221" />
                  {t("domestic")}
                </Button>
              </Grid>
              <Grid size={{ xs: 6 }}>
                <Button
                  onClick={() => setSelectedId(4)}
                  fullWidth
                  sx={{
                    backgroundColor: "transparent",
                    color: "#6E1221",
                    borderBottom:
                      selectedId === 4
                        ? "0.125rem solid #6E1221"
                        : "0.125rem solid transparent",
                    borderRadius: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    fontSize: {
                      xs: "0.575rem",
                      sm: "0.8rem",
                      md: "0.85rem",
                      lg: "1rem",
                    },
                    fontWeight: 500,

                    py: 1.5,
                    "&:hover": {
                      backgroundColor: "transparent",
                      borderBottom: "0.125rem solid #",
                    },
                  }}
                >
                  <GlobeIcon color="#6E1221" />
                  {t("international")}
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
              <Description
                mndescription={selectedData?.mndescription}
                endescription={selectedData?.endescription}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TradeSection;
