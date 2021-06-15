import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper_center: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  paper_left: {
    padding: theme.spacing(2),
    textAlign: "justify",
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    margin: "auto",
  },
}));

export default function Socialmedia() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <h1>My Contacts</h1>
      <Grid container justify="center" spacing="2">
        <Grid item xs={6}>
          <a
            href="mailto:suphadet.b@gmail.com"
            style={{ "text-decoration": "none" }}
          >
            <Paper className={classes.paper_center}>
              <EmailIcon /> <br />
              Email
            </Paper>
          </a>
        </Grid>
        <Grid item xs={6}>
          <a
            href="https://www.youtube.com/channel/UC1k_K8H9EOOKtU7WLRA1y0w"
            style={{ "text-decoration": "none" }}
          >
            <Paper className={classes.paper_center}>
              <YouTubeIcon /> <br />
              Youtube
            </Paper>
          </a>
        </Grid>
        <Grid item xs={6}>
          <a
            href="https://www.facebook.com/Abosszz/"
            style={{ "text-decoration": "none" }}
          >
            <Paper className={classes.paper_center}>
              <FacebookIcon /> <br />
              Facebook
            </Paper>
          </a>
        </Grid>
        <Grid item xs={6}>
          <a
            href="https://www.instagram.com/abosszz/"
            style={{ "text-decoration": "none" }}
          >
            <Paper className={classes.paper_center}>
              <InstagramIcon /> <br />
              Instagram
            </Paper>
          </a>
        </Grid>
        <Grid item xs={6}>
          <a
            href="https://www.linkedin.com/in/suphadet/"
            style={{ "text-decoration": "none" }}
          >
            <Paper className={classes.paper_center}>
              <LinkedInIcon /> <br />
              LinkedIn
            </Paper>
          </a>
        </Grid>
        <Grid item xs={6}>
          <a
            href="https://github.com/darking2539"
            style={{ "text-decoration": "none" }}
          >
            <Paper className={classes.paper_center}>
              <GitHubIcon /> <br />
              Gitgub
            </Paper>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
