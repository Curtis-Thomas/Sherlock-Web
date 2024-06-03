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
      <Typography>Network Type: {network.effectiveType}</Typography>
      <Typography>Downlink Speed: {network.downlink} Mbps</Typography>
      <Typography>Round-Trip Time: {network.rtt} ms</Typography>
      <Typography>
        Data Saver Mode: {network.saveData ? "Enabled" : "Disabled"}
      </Typography>
    </Box>
  );
}

export default Network;
