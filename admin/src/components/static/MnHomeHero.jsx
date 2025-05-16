import { Card, Typography, useTheme } from "@mui/material";

function MnHomeHero({ data }) {
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
        <Typography variant="h2">{data?.mntitle}</Typography>
        <Typography variant="subtitle2">{data?.mnsubtitle}</Typography>
      </div>
    </Card>
  );
}

export default MnHomeHero;
