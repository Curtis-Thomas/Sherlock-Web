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
      <Typography>Operating System: {operatingSystem.name}</Typography>
      <Typography>Version: {operatingSystem.version}</Typography>
      <Typography>Architecture: {operatingSystem.architecture}</Typography>
    </Box>
  );
}

export default OperatingSystem;
