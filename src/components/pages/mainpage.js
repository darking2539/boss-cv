import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from "@material-ui/icons/Email";
import Divider from "@material-ui/core/Divider";
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper_center: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
  paper_left: {
    padding: theme.spacing(1),
    textAlign: "left",
  },
  paper_just: {
    padding: theme.spacing(2),
    textAlign: "justify",
  },
  paper_right: {
    padding: theme.spacing(1),
    textAlign: "right",
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    margin: 'auto',
  },
}));

export default function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing="2">
        <Grid item xs={12}>
          <Paper className={classes.paper_center}>
            This website is CV of Suphadet (Boss). Click my name on top of website to see more detail.
          </Paper>
        </Grid>
      </Grid>

      <Grid container justify="left" spacing="2">
        <Grid item xs={12}>
          <Paper className={classes.paper_center}>
            <Avatar
              className={classes.large}
              alt="Suphadet"
              src={`${process.env.PUBLIC_URL}/images/boss.jpg`} />
            <br/>
            <Divider/>
            <Grid container >
              <Grid item xs={3} className={classes.paper_right}>
                <EmailIcon/>
              </Grid>
              <Grid item xs={8} className={classes.paper_left}>
                suphadet.b@gmail.com
              </Grid>
            </Grid>
     
            <Grid container>
              <Grid item xs={3} className={classes.paper_right}>
                <HomeIcon/>
              </Grid>
              <Grid item xs={8} className={classes.paper_left}>
              7/45 Ratchadapisek19, Bangkokyai, Bangkok, Thailand, 10600
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={3}  className={classes.paper_right}>
                <PhoneIcon/>
              </Grid>
              <Grid item xs={8} className={classes.paper_left}>
              +66972246931
              </Grid>
            </Grid>
            <Divider/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper_just}>
          My name is Supadet Vatjanajaroenrat. I graduated  in an Electrical Engineering bachelor degree 
          from Chulalongkorn Unversity, Thailand and started learning Stack developer based on website and mobile application. 
          I also interested in the new technology, IoT system, robots in manufacturing , and etc. 
          I know that my works are just a small parts but I am sure these are the new trends to make our live better.
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
