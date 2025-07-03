import { Container, Grid } from "@mui/material";
import React from "react";
import Title from "../keyComponents/Title";
import ImageCard from "../Card/ImageCard";
import FAQSection from "./FAQSection";
import FlagDescription from "../keyComponents/FlagDescription";

const EndSection = ({ datas, faqs, fqaSection }) => {
  return (
    <Container sx={{ marginY: { xs: 3, sm: 4, md: 6 } }}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Title
            mntitle={datas?.mntitle}
            entitle={datas?.entitle}
            reverse={false}
          />
          <FlagDescription
            mndescription={datas?.mndescription}
            endescription={datas?.endescription}
          />
          <ImageCard data={datas?.image_url1} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <FAQSection faqItems={faqs} fqaHeader={fqaSection} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default EndSection;
