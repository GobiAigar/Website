"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Түр дата
const dummyData = [
  {
    id: 1,
    question: "Are You A Factory or A Trading Company?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    question: "What Raw Materials Do You Deal With?",
    answer: "We work with plastic, metal, and natural fibers.",
  },
  {
    id: 3,
    question: "Where Do Your Raw Materials Come From?",
    answer:
      "We source our raw materials from trusted suppliers across Asia and Europe.",
  },
  {
    id: 4,
    question: "What is Your Product Range?",
    answer:
      "We source our raw materials from trusted suppliers across Asia and Europe.",
  },
  {
    id: 5,
    question: "What is Your Annual Production Capacity?",
    answer:
      "We source our raw materials from trusted suppliers across Asia and Europe.",
  },
  {
    id: 6,
    question: "What is Your MOQ(Minimum Order Quantity)?",
    answer:
      "We source our raw materials from trusted suppliers across Asia and Europe.",
  },
  {
    id: 7,
    question: "What Can I Customize?",
    answer:
      "We source our raw materials from trusted suppliers across Asia and Europe.",
  },
];

const FAQSection = () => {
  const [faqs, setFaqs] = useState(dummyData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFAQs = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/faqs");
        if (res.ok) {
          const data = await res.json();
          setFaqs(data);
        } else {
          console.warn("Using fallback dummy data");
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  return (
    <Container maxWidth="md" sx={{ color: "black", py: 8, p: 0 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        FAQ
      </Typography>
      <Typography variant="body1" paragraph>
        Need Help? See answers to some of the most commonly asked questions. Or{" "}
        <a
          href="/contact"
          style={{ textDecoration: "underline", color: "#1976d2" }}
        >
          Contact Us
        </a>
        .
      </Typography>

      <Box mt={4}>
        {loading ? (
          <CircularProgress />
        ) : (
          faqs.map((faq) => (
            <Accordion key={faq.id}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))
        )}
      </Box>
    </Container>
  );
};

export default FAQSection;
