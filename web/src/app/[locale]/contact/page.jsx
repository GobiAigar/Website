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
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useAppData } from "../../../context/AppDataProvider";
import Narrow from "./_Narrow";
import Description from "../../components/keyComponents/Description";
import PageLoader from "next/dist/client/page-loader";
import Loading from "../../components/keyComponents/Loading";

const Contact = () => {
  const t = useTranslations("contact");
  const { message, loadingWebsite } = useAppData();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

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
      phonenumber: Yup.string().required(t("required")),
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

  const data = message?.[0];

  if (loadingWebsite) {
    return <Loading />;
  }

  return (
    <Box
      sx={{
        position: "relative",
        top: 64,
        overflow: "hidden",
        bgcolor: "background.default",
        minHeight: "90vh",
      }}
    >
      <Narrow data={data} />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        sx={{
          backgroundImage: "url('/contactBg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <Box maxWidth="680px" paddingX={{ xs: "2rem", sm: "1rem", md: "0" }}>
          <Box marginY={"2rem"}>
            <Description
              mndescription={data?.mnsubtitle}
              endescription={data?.ensubtitle}
            />
          </Box>
          <Box marginBottom={"8rem"}>
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
                            fullWidth
                            name={field.name}
                            label={field.label}
                            sx={{ backgroundColor: "white" }}
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
                          name="phonenumber"
                          label={t("phoneNumber")}
                          value={formik.values.phonenumber}
                          sx={{ backgroundColor: "white" }}
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
                          fullWidth
                          multiline
                          sx={{ backgroundColor: "white" }}
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
          </Box>
        </Box>
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
