"use client";

import {
  Box,
  Button,
  Grid,
  TextField,
  Snackbar,
  Alert,
  Container,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useAppData } from "../../../context/AppDataProvider";
import ContactSkeleton from "./_ContactSkeleton";
import { Typography } from "@mui/material";
import { useLocale } from "next-intl";
import PageHeaderNarrow from "../../components/keyComponents/PageHeaderNarrow";
import { relative } from "path";

const Contact = () => {
  const t = useTranslations("contact");
  const { message, loadingWebsite } = useAppData();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const lang = useLocale();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      email: "",
      phonenumber: "",
      plan: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email(t("invalidEmail")).required(t("required")),
      firstname: Yup.string().required(t("required")),
      phonenumber: Yup.string(),
      plan: Yup.string().required(t("required")),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/messages`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          }
        );

        if (res.ok) {
          setSnackbarMessage(t("success"));
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          resetForm();
        } else {
          setSnackbarMessage(t("error"));
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        }
      } catch (error) {
        setSnackbarMessage(t("error"));
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    },
  });

  const data = message?.data;

  if (loadingWebsite) {
    return <ContactSkeleton />;
  }

  return (
    <Box>
      <PageHeaderNarrow data={data} />
      <Box
        py={8}
        sx={{
          backgroundImage: `url(./slogan.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={4}>
                <Grid size={{ xs: 12 }}>
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <form onSubmit={formik.handleSubmit}>
                      <Grid container spacing={2}>
                        {[
                          { name: "email", label: t("email") },
                          { name: "firstname", label: t("firstName") },
                        ].map((field, index) => (
                          <Grid size={{ xs: 12, sm: 6 }} key={index}>
                            <TextField
                              InputLabelProps={{ shrink: true }}
                              fullWidth
                              name={field.name}
                              label={field.label}
                              sx={{
                                backgroundColor: "rgba(255,255,255,0.1)", // semi-transparent
                                borderRadius: "0",
                                backdropFilter: "blur(2px)", // frosted-glass effect
                              }}
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
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            name="phonenumber"
                            label={t("phoneNumber")}
                            value={formik.values.phonenumber}
                            sx={{
                              backgroundColor: "rgba(255,255,255,0.1)", // semi-transparent
                              borderRadius: "8px",
                              backdropFilter: "blur(2px)", // frosted-glass effect
                            }}
                            onChange={formik.handleChange}
                            error={Boolean(
                              formik.touched.phonenumber &&
                                formik.errors.phonenumber
                            )}
                            helperText={
                              formik.touched.phonenumber &&
                              formik.errors.phonenumber
                            }
                          />
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                          <TextField
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            multiline
                            sx={{
                              backgroundColor: "rgba(255,255,255,0.1)",
                              borderRadius: "8px",
                              backdropFilter: "blur(2px)",
                            }}
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
                            fullWidth
                            height="4rem"
                            variant="contained"
                            sx={{
                              background: "#6E1221",
                              border: "2px solid #6E1221",
                              "&:hover": { backgroundColor: "#4a0d17" },
                              color: "white",
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
            </Grid>
            <Grid size={{ xs: 0, md: 6 }}>
              <Box>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.7131738237736!2d106.79606814538914!3d47.883880242847844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693aaedc40afb%3A0x73d5d64c7d5b7f4b!2z0JPQvtCy0Ywg0JDQudCz0LDRgCDQpdCl0JogLyBHb2JpIEFpZ2FyIExMQw!5e1!3m2!1sen!2smn!4v1756974976079!5m2!1sen!2smn"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    display: "block",
                    minHeight: "300px",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gobi Aigar LLC Location Map"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

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
