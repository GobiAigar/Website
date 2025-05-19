import { Card, Typography, useTheme } from "@mui/material";

function HomeHero({ data }) {
  const theme = useTheme();

  return (
    <>
      <Typography gutterBottom variant="h2">
        {data?.entitle}
      </Typography>
      <Typography variant="subtitle2">{data?.ensubtitle}</Typography>
      <Typography gutterBottom variant="h2">
        {data?.mntitle}
      </Typography>
      <Typography variant="subtitle2">{data?.mnsubtitle}</Typography>

      <div className="grid grid-cols-2">
        {data?.image_url1 && (
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
              backgroundPosition: "center",
              height: 300,
              width: "100%",
              p: 3,
              textAlign: "center",
            }}
          ></Card>
        )}
        {data?.image_url2 && (
          <Card
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${data?.image_url2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: 300,
              width: "100%",
              p: 3,
              textAlign: "center",
            }}
          ></Card>
        )}
        {data?.image_url3 && (
          <Card
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${data?.image_url3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: 300,
              width: "100%",
              p: 3,
              textAlign: "center",
            }}
          ></Card>
        )}
        {data?.image_url4 && (
          <Card
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${data?.image_url4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: 300,
              width: "100%",
              p: 3,
              textAlign: "center",
            }}
          ></Card>
        )}
      </div>
    </>
  );
}

export default HomeHero;
