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
import { useLocale, useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";
import Title from "../keyComponents/Title";

const FAQSection = ({ faqItems = [], fqaHeader = [] }) => {
  const lang = useLocale();
  const t = useTranslations("faq");
  return (
    <Container maxWidth="md" sx={{ color: "black", py: 8, p: 0 }}>
      <Title
        mntitle={fqaHeader.mntitle}
        entitle={fqaHeader.entitle}
        reverse={false}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: { xs: 1, md: 2 },
        }}
      >
        <Typography>
          {lang === "mn" ? fqaHeader.mndescription : fqaHeader.endescription}
        </Typography>
        <Link
          href="/contact"
          style={{
            marginTop: 0,
            fontWeight: "normal",
            fontStyle: "normal",
            lineHeight: "150%",
            color: "#fff",
            fontSize: {
              xs: "1rem",
              md: "1.5rem",
              lg: "2rem",
            },
            "&:hover": {
              textDecoration: "underline",
              color: "#fff",
            },
          }}
        >
          {t("contact")}
        </Link>
      </Box>

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
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
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
