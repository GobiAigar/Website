import { Box, Container, Grid, Typography } from "@mui/material";
import { useLocale } from "next-intl";
import Title from "../keyComponents/Title";

const StatisticsSection = ({ datas, statisticsList }) => {
  const lang = useLocale();

  return (
    <Container sx={{ marginY: { xs: 3, sm: 4, md: 6 } }}>
      <Grid container spacing={4} alignItems="stretch">
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            backgroundColor: "white",
            zIndex: 10,
            padding: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Title
            mntitle={datas?.mntitle}
            entitle={datas?.entitle}
            reverse={false}
          />
          <Box component="ul" sx={{ paddingLeft: "0.75rem" }}>
            {statisticsList.map((item) => (
              <Typography
                component="li"
                key={item.id}
                sx={{
                  paddingY: "0.5rem",
                  listStyleType: "disc",
                  fontSize: {
                    xs: "0.5",
                    md: "0.875rem",
                    lg: "1rem",
                  },
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                {lang === "mn" ? item.mongolia : item.english}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StatisticsSection;
