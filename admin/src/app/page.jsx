"use client";

import {
  Box,
  Card,
  Container,
  styled,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { useFormik } from "formik";
import { API_BASE_URL, Backend_Endpoint } from "@/config";
import Logo from "@/components/constants/logo";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MainContent = styled(Box)(
  () => `
    height: 100%;
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
);

const TopWrapper = styled(Box)(
  () => `
  display: flex;
  width: 100%;
  flex: 1;
  padding: 20px;
`
);

const Home = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setError(""); // Clear previous errors
        const response = await fetch(`${Backend_Endpoint}/api/user`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const user = await response.json();

        if (user.status === "failed") {
          setError(
            user.message || (user[0] && user[0].message) || "Login failed"
          );
          return;
        }
        sessionStorage.setItem("user_id", user[0].id);
        if (Array.isArray(user) && user.length === 1) router.push("/website");
      } catch (error) {
        setError(error.message || "An error occurred");
      }
    },
  });

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <MainContent>
        <TopWrapper>
          <Container maxWidth="sm">
            <Box>
              <form onSubmit={formik.handleSubmit}>
                <Card
                  sx={{
                    mt: 3,
                    px: 4,
                    pt: 5,
                    pb: 3,
                  }}
                >
                  <div className="flex">
                    <Logo />
                  </div>
                  {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                      {error}
                    </Alert>
                  )}
                  <TextField
                    fullWidth
                    id="username"
                    name="username"
                    label="Нэвтрэх нэр"
                    required
                    sx={{
                      mb: 2,
                    }}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
                  />
                  <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Нууц үг"
                    type="password"
                    required
                    sx={{
                      mb: 2,
                    }}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                  >
                    Нэвтрэх
                  </Button>
                </Card>
              </form>
            </Box>
          </Container>
        </TopWrapper>
      </MainContent>
    </div>
  );
};
export default Home;
