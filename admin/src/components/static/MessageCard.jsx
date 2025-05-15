import timeFormater from "@/utils/timeFormater";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MessageCard({ data }) {
  return (
    <Card
      sx={{
        minWidth: 300,
        maxWidth: 400,
        height: 250,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent className="h-full flex flex-col justify-between ">
        <div>
          <div className=" flex justify-between">
            <Typography gutterBottom variant="h5">
              {data?.purpose}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
              }}
            >
              {data?.date ? timeFormater(data?.date) : ""}
            </Typography>
          </div>
          <div className="flex justify-between">
            <Typography>{data?.firstname}</Typography>
            <Typography>{data?.lastname}</Typography>
          </div>
          <Typography variant="body1" component="div">
            {data?.email}
          </Typography>
          <Typography variant="body2">
            {data?.country} {data?.state} {data?.city}
          </Typography>
          <Typography variant="h5">{data?.bussiness}</Typography>
        </div>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", minHeight: "90px" }}
        >
          {data?.plan}
        </Typography>
      </CardContent>
    </Card>
  );
}
