import { Button, Box, Grid, Typography } from "@mui/material";
import React from "react";
import { EmailIcon, RightArrowIcon } from "./Icon";
import { useTranslations } from "next-intl";
import { Link } from "../../i18n/navigation";

const TradeSection = ({ title, image, description }) => {
  const t = useTranslations("product");
  return (
    <Grid container spacing={4} alignItems="flex-start">
      <Grid size={{ xs: 12, md: 6 }}>
        <Box display="flex" justifyContent="start" alignItems="start">
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: "100%",
              objectFit: "cover",
              boxShadow: 3,
              borderRadius: 1,
            }}
          />
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Box>
          <Typography
            variant="h5"
            fontWeight={700}
            mb={2}
            sx={{ color: "#333" }}
          >
            {title}
          </Typography>

          <Typography variant="body1" sx={{ color: "#5C4B47", mb: 2 }}>
            {description}
          </Typography>

          <Box
            mt={4}
            display="flex"
            justifyContent={{ xs: "center", sm: "flex-end" }}
          >
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              sx={{
                maxWidth: { xs: "100%", sm: 215 },
                backgroundColor: "#6E1221",
                color: "#fff",
                display: "flex",
                alignItems: "start",
                gap: 1,
                px: 2,
                "&:hover": {
                  backgroundColor: "#4a0d17",
                },
              }}
              fullWidth
            >
              <EmailIcon />
              {t("contact")}
              <RightArrowIcon />
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TradeSection;
