import { Box, Container } from "@mui/material";
import Title from "../keyComponents/Title";
import { useLocale } from "next-intl";

const ImageSection = ({ datas }) => {
  const lang = useLocale();
  return (
    <Container sx={{ marginY: { xs: 3, sm: 4, md: 6 } }}>
      <Title mntitle={datas?.mntitle} entitle={datas?.entitle} />
      <Box
        component="img"
        src={lang === "mn" ? datas?.image_url1 : datas?.image_url2}
        alt="supply image"
        sx={{ width: "100%", borderRadius: "0.125rem" }}
      />
    </Container>
  );
};

export default ImageSection;
