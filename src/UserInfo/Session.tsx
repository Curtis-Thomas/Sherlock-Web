import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";

function Session() {
  const [session, setSession] = useState({
    userAgent: "",
    firstVisitTime: "",
    lastVisitTime: "",
    visitCount: 0,
  });

  const getSessionInfo = () => {
    const userAgent = navigator.userAgent;

    let firstVisitTime = localStorage.getItem("firstVisitTime");
    let lastVisitTime = localStorage.getItem("lastVisitTime");
    let visitCount = parseInt(localStorage.getItem("visitCount") || "0");

    if (!firstVisitTime) {
      firstVisitTime = new Date().toISOString();
    }
    lastVisitTime = new Date().toISOString();
    visitCount = visitCount + 1;

    localStorage.setItem("firstVisitTime", firstVisitTime);
    localStorage.setItem("lastVisitTime", lastVisitTime);
    localStorage.setItem("visitCount", visitCount.toString());

    return { userAgent, firstVisitTime, lastVisitTime, visitCount };
  };

  useEffect(() => {
    const sessionInfo = getSessionInfo();
    setSession(sessionInfo);
  }, []);

  return (
    <Box>
      <Typography
        textAlign={"center"}
        sx={{ pb: 2 }}
        variant="h5"
        color={"#75A4FF"}
      >
        Session
      </Typography>
      <Typography sx={{ pb: 1 }}>User Agent: {session.userAgent}</Typography>
      <Typography sx={{ pb: 1 }}>
        First Visit Time:{" "}
        {new Date(session.firstVisitTime || "").toLocaleString()}
      </Typography>
      <Typography sx={{ pb: 1 }}>
        Last Visit Time:{" "}
        {new Date(session.lastVisitTime || "").toLocaleString()}
      </Typography>
      <Typography sx={{ pb: 1 }}>Visit Count: {session.visitCount}</Typography>
    </Box>
  );
}

export default Session;
