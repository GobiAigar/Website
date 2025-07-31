"use  client";

import { Backend_Endpoint } from "@/constants/constants";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Snackbar,
} from "@mui/material";
import { useState } from "react";
import { IconTrash } from "@tabler/icons-react";
import MuiAlert from "@mui/material/Alert";

const DeleteButton = ({ type, id }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submit = async () => {
    try {
      const response = await fetch(`${Backend_Endpoint}/api/${type}/${id.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        setSnackbar({
          open: true,
          message: "Амжилттай устгагдлаа",
          severity: "success",
        });
      } else {
        setSnackbar({
          open: true,
          message: "Устгах үед алдаа гарлаа. Дахин оролдоно уу!",
          severity: "error",
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Устгах үед алдаа гарлаа. Дахин оролдоно уу!",
        severity: "error",
      });
    }
  };
  return (
    <Box>
      <IconButton onClick={handleClickOpen}>
        <IconTrash color="red" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          Та устгахдаа итгэлтэй байна уу?
        </DialogTitle>

        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handleClose} variant="text">
            Үгүй
          </Button>
          <Button
            onClick={submit}
            autoFocus
            variant="outlined"
            sx={{ color: "red", borderColor: "red" }}
          >
            Тийм
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ height: "auto", position: "relative" }}>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <MuiAlert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </MuiAlert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default DeleteButton;
