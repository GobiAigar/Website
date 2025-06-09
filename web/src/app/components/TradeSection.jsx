import { Button, Box, Grid, Typography } from "@mui/material";
import React from "react";
import { EditIcon, RightArrowIcon, GlobeIcon, HomeHashtagIcon } from "./Icon";
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
                  color: selectedId === 3 ? "#6E1221" : "#6E1221",
                  border: "none",
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
                    borderBottom: "0.125rem solid #6E1221",
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
                  color: selectedId === 4 ? "#6E1221" : "#6E1221",
                  border: "none",
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
                    borderBottom: "0.125rem solid #6E1221",
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
            sx={{ color: "#333" }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#5C4B47", pb: 1 }}
            align="justify"
            whiteSpace="pre-line"
          >
            {description}
          </Typography>

          <Box display="flex" justifyContent={{ xs: "start" }}>
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
