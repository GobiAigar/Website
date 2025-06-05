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
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useAppData } from "../../../context/AppDataProvider";
import Footer from "../../components/Footer";

const Contact = () => {
  const t = useTranslations("contact");
  // const { product, loading } = useAppData();

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

  // if (loading || !product || !product.data?.length) {
  //   return (
  //     <Box sx={{ bgcolor: "background.default" }}>
  //       <Header />

  //       <Box
  //         sx={{
  //           width: "100%",
  //           height: { xs: "18.75rem", sm: "80vh" },
  //           backgroundColor: "#f0f0f0",
  //         }}
  //       >
  //         <Skeleton variant="rectangular" width="100%" height="100%" />
  //       </Box>

  //       <Container sx={{ py: "2.5rem" }}>
  //         <Skeleton variant="text" width="60%" height={40} />
  //         <Skeleton variant="text" width="80%" height={25} sx={{ mt: 2 }} />

  //         <Grid container spacing={1} mt={3} mb={3}>
  //           <Grid>
  //             <Skeleton
  //               variant="rectangular"
  //               width={120}
  //               height={40}
  //               sx={{ borderRadius: 1 }}
  //             />
  //           </Grid>
  //           <Grid>
  //             <Skeleton
  //               variant="rectangular"
  //               width={150}
  //               height={40}
  //               sx={{ borderRadius: 1 }}
  //             />
  //           </Grid>
  //         </Grid>

  //         <Box>
  //           <Skeleton variant="rectangular" width="100%" height={300} />
  //           <Skeleton variant="text" width="100%" height={40} sx={{ mt: 2 }} />
  //           <Skeleton variant="text" width="100%" height={40} />
  //         </Box>
  //       </Container>

  //       <Footer />
  //     </Box>
  //   );
  // }

  // const data = product.data;
  // const banner = data.find((item) => item.id === 1);

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
          height: { xs: "18.75rem", sm: "80vh" },
          // backgroundImage: `url(${banner?.image_url})`,
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
          sx={{
            gap: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: "2rem", sm: "4rem", lg: "12rem" },
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            color="common.black"
            gutterBottom
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                lg: "2.5rem",
              },
              textAlign: "center",
            }}
          >
            {t("contactUs")}
          </Typography>
          <Typography
            variant="h5"
            color="common.black"
            mb="1rem"
            sx={{
              fontSize: {
                xs: "0.65rem",
                sm: "0.875rem",
                lg: "1.25rem",
              },
              px: { xs: "2rem", sm: "4rem", lg: "12rem", xl: "18rem" },
              textAlign: "center",
            }}
          >
            {t("contactDesc")}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ position: "relative", zIndex: 1, pb: "56px", pt: "42px" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="stretch">
            <Grid
              size={{ xs: 12 }}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  px: { xs: "1rem", sm: "3rem", md: "7rem", lg: "11.25rem" },
                }}
              >
                <form
                  onSubmit={formik.handleSubmit}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid
                      size={{ xs: 12, sm: 4 }}
                      sx={{
                        gap: "16px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
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
                          <MenuItem value="domestic">{t("domestic")}</MenuItem>
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
                        alignItems: "center",
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
