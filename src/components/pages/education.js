import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper_center: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
  },
  paper_left: {
    padding: theme.spacing(2),
    textAlign: "justify",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: "auto",
  },
}));

export default function Education() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing="2">
        <Grid item xs={12}>
          <Paper className={classes.paper_center}>
            <b >Education</b>
            <br />
            <Divider />
            <br />
            <Grid container>
              <Grid item xs={6}>
                <img
                  className={classes.large}
                  alt="School"
                  src= {`${process.env.PUBLIC_URL}/images/taweethapisek.png`}/>
                <br />
                Taweethapisek School <br/>
                (High School)
              </Grid>
              <Grid item xs={6}>
                <br />
                Math & Science
                <br />
                2010 - 2016
                <br />
                GPAX: 3.92
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container>
              <Grid item xs={6}>
                <img
                  width="160"
                  alt="Suphadet"
                  src= {`${process.env.PUBLIC_URL}/images/chula.png`}  />
                <br />
                Chulalongkorn University <br/> 
                (Bachelor's Degree)
              </Grid>
              <Grid item xs={6}>
                <br />
                Department of Electrical Engineering
                <br />
                Faculty of Engineering
                <br />
                2016 - 2019
                <br />
                GPAX: 3.06
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper_center}>
            <b>Work Experiences</b>
            <br />
            <Divider />
            <br />
            <Grid container>
              <Grid item xs={12}>
                <img
                  width="180"
                  alt="School"
                  src={`${process.env.PUBLIC_URL}/images/tkc.png`}/>
                <br />
                <b>Turnkey Communication Sevices Co.,Ltd</b>
                <br />
                (System Integrator for telecommunication) 
                <br/>
                <b>JULY 2019 – PRESENT</b>
              </Grid>
              <Grid item xs={12}>
              <br/>  <b>Research & Development Engineer</b> <br/>        
                  <ListItemText primary="- Researched IoT solutions"/>
                  <ListItemText primary="- Researched IoT platform Hardware/ Software"/>
                  <ListItemText primary="- Frontend/ Backend for IoT Platform"/>
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container>
              <Grid item xs={12}>
                <img
                  width="180"
                  alt="Suphadet"
                  src={`${process.env.PUBLIC_URL}/images/hg2.png`}
                />
                <br />
                <b>HiveGround Co., Ltd</b>
                <br />
                (Robotics and automation system company)
                <br/>
                <b>MAY 2018 – AUG 2018</b>
              </Grid>
              <Grid item xs={12}>
              <br/> <b>Research & Development Engineer (Internship)</b> <br/>   
              <ListItemText primary="- Designed Schematic and Routing PCB circuit"/>
                  <ListItemText primary="- Designed 3D models for 3D printing"/>
                  <ListItemText primary="- Created prototype using in drone"/>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
