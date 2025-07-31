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

const FAQSection = ({ faqs }) => {
  const lang = useLocale();
  const t = useTranslations("faq");

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="md" sx={{ color: "black" }}>
      <Box
        mb={8}
        mt={8}
        sx={{
          overflowY: { xs: "visible", md: "auto" },
        }}
      >
        {faqs?.map((faq) => {
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
