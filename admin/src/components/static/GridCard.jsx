import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const GridCard = ({ data }) => {
  return (
    <Card sx={{ width: 250, maxeight: 350, borderRadius: 4 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data?.image_url}
        alt={data?.image_url}
        title={data?.entitle}
      />
      <CardContent className="flex flex-col justify-between">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="line-clamp-2"
        >
          {data?.entitle}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
          className="line-clamp-3"
        >
          {data?.endescription}
        </Typography>
        <CardActions className="flex justify-end">
          <Link href={`/post/${data?.id}`}>
            <Button size="small">Дэлгэрэнгүй</Button>
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default GridCard;
