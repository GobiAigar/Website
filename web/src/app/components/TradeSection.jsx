"use client";
import {
  Button,
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { EditIcon, GlobeIcon, HomeHashtagIcon } from "./Icon";
import { useTranslations } from "next-intl";
import { Link } from "../../i18n/navigation";

const TradeSection = ({
  title,
  image,
  description,
  selectedId,
  setSelectedId,
}) => {
  const t = useTranslations("product");

  const theme = useTheme();
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
  }, [description]);

  useEffect(() => {
    setShowFull(false);
  }, [description]);

  return (
    <Grid container spacing={4} alignItems="flex-start">
      <Grid size={{ xs: 12, md: 6 }}>
        <Box>
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
                  fontSize: "16px",
                  fontWeight: 500,
                  px: 2,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "transparent",
                    borderBottom: "0.125rem solid #B67C7C",
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
                  fontSize: "1rem",
                  fontWeight: 500,
                  px: 2,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "transparent",
                    borderBottom: "0.125rem solid #B67C7C",
                  },
                }}
              >
                <GlobeIcon color="#6E1221" />
                {t("international")}
              </Button>
            </Grid>
          </Grid>

          <Typography
            variant="h5"
            fontWeight={700}
            mb={2}
            sx={{
              color: "#333",
              fontSize: {
                xs: "1.375rem",
                sm: "1.625rem",
                md: "1.875rem",
                lg: "2rem",
              },
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              maxHeight: isDesktop && showFull ? "23rem" : "none",
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
            <Typography
              ref={textRef}
              variant="body1"
              align="justify"
              whiteSpace="pre-line"
              sx={{
                color: "#5C4B47",
                overflow: isDesktop && !showFull ? "hidden" : "visible",
                display: isDesktop && !showFull ? "-webkit-box" : "block",
                WebkitLineClamp: isDesktop && !showFull ? 12 : "unset",
                WebkitBoxOrient: "vertical",
                fontSize: {
                  xs: "0.875rem",
                  sm: "1rem",
                  md: "1.125rem",
                  lg: "1.25rem",
                },
              }}
            >
              {description}
            </Typography>
          </Box>

          {isOverflowing && isDesktop && (
            <Typography
              onClick={() => setShowFull(!showFull)}
              sx={{
                mt: 1,
                color: "primary.main",
                cursor: "pointer",
                fontWeight: 500,
                textAlign: "right",
                userSelect: "none",
              }}
            >
              {showFull ? t("seeLess") : t("seeMore")}
            </Typography>
          )}

          <Box
            display="flex"
            justifyContent={{ xs: "start" }}
            sx={{ mt: "0.5rem" }}
          >
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              sx={{
                backgroundColor: "white",
                borderColor: "#8C182A",
                borderRadius: "12px",
                border: 1,
                color: "#8C182A",
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: "1.5rem",
                py: "0.570rem",
                "&:hover": {
                  backgroundColor: "#4a0d17",
                  color: "white",
                },
                fontSize: "1rem",
                whiteSpace: "nowrap",
              }}
            >
              <EditIcon size={20} />
              {t("getStartToday")}
            </Button>
          </Box>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Box display="flex" justifyContent="start" alignItems="start">
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: "37.5rem",
              height: "37.5rem",
              objectFit: "cover",
              boxShadow: 3,
              borderRadius: 1,
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default TradeSection;
