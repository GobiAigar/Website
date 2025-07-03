import { Stack, Typography } from "@mui/material";
import Flags from "react-world-flags";
import { useLocale } from "next-intl";

const countryCodeMap = {
  cn: "cn",
  it: "it",
  gb: "gb",
  fr: "fr",
  jp: "jp",
  de: "de",
  us: "us",
  kr: "kr",
};

const injectFlagsWithIcons = (text) => {
  const lines = text?.split("\n");
  return lines?.map((line, i) => {
    const match = line.match(/\[([a-z]{2})\]\s*(.+)/i);
    if (match) {
      const code = match[1].toLowerCase();
      const name = match[2];
      return (
        <Stack key={i} direction="row" alignItems="center" spacing={1}>
          <Flags
            code={countryCodeMap[code]}
            style={{ width: 32, height: 20 }}
          />
          <Typography>{name}</Typography>
        </Stack>
      );
    }
    return (
      <Typography
        key={i}
        sx={{
          whiteSpace: "pre-line",
          fontSize: { xs: "1rem", md: "1.2rem" },
        }}
      >
        {line}
      </Typography>
    );
  });
};

const FlagDescription = ({ mndescription, endescription, textAlign }) => {
  const lang = useLocale();
  const rawText = lang === "mn" ? mndescription : endescription;

  return (
    <Stack spacing={1} sx={{ textAlign: textAlign || "left" }}>
      {injectFlagsWithIcons(rawText)}
    </Stack>
  );
};

export default FlagDescription;
