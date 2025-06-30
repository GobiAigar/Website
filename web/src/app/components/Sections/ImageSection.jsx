import { Box, Container } from "@mui/material";
import Title from "../keyComponents/Title";

const ImageSection = ({ datas }) => {
  return (
    <Container>
      <Title mntitle={datas.mntitle} entitle={datas.entitle} />
      <Box
        component="img"
        src={datas.image_url1}
        alt="supply image"
        sx={{ width: "100%", borderRadius: "0.125rem" }}
      />
    </Container>
  );
};

export default ImageSection;
