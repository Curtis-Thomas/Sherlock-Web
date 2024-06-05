import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Storage() {
  const [cookies, setCookies] = useState<Record<string, string>>({});
  const [localStorageData, setLocalStorageData] = useState<Record<string, any>>(
    {}
  );
  const [sessionStorageData, setSessionStorageData] = useState<
    Record<string, any>
  >({});

  useEffect(() => {
    const cookieString = document.cookie;
    const cookieArray = cookieString.split("; ");
    const cookieObject = cookieArray.reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      return { ...acc, [key]: value };
    }, {});
    setCookies(cookieObject);

    const parseValue = (value: string) => {
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    };

    const localStorageObject = Object.entries(localStorage).reduce(
      (acc, [key, value]) => {
        return { ...acc, [key]: parseValue(value) };
      },
      {}
    );
    setLocalStorageData(localStorageObject);

    const sessionStorageObject = Object.entries(sessionStorage).reduce(
      (acc, [key, value]) => {
        return { ...acc, [key]: parseValue(value) };
      },
      {}
    );
    setSessionStorageData(sessionStorageObject);
  }, []);

  const getType = (value: any) => {
    if (typeof value === "object" && value !== null) {
      if (value instanceof Date) {
        return "date";
      } else {
        return "object";
      }
    }
    return typeof value;
  };

  return (
    <>
      <Typography
        textAlign={"center"}
        sx={{ pb: 2 }}
        variant="h5"
        color={"#75A4FF"}
      >
        Storage
      </Typography>

      <Typography sx={{ pb: 1 }}>Cookies:</Typography>

      {Object.entries(cookies).map(([key, value]) => (
        <Typography
          key={key}
          sx={{ pb: 1, wordWrap: "break-word", overflowWrap: "break-word" }}
        >
          <span style={{ color: "#75A4FF" }}>
            ({key} {getType(value)})
          </span>
          : {String(value)}
        </Typography>
      ))}
      <Typography sx={{ pb: 1, pt: 1 }}>Local Storage:</Typography>
      {Object.entries(localStorageData).map(([key, value]) => (
        <Typography
          key={key}
          sx={{ pb: 1, wordWrap: "break-word", overflowWrap: "break-word" }}
        >
          <span style={{ color: "#75A4FF" }}>
            {" "}
            {key} ({getType(value)})
          </span>
          : {JSON.stringify(value, null, 2)}
        </Typography>
      ))}
      <Typography sx={{ pb: 1, pt: 1 }}>Session Storage:</Typography>
      {Object.entries(sessionStorageData).map(([key, value]) => (
        <Typography
          key={key}
          sx={{ pb: 1, wordWrap: "break-word", overflowWrap: "break-word" }}
        >
          <span style={{ color: "#75A4FF" }}>
            {key} ({getType(value)})
          </span>
          : {JSON.stringify(value, null, 2)}
        </Typography>
      ))}
    </>
  );
}

export default Storage;
