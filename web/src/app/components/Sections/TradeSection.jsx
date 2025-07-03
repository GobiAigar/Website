"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { EditIcon, GlobeIcon, HomeHashtagIcon } from "../Icon";
import { Link } from "../../../i18n/navigation";
import FlagDescription from "../keyComponents/FlagDescription";

const TradeSection = ({ datas }) => {
  const [selectedId, setSelectedId] = useState(3);
  const t = useTranslations("product");
  const theme = useTheme();
  const selectedData = datas.find((data) => data?.id === selectedId);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const lang = useLocale();

  return (
    <Container>
      <Grid
        container
        spacing={4}
        alignItems="flex-start"
        flexDirection={{ xs: "column-reverse", md: "row" }}
        sx={{ md: "relative" }}
      >
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
                    borderBottom: "0.125rem solid #B67C7C",
                  },
                }}
              >
                <GlobeIcon color="#6E1221" />
                {t("international")}
              </Button>
            </Grid>
          </Grid>

          <FlagDescription
            endescription={selectedData?.endescription}
            mndescription={selectedData?.mndescription}
          />

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
                fontSize: {
                  sm: "0.85rem",
                  md: "1rem",
                },
                whiteSpace: "nowrap",
              }}
            >
              <EditIcon />
              {t("getStartToday")}
            </Button>
          </Box>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            position: { md: "sticky" },
            top: 64,
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
              height: { xs: "auto", sm: "25rem", md: "37.5rem" },
              objectFit: "cover",
              boxShadow: 3,
              borderRadius: 1,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TradeSection;
