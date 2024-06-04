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
      <Typography
        textAlign={"center"}
        sx={{ pb: 2 }}
        variant="h5"
        color={"#75A4FF"}
      >
        Referrer
      </Typography>
      <Typography sx={{ pb: 1 }}>
        Referrer URL: {referrerInfo.referrer}
      </Typography>
      <Typography sx={{ pb: 1 }}>
        Referrer Hostname: {referrerInfo.hostname}
      </Typography>
      <Typography sx={{ pb: 1 }}>
        Referrer Protocol: {referrerInfo.protocol}
      </Typography>
    </Box>
  );
}

export default Referrer;
