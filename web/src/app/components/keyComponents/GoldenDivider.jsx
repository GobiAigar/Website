import { Box, Divider } from "@mui/material";

const GoldenDivider = () => {
  return (
    <Box
      marginTop={{ xs: 1, sm: 1.2, md: 1.5 }}
      marginBottom={{ xs: 2, sm: 3, md: 4 }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Divider
        sx={{
          borderBottomWidth: 2,
          borderColor: "primary.main",
          width: "10%",
        }}
      />
    </Box>
  );
};

export default GoldenDivider;
