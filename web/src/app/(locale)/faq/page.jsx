"use client";
import { Box } from "@mui/material";
import { useAppData } from "../../../context/AppDataProvider";
import FAQSection from "./_FAQSection";
import PageHeaderNarrow from "../../components/keyComponents/PageHeaderNarrow";

const Page = () => {
  const { faqs, faqHeader, loadingAll } = useAppData();
  if (loadingAll) return <Box></Box>;
  return (
    <Box>
      <PageHeaderNarrow data={faqHeader.rows[0]} />
      <FAQSection faqs={faqs?.rows} />
    </Box>
  );
};

export default Page;
