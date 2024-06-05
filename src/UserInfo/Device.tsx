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
      <Typography
        textAlign={"center"}
        sx={{ pb: 2 }}
        variant="h5"
        color={"#75A4FF"}
      >
        Device
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Screen Resolution:
          </Typography>
        </Box>
        <Box>
          <Typography>
            {" "}
            {device.screenWidth}x{device.screenHeight}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Color Depth:
          </Typography>
        </Box>
        <Box>
          <Typography>{device.colorDepth} bits</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Pixel Ratio:
          </Typography>
        </Box>
        <Box>
          <Typography>{device.pixelRatio}x</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Device Type:
          </Typography>
        </Box>
        <Box>
          <Typography>{device.deviceType}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Orientation:
          </Typography>
        </Box>
        <Box>
          <Typography>{device.orientation}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Device;
