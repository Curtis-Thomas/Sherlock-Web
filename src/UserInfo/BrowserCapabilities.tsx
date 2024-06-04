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
      <Typography textAlign={"center"} sx={{ pb: 1 }} variant="h5">
        Browser Capabilities
      </Typography>
      <Typography>User Agent: {browserCapabilities.userAgent}</Typography>
      <Typography>
        Cookies Enabled: {browserCapabilities.cookiesEnabled ? "Yes" : "No"}
      </Typography>
      <Typography>
        JavaScript Enabled:{" "}
        {browserCapabilities.javascriptEnabled ? "Yes" : "No"}
      </Typography>
      <Typography>
        WebRTC Support: {browserCapabilities.webRTC ? "Yes" : "No"}
      </Typography>
      <Typography>WebGL Renderer: {browserCapabilities.webGL}</Typography>
      <Typography>Do Not Track: {browserCapabilities.doNotTrack}</Typography>
      <Typography>
        MIME Types: {browserCapabilities.mimeTypes.join(", ")}
      </Typography>
    </Box>
  );
}

export default BrowserCapabilities;
