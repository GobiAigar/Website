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
          <Grid container spacing={1} mb={3}>
            <Grid>
              <Button
                variant={selectedId === 2 ? "contained" : "outlined"}
                onClick={() => setSelectedId(2)}
                sx={{
                  backgroundColor: selectedId === 2 ? "#6E1221" : "transparent",
                  color: selectedId === 2 ? "#fff" : "#6E1221",
                  border: selectedId === 2 ? "none" : "0.125rem solid #6E1221",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  px: "0.75rem",
                }}
              >
                <HomeHashtagIcon
                  color={selectedId === 2 ? "#fff" : "#4a0d17"}
                />
                {t("domestic")}
              </Button>
            </Grid>

            <Grid>
              <Button
                variant={selectedId === 3 ? "contained" : "outlined"}
                onClick={() => setSelectedId(3)}
                sx={{
                  backgroundColor: selectedId === 3 ? "#6E1221" : "transparent",
                  color: selectedId === 3 ? "#fff" : "#6E1221",
                  border: selectedId === 3 ? "none" : "0.125rem solid #6E1221",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  px: "0.75rem",
                }}
              >
                <GlobeIcon color={selectedId === 3 ? "#fff" : "#4a0d17"} />
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

          <Box display="flex" justifyContent={{ xs: "center" }}>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              sx={{
                maxWidth: { xs: "100%", sm: 150 },
                backgroundColor: "white",
                borderColor: "#8C182A",
                borderRadius: "12px",
                border: 1,
                color: "#8C182A",
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: "6px",
                py: "3.5px",
                "&:hover": {
                  backgroundColor: "#4a0d17",
                  color: "white",
                },
              }}
              fullWidth
            >
              <EditIcon size={20} />
              {t("contact")}
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
