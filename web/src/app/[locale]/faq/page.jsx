"use client";
import { Box } from "@mui/material";
import { useAppData } from "../../../context/AppDataProvider";
import FAQSection from "../../components/Sections/FAQSection";
import PageHeaderNarrow from "../../components/keyComponents/PageHeaderNarrow";

const Page = () => {
  const { faqs } = useAppData();
  if (!faqs) {
    return <Loading />;
  }
  const data = {
    image_url:
      "https://images.unsplash.com/photo-1453838956707-38a7aa3cd62d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <Box>
      <PageHeaderNarrow data={data} />
      <FAQSection faqs={faqs} />
    </Box>
  );
};

export default Page;
