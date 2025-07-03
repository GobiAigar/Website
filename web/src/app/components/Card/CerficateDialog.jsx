import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Avatar, Box, CardMedia } from "@mui/material";
import { useLocale } from "next-intl";
import { CloseRounded } from "@mui/icons-material";

export default function CerficateDialog({ data }) {
  const lang = useLocale();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          border: "none",
        }}
      >
        <Avatar
          variant="rounded"
          alt={data?.entitle}
          src={data?.logo}
          sx={{ width: 100, height: 100, objectFit: "small-fit" }}
        />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{ padding: 2, position: "relative" }}>
          <CardMedia
            sx={{
              border: "1px solid #888888",
              borderRadius: 2,
              objectFit: "cover",
            }}
            component="img"
            image={data?.image_url}
            alt={data?.entitle}
          />
          <DialogActions sx={{ position: "absolute", top: 10, right: 5 }}>
            <Button
              sx={{
                ":hover": {
                  backgroundColor: "transparent", // эсвэл backgroundColor: 'inherit'
                  boxShadow: "none",
                },
              }}
              onClick={handleClose}
            >
              <CloseRounded
                sx={{
                  color: "#333",
                  "&:hover": {
                    backgroundColor: "rgba(51, 51, 51, 0.04)",
                  },
                }}
              />
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
}
