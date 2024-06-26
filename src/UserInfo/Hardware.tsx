import { Box, Typography } from "@mui/material";
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
      <Typography
        textAlign={"center"}
        sx={{ pb: 2 }}
        variant="h5"
        color={"#75A4FF"}
      >
        Hardware
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            CPU Cores:
          </Typography>
        </Box>
        <Box>
          <Typography>{hardware.cores}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>RAM:</Typography>
        </Box>
        <Box>
          <Typography>{hardware.ram}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>GPU:</Typography>
        </Box>
        <Box>
          <Typography>{hardware.gpu}</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Hardware;
