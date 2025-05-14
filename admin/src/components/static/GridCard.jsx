import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const GridCard = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 250, height: 350, borderRadius: 4 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data?.image}
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="line-clamp-2"
        >
          {data?.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
          className="line-clamp-3"
        >
          {data?.content}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-end">
        <Link href={`/post/${data?.id}`}>
          <Button size="small">Дэлгэрэнгүй</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default GridCard;
