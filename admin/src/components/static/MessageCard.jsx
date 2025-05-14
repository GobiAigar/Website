import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MessageCard({ data }) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        height: 250,
        borderRadius: 4,
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <div className="flex justify-between">
          <Typography gutterBottom variant="h5">
            {data?.name}
          </Typography>
          <Typography>{data?.phoneNumber}</Typography>
        </div>

        <Typography variant="h5" component="div">
          {data?.email}
        </Typography>
        <Typography variant="body2">
          {data?.country} {data?.city}
        </Typography>

        <Typography variant="body2" sx={{ mb: 1.5 }}>
          {data?.currentBusiness}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {data?.businessPlanOverview}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
          }}
          className="flex items-center justify-end"
        >
          {data?.date}
        </Typography>
      </CardContent>
    </Card>
  );
}
