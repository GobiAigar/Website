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
        <Typography
          sx={{
            color: `${theme.colors.alpha.trueWhite[100]}`,
          }}
          gutterBottom
          variant="h2"
        >
          {data?.mntitle}
        </Typography>
        <Typography
          sx={{
            color: `${theme.colors.alpha.trueWhite[70]}`,
          }}
          variant="subtitle2"
        >
          {data?.mnsubtitle}
        </Typography>
      </div>
    </Card>
  );
}

export default MnHomeHero;
