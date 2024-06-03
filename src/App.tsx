import { Box, Grid, Typography } from "@mui/material";
import Device from "./UserInfo/Device";
import OperatingSystem from "./UserInfo/Operatingsystem";
import Network from "./UserInfo/Network";
import BrowserCapabilities from "./UserInfo/BrowserCapabilities";
// import Referrer from "./UserInfo/Referrer";
import Locale from "./UserInfo/Locale";
import Hardware from "./UserInfo/Hardware";
import Session from "./UserInfo/Session";

function App() {
  return (
    <Box sx={{ color: "white", backgroundColor: "black", minHeight: "100vh" }}>
      <Box
        sx={{
          height: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: 2,
          pb: 2,
        }}
      >
        <Typography variant="h1">Sherlock Web</Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Device />
          </Grid>
          <Grid item xs={12} sm={6}>
            <OperatingSystem />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Network />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BrowserCapabilities />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <Referrer />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <Locale />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Hardware />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Session />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
