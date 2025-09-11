"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconEye } from "@tabler/icons-react";

const SeeDetailsProduct = ({ data, onClose }) => {
  const [eng, setEng] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!data) return null;

  const imageUrls = [1, 2, 3, 4]
    .map((i) => data[`image_url${i}`])
    .filter((url) => !!url);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box>
      <IconButton onClick={handleClickOpen} color="primary">
        <IconEye />
      </IconButton>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography
                variant="h3"
                fontWeight="bold"
                textTransform={"capitalize"}
              >
                {data?.title}
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={() => setEng(!eng)}>
                {eng ? "English" : "Монгол"}
              </Button>
            </Grid>
          </Grid>
        </DialogTitle>

        <DialogContent dividers>
          <Grid container spacing={2}>
            <Box size={{ xs: 12 }} display={"flex"} gap={1}>
              <Typography variant="subtitle2" color="textSecondary">
                Гарчиг:
              </Typography>
              {eng ? (
                <Typography variant="h6">{data?.entitle}</Typography>
              ) : (
                <Typography variant="h6">{data?.mntitle}</Typography>
              )}
            </Box>

            <Grid container spacing={2} mb={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                {imageUrls && imageUrls.length > 1 && imageUrls.length === 1 ? (
                  <Box
                    component="img"
                    src={imageUrls[0]}
                    loading="lazy"
                    sx={{
                      width: "100%",
                      height: { xs: 250, md: 400 },
                      borderRadius: 2,
                      boxShadow: 2,
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Slider {...sliderSettings}>
                    {imageUrls.map((url, idx) => (
                      <Box
                        key={idx}
                        component="img"
                        src={url}
                        sx={{
                          width: "100%",
                          height: { xs: 250, md: 400 },
                          borderRadius: 2,
                          boxShadow: 2,
                          objectFit: "cover",
                        }}
                      />
                    ))}
                  </Slider>
                )}
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="subtitle2" color="textSecondary">
                  Тайлбар
                </Typography>
                {eng ? (
                  <Typography style={{ textAlign: "justify" }}>
                    {data?.endescription}
                  </Typography>
                ) : (
                  <Typography style={{ textAlign: "justify" }}>
                    {data?.mndescription}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Буцах
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SeeDetailsProduct;
