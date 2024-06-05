import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface LocaleState {
  language: string;
  preferredLanguages: readonly string[];
  timeZone: string;
  dateFormat: string;
}

function Locale() {
  const [locale, setLocale] = useState<LocaleState>({
    language: "",
    preferredLanguages: [],
    timeZone: "",
    dateFormat: "",
  });

  const getLocaleInfo = () => {
    // Get primary language
    const language = navigator.language;

    // Get preferred languages
    const preferredLanguages = navigator.languages;

    // Get time zone
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Get date format (just an example, as JS doesn't directly provide date format)
    const dateFormat = new Intl.DateTimeFormat().format(new Date());

    return { language, preferredLanguages, timeZone, dateFormat };
  };

  useEffect(() => {
    const localeInfo = getLocaleInfo();
    setLocale(localeInfo);
  }, []);

  return (
    <div>
      <Typography
        textAlign={"center"}
        sx={{ pb: 2 }}
        variant="h5"
        color={"#75A4FF"}
      >
        Locale
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Primary Language:
          </Typography>
        </Box>
        <Box>
          <Typography>{locale.language}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Preferred Languages:
          </Typography>
        </Box>
        <Box>
          <Typography>{locale.preferredLanguages.join(", ")}</Typography>
        </Box>
      </Box>{" "}
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Time Zone:
          </Typography>
        </Box>
        <Box>
          <Typography>{locale.timeZone}</Typography>
        </Box>
      </Box>{" "}
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Date Format:
          </Typography>
        </Box>
        <Box>
          <Typography>{locale.dateFormat}</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Locale;
