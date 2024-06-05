import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";

function OperatingSystem() {
  const [operatingSystem, setOperatingSystem] = useState({
    name: "",
    version: "",
    architecture: "",
  });

  const getOperatingSystemInfo = () => {
    const platform = navigator.platform;
    let name = "Unknown OS";
    let version = "";
    let architecture = "";

    // Detect operating system based on platform
    if (platform.includes("Win")) {
      name = "Windows";
      if (navigator.userAgent.includes("Windows NT 10.0")) version = "10";
      else if (navigator.userAgent.includes("Windows NT 6.3")) version = "8.1";
      else if (navigator.userAgent.includes("Windows NT 6.2")) version = "8";
      else if (navigator.userAgent.includes("Windows NT 6.1")) version = "7";
      else if (navigator.userAgent.includes("Windows NT 6.0"))
        version = "Vista";
      else if (navigator.userAgent.includes("Windows NT 5.1")) version = "XP";
      else if (navigator.userAgent.includes("Windows NT 5.0")) version = "2000";
      architecture = platform.includes("64") ? "64-bit" : "32-bit";
    } else if (platform.includes("Mac")) {
      name = "macOS";
      version =
        navigator.userAgent.match(/Mac OS X (\d+[._]\d+[._]\d+)/)?.[1] || "";
      architecture = platform.includes("Intel") ? "Intel" : "Apple Silicon";
    } else if (platform.includes("Linux")) {
      name = "Linux";
      architecture = platform.includes("x86_64") ? "64-bit" : "32-bit";
    } else {
      name = platform;
    }

    return { name, version, architecture };
  };

  useEffect(() => {
    const operatingSystemInfo = getOperatingSystemInfo();
    setOperatingSystem(operatingSystemInfo);
  }, []);

  return (
    <Box>
      <Typography
        textAlign={"center"}
        sx={{ pb: 2 }}
        variant="h5"
        color={"#75A4FF"}
      >
        Operating System
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Operating System:
          </Typography>
        </Box>
        <Box>
          <Typography>{operatingSystem.name}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Version:
          </Typography>
        </Box>
        <Box>
          <Typography>{operatingSystem.version}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Architecture:
          </Typography>
        </Box>
        <Box>
          <Typography>{operatingSystem.architecture}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default OperatingSystem;
