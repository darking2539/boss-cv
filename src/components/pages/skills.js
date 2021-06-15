import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia } from '@material-ui/core';
import Tabletop from 'tabletop';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  title: {
    color: "#FFFFFF",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  paper_center: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  paper_left: {
    padding: theme.spacing(2),
    textAlign: "left",
  },
  Media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
  },
  dialogPaper: {
    minHeight: '80vh',
    maxHeight: '80vh',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));



export default function Skills() {
  const classes = useStyles();
  const [skillArray, setSkillArray] = useState([]);
  const [cerArray, setCerArray] = useState([]);
  const [microcontroller, setmicrocontroller] = useState("");
  const [webstack, setWebstack] = useState("");
  const [other, setOther] = useState("");
  const [program, setprogram] = useState("");
  const [deployment, setdeployment] = useState("");
  const [open, setOpen] = React.useState(false);
  const [popupImages, setpopupImages] = useState("");
  const [popupTitles, setpopupTitles] = useState("");

  const handleClickOpen = (title, img) => {
    setpopupImages(img);
    setpopupTitles(title);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {

    Tabletop.init({
      key: '1lxxC3-QWbV4c5H5a3irB6XTrW93lwA5-n9Qjp6DN8AE',
      callback: googleData => {
        setCerArray(googleData);
      },
      simpleSheet: true
    })

    Tabletop.init({
      key: '1wHBsxdgHXpnF8SdUlhZJU1qnE7eZW_fNu3APCIsrmC8',
      callback: googleData => {
        setSkillArray(googleData);
        setmicrocontroller(googleData[0].Microcontroller)
        setWebstack(googleData[0].WebStack)
        setOther(googleData[0].Others)
        setprogram(googleData[0].BasicPrograms)
        setdeployment(googleData[0].deployment)
      },
      simpleSheet: true
    })


  }, []);

  return (
    <div className={classes.root}>
      <h1>Skills & Certificates</h1>
      <Grid container justify="center" spacing="2">
        <Grid item xs={12}>
          <Paper className={classes.paper_left}>
            <u>
              <b>Programming Skills</b>
            </u>
            <p>
              <b>Microcontroller:</b> {microcontroller}
            </p>
            <p>
              <b>WebStack:</b> {webstack}
            </p>
            <p>
              <b>Deployment:</b> {deployment}
            </p>
            <p>
              <b>Others:</b> {other}
            </p>
            <br />
            <u>
              <b>Basic Programs</b>
            </u>
            <p>
              {program}
            </p>
            <br />
          </Paper>
        </Grid>
      </Grid>

      <Grid container justify="center" spacing="2">
        <Grid item xs={12}>
          <Paper className={classes.paper_left}>
            <h2>Certificates</h2>
            <GridList  className={classes.gridList} cols={1.25}>
              {cerArray.map((tile) => (
                <GridListTile key={tile.img} onClick={() => handleClickOpen(tile.title, tile.img)}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                  />
                </GridListTile>
              ))}
            </GridList>
          </Paper>
        </Grid>
      </Grid>

      <Dialog
        fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{popupTitles}
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">

            <CardMedia
              className={classes.Media}
              image={popupImages}
              title="a pomodoro tomatoe timer in material design"
            />

          </DialogContentText>
        </DialogContent>

      </Dialog>

    </div>
  );
}
