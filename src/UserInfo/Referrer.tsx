import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";

function Referrer() {
  const [referrerInfo, setReferrerInfo] = useState({
    referrer: "",
    hostname: "",
    protocol: "",
  });

  const getReferrerInfo = () => {
    const referrer = document.referrer;
    const url = new URL(referrer);
    const hostname = url.hostname;
    const protocol = url.protocol;

    return { referrer, hostname, protocol };
  };

  useEffect(() => {
    const referrerData = getReferrerInfo();
    setReferrerInfo(referrerData);
  }, []);

  return (
    <Box>
      <Typography textAlign={"center"} sx={{ pb: 1 }} variant="h5">
        Referrer
      </Typography>
      <Typography>Referrer URL: {referrerInfo.referrer}</Typography>
      <Typography>Referrer Hostname: {referrerInfo.hostname}</Typography>
      <Typography>Referrer Protocol: {referrerInfo.protocol}</Typography>
    </Box>
  );
}

export default Referrer;
