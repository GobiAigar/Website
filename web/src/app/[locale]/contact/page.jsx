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
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../../components/Header";
import {
  ContactEmailIcon,
  LocationIcon,
  PhoneIcon,
} from "../../components/Icon";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");

  const formik = useFormik({
    initialValues: {
      purpose: "",
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      country: "",
      state: "",
      city: "",
      bussiness: "",
      plan: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email(t("invalidEmail")).required(t("required")),
      firstname: Yup.string().required(t("required")),
      lastname: Yup.string().required(t("required")),
      phonenumber: Yup.string().required(t("required")),
      purpose: Yup.string().required(t("required")),
      bussiness: Yup.string().required(t("required")),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch("http://localhost:8000/api/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        console.log("res", values);

        if (res.ok) {
          console.log("amjilttai");
          resetForm();
        } else {
          console.error("Failed to send message");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  return (
    <Box
      sx={{ overflow: "hidden", bgcolor: "background.default", height: "100%" }}
    >
      <Header />

      <Box sx={{ position: "relative", zIndex: 1, py: 8, pt: 16 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  bgcolor: "#7b1c2e",
                  color: "white",
                  borderRadius: 2,
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <Box>
                  <Typography variant="h6" gutterBottom>
                    {t("contactInfo")}
                  </Typography>
                  <Typography variant="body2">{t("startChat")}</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <PhoneIcon className="mr-6" />
                    <Typography variant="body2">{t("phoneinfo")}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <ContactEmailIcon className="mr-6" />
                    <Typography variant="body2">{t("supportmail")}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <LocationIcon className="mr-6" />
                    <Typography variant="body2">{t("address")}</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h6" gutterBottom color="black">
                {t("contactUs")}
              </Typography>
              <Typography variant="body2" color="grey" sx={{ mb: 3 }}>
                {t("contactDesc")}
              </Typography>

              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12 }}>
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
                    { name: "lastname", label: t("lastName") },
                    { name: "firstname", label: t("firstName") },
                    { name: "email", label: t("email") },
                    { name: "phonenumber", label: t("phone") },
                    { name: "country", label: t("country") },
                    { name: "state", label: t("state") },
                    { name: "city", label: t("city") },
                    { name: "bussiness", label: t("business") },
                  ].map((field, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
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
                    sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
                  >
                    <Button onClick={formik.handleReset} variant="outlined">
                      {t("clear")}
                    </Button>
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
