import { Card, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";

const BrandImage = ({ datas }) => {
  const images = datas?.filter(Boolean) || [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={images[index]}
        title="our vision, mission, target image"
      />
    </Card>
  );
};

export default BrandImage;
