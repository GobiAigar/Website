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

const FAQSection = ({ faqItems = [], fqaHeader = {} }) => {
  const lang = useLocale();
  const t = useTranslations("faq");

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="md" sx={{ color: "black" }}>
      <Title
        mntitle={fqaHeader.mntitle}
        entitle={fqaHeader.entitle}
        reverse={false}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          mt: 2,
        }}
      >
        <Typography sx={{ flex: 1 }}>
          {lang === "mn" ? fqaHeader.mndescription : fqaHeader.endescription}
        </Typography>
        <Link
          href="/contact"
          style={{
            fontWeight: 500,
            textDecoration: "underline",
            color: "blue",
            fontSize: "1rem",
          }}
        >
          {t("contact")}
        </Link>
      </Box>

      <Box
        pb={2}
        sx={{
          overflowY: { xs: "visible", md: "auto" },
          pr: 1,
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {faqItems.map((faq) => {
          const panelId = `panel-${faq.id}`;
          return (
            <Accordion
              key={faq.id}
              expanded={expanded === panelId}
              onChange={handleChange(panelId)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${panelId}-content`}
                id={`${panelId}-header`}
              >
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
          );
        })}
      </Box>
    </Container>
  );
};

export default FAQSection;
