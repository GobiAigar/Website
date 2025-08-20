import { Box, Divider } from "@mui/material";

const GoldenDivider = () => {
  return (
    <Box
      marginY={{ xs: 2, sm: 3, md: 3.2 }}
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
