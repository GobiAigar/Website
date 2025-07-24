import { CardMedia, Container, Grid } from "@mui/material";
import React from "react";
import Title from "../keyComponents/Title";

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

          <CardMedia
            component="img"
            src={datas?.image_url1}
            alt={datas?.entitle}
            sx={{
              borderRadius: "none",

              padding: 0,
              width: "100%",

              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <FAQSection faqItems={faqs} fqaHeader={fqaSection} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default EndSection;
