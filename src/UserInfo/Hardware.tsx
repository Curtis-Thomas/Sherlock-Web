import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

declare global {
  interface Navigator {
    deviceMemory?: number;
  }
}

function Hardware() {
  const [hardware, setHardware] = useState({
    cores: "",
    ram: "",
    gpu: "",
  });

  const getHardwareInfo = () => {
    // Get number of CPU cores
    const cores = navigator.hardwareConcurrency;

    // Estimate RAM (this is a rough estimation)
    let ram = "Unknown";
    if (navigator.deviceMemory) {
      ram = navigator.deviceMemory + " GB";
    }

    // Get GPU information using WebGL
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") as WebGLRenderingContext;

    let gpu = "Unknown";

    if (gl) {
      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      if (debugInfo) {
        gpu = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      }
    }
    return { cores: cores.toString(), ram, gpu };
  };

  useEffect(() => {
    const hardwareInfo = getHardwareInfo();
    setHardware(hardwareInfo);
  }, []);

  return (
    <>
      <Typography>CPU Cores: {hardware.cores}</Typography>
      <Typography>RAM: {hardware.ram}</Typography>
      <Typography>GPU: {hardware.gpu}</Typography>
    </>
  );
}

export default Hardware;
