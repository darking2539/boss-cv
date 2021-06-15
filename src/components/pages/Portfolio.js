import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper_center: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  paper_left: {
    padding: theme.spacing(1.5),
    textAlign: "justify",
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    margin: "auto",
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <h1>Project</h1> 
      <Grid container justify="center" spacing="2">
        <Grid item xs={12}>
          <Paper className={classes.paper_left}>
            <b>Smart Home with HomeAssistant (2021)</b> <br />
            Home Assistant is an open-source platform for build smart homes. 
            This project is implement smart home devices to this platform.
            Infrastructure use Cloud and Rasberry Pi for a run this platform shown on below photos.  <br/><br/>   

            <a href = {`${process.env.PUBLIC_URL}/details/homeassistant.jpg`}>Photos Link</a>  <br/>         
          </Paper>
        </Grid>
      </Grid>
      
      <Grid container justify="center" spacing="2">
        <Grid item xs={12}>
          <Paper className={classes.paper_left}>
            <b>Data Analytics for training records (2021)</b> <br />
            This project analyzes training courses for report and improving the
            training carrier path in the organization. Tools of this project
            using google sheets for analysis data and create dashboard using
            Google Data Studio. Result shown on below. <br/><br/>

            <a href="https://datastudio.google.com/reporting/78fd8306-52cc-4462-9780-a64fe7e3355f">Dashboard Link</a>  <br/>
          </Paper>
        </Grid>
      </Grid>

      <Grid container justify="center" spacing="2">
        <Grid item xs={12}>
          <Paper className={classes.paper_left}>
            <b>Website with AdminLTE theme (2020)</b> <br />
            This website is a daily note editor and fetches data from open API,
            such as COVID-19, Spotify. The technology used in this project is
            express.js and MongoDB for backend, React.js with AdminLTE theme
            (Bootstrap Admin Dashboard Template) for frontend. <br/><br/>
            
            <a href="https://abosszz-app.herokuapp.com/">Website Link</a>  
            
          </Paper>
        </Grid>
      </Grid>

      <Grid container justify="center" spacing="2">
        <Grid item xs={12}>
          <Paper className={classes.paper_left}>
            <b>Smart Post Solution (2020)</b> <br/>
            This project is commercial for Thaipost Thailand. Build red post box for 
            IoT Box using LoRaWAN protocol which provides by CAT Telecom. This project divided two parts.
            First, hardware for post box. Second, software platform for show result. Result shown on below. <br/><br/>            
            <a href="https://youtu.be/js-Gsy4u6oY">Youtube Link</a>  <br/>
          </Paper>
        </Grid>
      </Grid>

      <Grid container justify="center" spacing="2">
        <Grid item xs={12}>
          <Paper className={classes.paper_left}>
            <b>Development Software for Inverters (2019)</b> <br />
            <b> (Electrical Senior Project) </b><br />
            This project presents software development of a Modulation Algorithm procedure
            for Three-Level Inverters on FPGA board with Zynq Processor. In order to develop the
            software, the first is building Programable logic by using block diagram of MATLAB and
            Vivado programs then controlling Programable logic by processor using C programing on
            Xilinx SDK program. This project is developed on Xilinx Cora Z7 board cooperated with
            three level back-to-back (3L-BTB) converter. The result is the Pulse Width Modulation (PWM)
            signal for control inverter circuit in 3L-BTB converter.

          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
