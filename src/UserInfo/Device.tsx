import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Device() {
  const [device, setDevice] = useState({
    screenWidth: 0,
    screenHeight: 0,
    colorDepth: 0,
    pixelRatio: 0,
    deviceType: "",
    orientation: "",
  });

  const getDeviceInfo = () => {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const colorDepth = window.screen.colorDepth;
    const pixelRatio = window.devicePixelRatio;

    // Determine device type based on screen width
    const deviceType =
      screenWidth <= 768
        ? "Mobile"
        : screenWidth <= 1024
        ? "Tablet"
        : "Desktop";

    // Get device orientation
    const orientation = screenWidth > screenHeight ? "Landscape" : "Portrait";

    return {
      screenWidth,
      screenHeight,
      colorDepth,
      pixelRatio,
      deviceType,
      orientation,
    };
  };

  useEffect(() => {
    const deviceInfo = getDeviceInfo();
    setDevice(deviceInfo);
  }, []);

  return (
    <Box>
      <Typography>
        Screen Resolution: {device.screenWidth}x{device.screenHeight}
      </Typography>
      <Typography>Color Depth: {device.colorDepth} bits</Typography>
      <Typography>Pixel Ratio: {device.pixelRatio}x</Typography>
      <Typography>Device Type: {device.deviceType}</Typography>
      <Typography>Orientation: {device.orientation}</Typography>
    </Box>
  );
}

export default Device;
