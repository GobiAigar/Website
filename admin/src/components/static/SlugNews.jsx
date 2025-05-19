"use client";

import {
  Box,
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  styled,
  useTheme,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";

import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import timeFormater from "@/utils/timeFormater";
import { useState } from "react";
import { Backend_Endpoint } from "@/config";
import { useParams, useRouter } from "next/navigation";
const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    top: ${theme.spacing(2)};
    z-index: 7;
    display: flex;
  `
);

const CardActionAreaWrapper = styled(CardActionArea)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .MuiTouchRipple-root {
        opacity: .3;
    }

    .MuiCardActionArea-focusHighlight {
        background: ${theme.colors.alpha.trueWhite[100]};
    }

    &:hover {
        .MuiCardActionArea-focusHighlight {
            opacity: .1;
        }
    }
  `
);

const CardContentWrapper = styled(Box)(
  ({ theme }) => `
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: ${theme.spacing(3)};
    display: flex;
    align-items: flex-end;
    background: linear-gradient(180deg, rgba(7,9,25,0.1) 0%, rgba(7,9,25,0.1) 40%, rgba(7,9,25,0.85) 100%);
  `
);

function SlugNews({ data }) {
  const theme = useTheme();
  const router = useRouter();
  const params = useParams();
  const id = params.slug;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submit = async () => {
    try {
      const response = await fetch(`${Backend_Endpoint}/api/news/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      handleClose();
      router.push("/news");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <CardActionAreaWrapper>
        <CardMedia
          component="img"
          height="280px"
          image={data?.image_url}
          alt="Image"
          sx={{
            objectFit: "cover",
            height: "280px",
          }}
        />
        <CardActions>
          <Button variant="outlined" color="white" onClick={handleClickOpen}>
            Устгах
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Та энэ нийтлэлийг устгахдаа итгэлтэй байна уу?
            </DialogTitle>

            <DialogActions>
              <Button onClick={handleClose}>Үгүй</Button>
              <Button onClick={submit} autoFocus>
                Тийм
              </Button>
            </DialogActions>
          </Dialog>
        </CardActions>
        <CardContentWrapper>
          <Typography
            lineHeight={1.5}
            sx={{
              color: `${theme.colors.alpha.trueWhite[100]}`,
            }}
            variant="h2"
          >
            {data?.entitle}
          </Typography>
        </CardContentWrapper>
      </CardActionAreaWrapper>
      <Box
        sx={{
          position: "relative",
          p: 3,
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Box ml={1.5}>
              <Typography variant="h3">
                Journalist : {data?.enjournalist}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTimeTwoToneIcon
              fontSize="small"
              sx={{
                opacity: 0.7,
                mr: 0.5,
              }}
            />
            {data?.date ? timeFormater(data?.date) : ""}
          </Typography>
        </Box>

        <Typography
          variant="h3"
          color="text.secondary"
          fontWeight="normal"
          sx={{
            py: 2,
          }}
        >
          {data?.endescription}
        </Typography>
      </Box>
    </div>
  );
}

export default SlugNews;
