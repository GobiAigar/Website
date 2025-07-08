import { Button } from "@mui/material";
import { Link } from "../../../i18n/navigation";
import { useTranslations } from "use-intl";

const CustomButton = ({
  url,
  text,
  color = "white",
  variant = "contained",
}) => {
  const t = useTranslations("home");

  const isContained = variant === "contained";

  return (
    <Button
      component={Link}
      href={`/${url}`}
      variant={variant}
      sx={{
        textTransform: "none",
        py: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
        px: { xs: "2rem", sm: "3rem", md: "4rem" },
        borderRadius: "5rem",
        fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
        width: "auto",
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
        backgroundColor: isContained ? color : "transparent",
        color: isContained ? "black" : color,
        border: isContained ? "none" : `2px solid ${color}`,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",

        ":hover": {
          backgroundColor: isContained ? "#f0f0f0" : color,
          color: "#333",
          boxShadow: isContained
            ? "0px 6px 12px rgba(0, 0, 0, 0.6)"
            : "0px 2px 6px rgba(0, 0, 0, 0.2)",
        },

        ":active": {
          backgroundColor: isContained ? "#e0e0e0" : "#ccc",
          color: isContained ? "black" : "black",
          boxShadow: "inset 0px 2px 4px rgba(0,0,0,0.4)",
        },

        ":focus": {
          outline: "2px solid #000",
          outlineOffset: "2px",
        },
      }}
    >
      {t(text)}
    </Button>
  );
};

export default CustomButton;
