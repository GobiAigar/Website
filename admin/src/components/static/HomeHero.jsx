import { Card, Typography, useTheme } from "@mui/material";

function HomeHero({ data }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${data?.image_url1})`,
        backgroundSize: "cover",
        height: 300,
        width: "100%",
        p: 3,
        textAlign: "center",
      }}
    >
      <div>
        <Typography gutterBottom variant="h2">
          {data?.entitle}
        </Typography>
        <Typography variant="subtitle2">{data?.ensubtitle}</Typography>
      </div>
    </Card>
  );
}

export default HomeHero;
