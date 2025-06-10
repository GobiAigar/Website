"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Snackbar,
  Alert,
  Skeleton,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../../components/Header";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useAppData } from "../../../context/AppDataProvider";
import Footer from "../../components/Footer";

const Contact = () => {
  const t = useTranslations("contact");
  const lang = useLocale();
  const { message, loading } = useAppData();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const formik = useFormik({
    initialValues: {
      purpose: "",
      firstname: "",
      email: "",
      plan: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email(t("invalidEmail")).required(t("required")),
      firstname: Yup.string().required(t("required")),
      purpose: Yup.string().required(t("required")),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch("http://localhost:8000/api/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (res.ok) {
          setSnackbarMessage(t("success"));
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          resetForm();
        } else {
          console.error("Failed to send message");
          setSnackbarMessage(t("error"));
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSnackbarMessage(t("error"));
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    },
  });

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!loading) setLoaded(true);
  }, [loading]);

  const data = message?.[0];

  return (
    <Box
      sx={{
        overflow: "hidden",
        bgcolor: "background.default",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "20rem",
          backgroundImage:
            loaded && data?.image_url ? `url(${data?.image_url})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Header />
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
        />
        <Box
          sx={{
            minHeight: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "black",
            px: 4,
            mt: 10,
            position: "absolute",
            zIndex: 1,
            width: "100%",
          }}
        >
          <Container maxWidth="sm">
            {!loaded ? (
              <>
                <Skeleton
                  variant="text"
                  width="80%"
                  height={40}
                  sx={{ mx: "auto", mb: 2 }}
                />
                <Skeleton
                  variant="text"
                  width="60%"
                  height={30}
                  sx={{ mx: "auto" }}
                />
              </>
            ) : (
              <>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: {
                      xs: "24px",
                      sm: "28px",
                      md: "32px",
                      color: "white",
                    },
                    fontWeight: "bold",
                  }}
                >
                  {lang === "mn" ? data?.mntitle : data?.entitle}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mt: 2,
                    fontSize: {
                      xs: "12px",
                      sm: "16px",
                      md: "20px",
                      color: "white",
                    },
                  }}
                >
                  {lang === "mn" ? data?.mnsubtitle : data?.ensubtitle}
                </Typography>
              </>
            )}
          </Container>
        </Box>
      </Box>

      <Box sx={{ position: "relative", zIndex: 1, pb: "56px", pt: "42px" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="stretch">
            <Grid size={{ xs: 12 }}>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  px: { xs: "1rem", sm: "3rem", md: "7rem", lg: "11.25rem" },
                }}
              >
                {!loaded ? (
                  <Grid container spacing={2}>
                    {[1, 2, 3, 4].map((i) => (
                      <Grid size={{ xs: 12, sm: i <= 3 ? 4 : 12 }} key={i}>
                        <Skeleton variant="rectangular" height={56} />
                      </Grid>
                    ))}
                    <Grid
                      size={{ xs: 12 }}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Skeleton variant="rectangular" width={150} height={40} />
                    </Grid>
                  </Grid>
                ) : (
                  <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 4 }}>
                        <FormControl
                          fullWidth
                          error={Boolean(
                            formik.touched.purpose && formik.errors.purpose
                          )}
                        >
                          <InputLabel>{t("selectPurpose")}</InputLabel>
                          <Select
                            name="purpose"
                            label={t("selectPurpose")}
                            value={formik.values.purpose}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          >
                            <MenuItem value="international">
                              {t("international")}
                            </MenuItem>
                            <MenuItem value="domestic">
                              {t("domestic")}
                            </MenuItem>
                            <MenuItem value="other">{t("other")}</MenuItem>
                          </Select>
                          {formik.touched.purpose && formik.errors.purpose && (
                            <Typography variant="caption" color="error">
                              {formik.errors.purpose}
                            </Typography>
                          )}
                        </FormControl>
                      </Grid>

                      {[
                        { name: "email", label: t("email") },
                        { name: "firstname", label: t("firstName") },
                      ].map((field, index) => (
                        <Grid size={{ xs: 12, sm: 4 }} key={index}>
                          <TextField
                            fullWidth
                            name={field.name}
                            label={field.label}
                            value={formik.values[field.name]}
                            onChange={formik.handleChange}
                            error={Boolean(
                              formik.touched[field.name] &&
                                formik.errors[field.name]
                            )}
                            helperText={
                              formik.touched[field.name] &&
                              formik.errors[field.name]
                            }
                          />
                        </Grid>
                      ))}

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          multiline
                          rows={3}
                          name="plan"
                          label={t("plan")}
                          value={formik.values.plan}
                          onChange={formik.handleChange}
                        />
                      </Grid>

                      <Grid
                        size={{ xs: 12 }}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: 2,
                        }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            background: "#6E1221",
                            border: "2px solid #6E1221",
                            "&:hover": { backgroundColor: "#4a0d17" },
                          }}
                        >
                          {t("submit")}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity={snackbarSeverity}
          onClose={() => setSnackbarOpen(false)}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
