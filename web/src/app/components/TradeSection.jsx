import { Button, Box, Grid, Typography } from "@mui/material";
import React from "react";
import { EmailIcon, RightArrowIcon } from "./Icon";

const TradeSection = ({ title, image, description, list }) => {
  return (
    <Grid container spacing={4} alignItems="flex-start">
      <Grid size={{ xs: 6, md: 6 }} zeroMinWidth>
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

      <Grid size={{ xs: 6, md: 6 }} zeroMinWidth>
        <Box>
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
            paragraph
            sx={{ color: "#5C4B47", mb: 2 }}
          >
            {description}
          </Typography>

          <Box
            component="ul"
            sx={{ pl: 3, color: "#5C4B47", typography: "body1" }}
          >
            {list.map((item, index) => (
              <Box key={index} component="li" sx={{ mb: 1 }}>
                {item.text}
                {item.subList && (
                  <Box
                    component="ul"
                    sx={{ pl: 3, mt: 1, listStyleType: "lower-alpha" }}
                  >
                    {item.subList.map((subItem, subIndex) => (
                      <Box component="li" key={subIndex}>
                        {subItem}
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>

          <Box
            mt={4}
            display="flex"
            justifyContent={{ xs: "center", sm: "flex-end" }}
          >
            <Button
              variant="contained"
              sx={{
                maxWidth: { xs: "100%", sm: 192 },
                backgroundColor: "#6E1221",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                "&:hover": {
                  backgroundColor: "#4a0d17",
                },
              }}
              fullWidth
            >
              {/* <Box
                component="img"
                src="/email.svg"
                alt="icon"
                sx={{ width: 20, height: 20 }}
              /> */}
              <EmailIcon />
              Contact Us
              {/* <Box
                component="img"
                src="/arrow-right.svg"
                alt="icon"
                sx={{ width: 20, height: 20 }}
              /> */}
              <RightArrowIcon />
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TradeSection;
