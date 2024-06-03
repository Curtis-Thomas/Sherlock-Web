import { Typography } from "@mui/material";
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
      <Typography>Primary Language: {locale.language}</Typography>
      <Typography>
        Preferred Languages: {locale.preferredLanguages.join(", ")}
      </Typography>
      <Typography>Time Zone: {locale.timeZone}</Typography>
      <Typography>Date Format: {locale.dateFormat}</Typography>
    </div>
  );
}

export default Locale;
