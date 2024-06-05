import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";

function BrowserCapabilities() {
  const [browserCapabilities, setBrowserCapabilities] = useState<{
    userAgent: string;
    cookiesEnabled: boolean;
    javascriptEnabled: boolean;
    webRTC: boolean;
    webGL: string;
    doNotTrack: string;
    mimeTypes: string[];
  }>({
    userAgent: "",
    cookiesEnabled: false,
    javascriptEnabled: false,
    webRTC: false,
    webGL: "",
    doNotTrack: "",
    mimeTypes: [],
  });

  const getBrowserCapabilitiesInfo = () => {
    const userAgent = navigator.userAgent;
    const cookiesEnabled = navigator.cookieEnabled;
    const javascriptEnabled =
      typeof navigator.javaEnabled === "function" && navigator.javaEnabled();
    const webRTC = typeof navigator.mediaDevices?.getUserMedia === "function";
    const webGL = (() => {
      try {
        const canvas = document.createElement("canvas");
        const gl =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        return gl
          ? (gl as WebGLRenderingContext).getParameter(
              WebGLRenderingContext.RENDERER
            )
          : "Not supported";
      } catch (e) {
        return "Error detecting WebGL";
      }
    })();
    const doNotTrack = navigator.doNotTrack || "Unspecified";

    let mimeTypes = [];
    if (navigator.mimeTypes && navigator.mimeTypes.length > 0) {
      for (let i = 0; i < navigator.mimeTypes.length; i++) {
        mimeTypes.push(navigator.mimeTypes[i].type);
      }
    }

    return {
      userAgent,
      cookiesEnabled,
      javascriptEnabled,
      webRTC,
      webGL,
      doNotTrack,
      mimeTypes,
    };
  };

  useEffect(() => {
    const browserCapabilitiesInfo = getBrowserCapabilitiesInfo();
    setBrowserCapabilities(browserCapabilitiesInfo);
  }, []);

  return (
    <Box>
      <Typography
        textAlign={"center"}
        sx={{ pb: 2 }}
        variant="h5"
        color={"#75A4FF"}
      >
        Browser Capabilities
      </Typography>

      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            User Agent:
          </Typography>
        </Box>
        <Box>
          <Typography>{browserCapabilities.userAgent}</Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Cookies Enabled:
          </Typography>
        </Box>
        <Box>
          <Typography>
            {browserCapabilities.cookiesEnabled ? "Yes" : "No"}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            JavaScript Enabled:{" "}
          </Typography>
        </Box>
        <Box>
          <Typography>
            {browserCapabilities.javascriptEnabled ? "Yes" : "No"}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            WebRTC Support:
          </Typography>
        </Box>
        <Box>
          <Typography>{browserCapabilities.webRTC ? "Yes" : "No"}</Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            WebGL Renderer:
          </Typography>
        </Box>
        <Box>
          <Typography>{browserCapabilities.webGL}</Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Do Not Track:
          </Typography>
        </Box>
        <Box>
          <Typography>{browserCapabilities.doNotTrack}</Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            MIME Types:
          </Typography>
        </Box>
        <Box>
          <Typography>{browserCapabilities.mimeTypes.join(", ")}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default BrowserCapabilities;
