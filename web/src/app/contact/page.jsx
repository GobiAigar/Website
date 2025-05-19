import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputLabel,
  FormControl,
} from "@mui/material";
import React from "react";
import Header from "../components/Header";
import { ContactEmailIcon, LocationIcon, PhoneIcon } from "../components/Icon";

const Contact = () => {
  return (
    <Box sx={{ overflow: "hidden", bgcolor: "background.default" }}>
      <Header />

      <Box sx={{ position: "relative", zIndex: 1, py: 8 }}>
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
                  gap: 8,
                }}
              >
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Contact Information
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Say something to start a live chat!
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <PhoneIcon className="mr-6" />
                    <Typography variant="body2">(+976) 7777 6540</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <ContactEmailIcon className="mr-6" />
                    <Typography variant="body2">
                      support@gobiaigar.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <LocationIcon className="mr-6" />
                    <Typography variant="body2">
                      130a, manufacturing west area, 20th khoroo
                      <br />
                      Bayangol District,
                      <br />
                      Ulaanbaatar, Mongolia
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h6" gutterBottom>
                CONTACT US
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                Let’s talk. Leave us a quick message and we’ll respond in a
                timely manner. Make sure your email is correct so we can get
                back to you.
              </Typography>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <FormControl fullWidth>
                    <InputLabel>Select the purpose</InputLabel>
                    <Select label="Select the purpose">
                      <MenuItem value="general">General Inquiry</MenuItem>
                      <MenuItem value="support">Support</MenuItem>
                      <MenuItem value="business">Business</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="First name" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Last name" />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Email" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Phone number" />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Country" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="State or province" />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="City" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Current business" />
                </Grid>

                <Grid size={{ xs: 12, sm: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Overview of your business plan"
                  />
                </Grid>

                <Grid
                  item
                  size={{ xs: 12 }}
                  sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
                >
                  <Button variant="outlined">Clear</Button>
                  <Button variant="contained" color="error">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
