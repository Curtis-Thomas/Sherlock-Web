import { Box, Grid, Typography } from "@mui/material";
import Device from "./UserInfo/Device";
import OperatingSystem from "./UserInfo/Operatingsystem";
import Network from "./UserInfo/Network";
import BrowserCapabilities from "./UserInfo/BrowserCapabilities";
// import Referrer from "./UserInfo/Referrer";
import Locale from "./UserInfo/Locale";
import Hardware from "./UserInfo/Hardware";
import Storage from "./UserInfo/Storage";

function App() {
  return (
    <Box
      sx={{
        color: "#ACFCD9",
        backgroundColor: "#1B2021",
        minHeight: "100vh",
        pl: { xs: "10vw", md: "30vw" },
        pr: { xs: "10vw", md: "30vw" },
        pb: 5,
      }}
    >
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
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "3rem" } }}
          color={"#75A4FF"}
        >
          Sherlock Web
        </Typography>
      </Box>
      <Box sx={{ pb: 5 }}>
        <Box sx={{ pt: 1, pb: 1 }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            A simple web application that provides information about the user's
            device, operating system, network, browser capabilities, locale,
            hardware, and session.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} sx={{ border: "dashed 1px #75A4FF", p: 1 }}>
            <Device />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ border: "dashed 1px #75A4FF", p: 1 }}>
            <OperatingSystem />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{ border: "dashed 1px #75A4FF", p: 1 }}
          >
            <BrowserCapabilities />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ border: "dashed 1px #75A4FF", p: 1 }}>
            <Network />
          </Grid>

          {/* <Grid item xs={12} sm={6} >
            <Referrer />
          </Grid> */}
          <Grid item xs={12} sm={6} sx={{ border: "dashed 1px #75A4FF", p: 1 }}>
            <Locale />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{ border: "dashed 1px #75A4FF", p: 1 }}
          >
            <Storage />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ border: "dashed 1px #75A4FF", p: 1 }}>
            <Hardware />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
