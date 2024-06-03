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
      <Typography>User Agent: {session.userAgent}</Typography>
      <Typography>
        First Visit Time:{" "}
        {new Date(session.firstVisitTime || "").toLocaleString()}
      </Typography>
      <Typography>
        Last Visit Time:{" "}
        {new Date(session.lastVisitTime || "").toLocaleString()}
      </Typography>
      <Typography>Visit Count: {session.visitCount}</Typography>
    </Box>
  );
}

export default Session;
