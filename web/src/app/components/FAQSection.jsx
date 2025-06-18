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
import { Link } from "../../i18n/navigation";

const FAQSection = ({ faqItems = [], lang = "en", fqaHeader = [] }) => {
  const t = useTranslations("faq");
  return (
    <Container maxWidth="md" sx={{ color: "black", py: 8, p: 0 }}>
      <Typography
        sx={{
          fontSize: {
            xs: "1.375rem",
            sm: "1.625rem",
            md: "1.875rem",
            lg: "2rem",
          },
        }}
        fontWeight="bold"
        gutterBottom
      >
        {lang === "mn" ? fqaHeader.mntitle : fqaHeader.entitle}
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.225rem",
            md: "1.475rem",
            lg: "1.6rem",
          },
        }}
      >
        {lang === "mn" ? fqaHeader.mndescription : fqaHeader.endescription}
        <Link
          href="/contact"
          style={{ textDecoration: "underline", color: "#1976d2" }}
        >
          {t("contact")}
        </Link>
      </Typography>

      <Box
        mt={4}
        pb={2}
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
