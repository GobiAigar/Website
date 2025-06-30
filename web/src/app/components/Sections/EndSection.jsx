import { Container, Grid } from "@mui/material";
import React from "react";
import Title from "../keyComponents/Title";
import Description from "../keyComponents/Description";
import ImageCard from "../Card/ImageCard";
import FAQSection from "./FAQSection";

const EndSection = ({ datas, faqs, fqaSection }) => {
  return (
    <Container>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Title
            mntitle={datas.mntitle}
            entitle={datas.entitle}
            reverse={false}
          />
          <Description
            mndescription={datas.mndescription}
            endescription={datas.endescription}
          />
          <ImageCard data={datas.image_url1} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <FAQSection faqItems={faqs} fqaHeader={fqaSection} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default EndSection;
