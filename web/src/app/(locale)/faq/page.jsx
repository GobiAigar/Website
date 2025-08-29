"use client";
import { Box } from "@mui/material";
import { useAppData } from "../../../context/AppDataProvider";
import FAQSection from "../../components/Sections/FAQSection";
import PageHeaderNarrow from "../../components/keyComponents/PageHeaderNarrow";
import Loading from "../../components/keyComponents/Loading";

const Page = () => {
  const { faqs, faqHeader, loadingAll } = useAppData();

  if (loadingAll) {
    return <Loading />;
  }

  return (
    <Box>
      <PageHeaderNarrow data={faqHeader[0]} />
      <FAQSection faqs={faqs} />
    </Box>
  );
};

export default Page;
