import { Box, useTheme } from "@mui/material";
import { useLocale } from "next-intl";
import BrandDescription from "../keyComponents/BrandDescription";
import BrandTitle from "../keyComponents/BrandTitle";

const BrandDetial = ({ datas }) => {
  const lang = useLocale();
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign: "center",
        width: "100%",
        maxWidth: {
          xs: "100%",
        },
        minHeight: { xs: 300, sm: 350, md: 400 },
        backgroundImage: `url(${datas?.image_url1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: theme.palette.text.primary,
        display: "flex",
        gap: { xs: 0.5, sm: 0.8, md: 1 },
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Box>
        <BrandTitle entitle={datas?.entitle} mntitle={datas?.mntitle} />
        <BrandDescription
          endescription={datas?.endescription}
          mndescription={datas?.mndescription}
          textAlign="center"
        />
      </Box>
    </Box>
  );
};

export default BrandDetial;
