"use client";

import { Backend_Endpoint } from "@/constants/constants";
import {
  Button,
  Card,
  Divider,
  Dialog,
  DialogActions,
  Alert,
  Snackbar,
  TextField,
  Grid,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IconEdit } from "@tabler/icons-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FileUploader from "../../components/website/FileUploader";

const EditNews = ({ data }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseSnackbar = () => setOpenSnackbar(false);

  const validationSchema = Yup.object({
    entitle: Yup.string().required("Title is required"),
    mntitle: Yup.string().required("Гарчиг шаардлагатай"),
    enjournalist: Yup.string().required("Journalist is required"),
    mnjournalist: Yup.string().required("Нийтлэлч шаардлагатай"),
    endescription: Yup.string().required("Description is required"),
    mndescription: Yup.string().required("Мэдээний дэлгэрэнгүй шаардлагатай"),
    image_url: Yup.string().required("Зураг шаардлагатай"),
    thumbnail: Yup.string().required("Thumbnail шаардлагатай"),
  });

  const formik = useFormik({
    initialValues: {
      entitle: data?.entitle,
      mntitle: data?.mntitle,
      enjournalist: data?.enjournalist,
      mnjournalist: data?.mnjournalist,
      endescription: data?.endescription,
      mndescription: data?.mndescription,
      image_url: data?.image_url,
      thumbnail: data?.thumbnail,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch(
          `${Backend_Endpoint}/api/news/${data.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          }
        );

        if (response.ok) {
          setOpenSnackbar(true);
          resetForm();
          window.location.reload();
        } else {
          alert("Алдаа гарлаа. Дахин оролдоно уу.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <Box>
      <IconButton onClick={handleClickOpen} color="primary">
        <IconEdit />
      </IconButton>
      <Dialog open={open} onClose={handleClose} scroll="body">
        <Card sx={{ padding: 2 }}>
          <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
            <Grid container spacing={3}>
              <Grid item size={12}>
                <Typography variant="h4">Мэдээ засах</Typography>
                <Divider sx={{ mt: 2 }} />
              </Grid>

              <Grid container spacing={2} size={12}>
                <TextField
                  fullWidth
                  id="mntitle"
                  name="mntitle"
                  label="Гарчиг /Монгол/"
                  value={formik.values.mntitle}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.mntitle && Boolean(formik.errors.mntitle)
                  }
                  helperText={formik.touched.mntitle && formik.errors.mntitle}
                />
                <TextField
                  fullWidth
                  id="mnjournalist"
                  name="mnjournalist"
                  label="Нийтлэлч /Монгол/"
                  value={formik.values.mnjournalist}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.mnjournalist &&
                    Boolean(formik.errors.mnjournalist)
                  }
                  helperText={
                    formik.touched.mnjournalist && formik.errors.mnjournalist
                  }
                />

                <TextField
                  fullWidth
                  id="mndescription"
                  name="mndescription"
                  label="Мэдээний дэлгэрэнгүй /Монгол/"
                  multiline
                  minRows={4}
                  value={formik.values.mndescription}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.mndescription &&
                    Boolean(formik.errors.mndescription)
                  }
                  helperText={
                    formik.touched.mndescription && formik.errors.mndescription
                  }
                />
                <Grid container item size={12}>
                  <TextField
                    fullWidth
                    id="entitle"
                    name="entitle"
                    label="Гарчиг /Англи/"
                    value={formik.values.entitle}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.entitle && Boolean(formik.errors.entitle)
                    }
                    helperText={formik.touched.entitle && formik.errors.entitle}
                  />
                  <TextField
                    fullWidth
                    id="enjournalist"
                    name="enjournalist"
                    label="Нийтлэлч /Англи/"
                    value={formik.values.enjournalist}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.enjournalist &&
                      Boolean(formik.errors.enjournalist)
                    }
                    helperText={
                      formik.touched.enjournalist && formik.errors.enjournalist
                    }
                  />
                  <TextField
                    fullWidth
                    id="endescription"
                    name="endescription"
                    label="Мэдээний дэлгэрэнгүй /Англи/"
                    multiline
                    minRows={4}
                    value={formik.values.endescription}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.endescription &&
                      Boolean(formik.errors.endescription)
                    }
                    helperText={
                      formik.touched.endescription &&
                      formik.errors.endescription
                    }
                  />
                </Grid>

                <FileUploader
                  setFieldValue={formik.setFieldValue}
                  initialPreview={formik.values.image_url}
                  fieldName="image_url"
                  onClear={() => {
                    formik.setFieldValue("image_url", "");
                    formik.setFieldValue("thumbnail", "");
                  }}
                />
                {formik.touched.image_url && formik.errors.image_url && (
                  <Alert severity="error" sx={{ mt: 1 }}>
                    {formik.errors.image_url}
                  </Alert>
                )}
              </Grid>
            </Grid>
            <Divider />

            <DialogActions>
              <Button onClick={handleClose}>Буцах</Button>
              <Button color="primary" variant="contained" type="submit">
                Шинэчлэх
              </Button>
            </DialogActions>
          </form>
        </Card>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="success" onClose={handleCloseSnackbar}>
            Амжилттай шинэчлэгдлээ!
          </Alert>
        </Snackbar>
      </Dialog>
    </Box>
  );
};

export default EditNews;
