"use client";

import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslations } from "next-intl";

const FAQSection = ({ faqItems = [], lang = "en" }) => {
  const t = useTranslations("faq");
  return (
    <Container maxWidth="md" sx={{ color: "black", py: 8, p: 0 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {t("title")}
      </Typography>
      <Typography variant="body1" paragraph>
        {t("subtitle")}
        <a
          href="/contact"
          style={{ textDecoration: "underline", color: "#1976d2" }}
        >
          {t("contact")}
        </a>
        .
      </Typography>

      <Box
        mt={4}
        sx={{
          maxHeight: {
            xs: "none",
            md: 400,
          },
          overflowY: {
            xs: "visible",
            md: "auto",
          },
          pr: 1,
        }}
      >
        {faqItems.map((faq) => (
          <Accordion key={faq.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {lang === "mn" ? faq.mnquestion : faq.enquestion}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {lang === "mn" ? faq.mnanswer : faq.enanswer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQSection;
