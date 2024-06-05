import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";

declare global {
  interface Navigator {
    connection: NetworkInformation;
  }
}

interface NetworkInformation {
  effectiveType: string;
  downlink: number;
  rtt: number;
  saveData: boolean;
}

function Network() {
  const [network, setNetwork] = useState({
    effectiveType: "",
    downlink: 0,
    rtt: 0,
    saveData: false,
  });

  const getNetworkInfo = () => {
    const connection = navigator.connection;
    const effectiveType = connection.effectiveType;
    const downlink = connection.downlink;
    const rtt = connection.rtt;
    const saveData = connection.saveData;
    return { effectiveType, downlink, rtt, saveData };
  };

  useEffect(() => {
    const networkInfo = getNetworkInfo();
    setNetwork(networkInfo);
  }, []);

  return (
    <Box>
      <Typography
        textAlign={"center"}
        sx={{ pb: 2 }}
        variant="h5"
        color={"#75A4FF"}
      >
        Network
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Network Type:
          </Typography>
        </Box>
        <Box>
          <Typography>{network.effectiveType}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Downlink Speed:
          </Typography>
        </Box>
        <Box>
          <Typography>{network.downlink} Mbps</Typography>
        </Box>
      </Box>{" "}
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Round-Trip Time:
          </Typography>
        </Box>
        <Box>
          <Typography>{network.rtt} ms</Typography>
        </Box>
      </Box>{" "}
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography sx={{ pb: 1, pr: 1, color: " #75A4FF" }}>
            Data Saver Mode:
          </Typography>
        </Box>
        <Box>
          <Typography>{network.saveData ? "Enabled" : "Disabled"}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Network;
