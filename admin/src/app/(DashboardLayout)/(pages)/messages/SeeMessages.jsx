"use client";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Dialog, IconButton } from "@mui/material";
import { IconEye } from "@tabler/icons-react";

export default function SeeMessages({ data }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <IconButton onClick={handleClickOpen}>
        <IconEye variant="primary" color="blue" />
      </IconButton>
      <Dialog open={open} onClose={handleClose} width={50}>
        <Box
          sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography variant="body1">Нэр</Typography>
          <Typography variant="h3">{data?.firstname} </Typography>
          <Typography variant="body1">И-мэйл</Typography>
          <Typography variant="h3">{data?.email} </Typography>
          <Typography variant="body1">Утасны дугаар</Typography>
          <Typography variant="h3">{data?.phonenumber} </Typography>
          <Typography variant="body1">Огноо</Typography>
          <Typography variant="subtitle1">{data?.date} </Typography>
          <Typography variant="body1">Төлөвлөгөө</Typography>
          <Typography variant="subtitle1">{data?.plan} </Typography>
        </Box>
      </Dialog>
    </Box>
  );
}
