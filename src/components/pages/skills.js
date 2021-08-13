import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, StylesProvider } from '@material-ui/core';
import Tabletop from 'tabletop';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));



export default function Skills() {
  const classes = useStyles();
  const [cerArray, setCerArray] = useState([]);
  const [microcontroller, setmicrocontroller] = useState("");
  const [webstack, setWebstack] = useState("");
  const [other, setOther] = useState("");
  const [program, setprogram] = useState("");
  const [deployment, setdeployment] = useState("");
  const [open, setOpen] = React.useState(false);
  const [popupImages, setpopupImages] = useState("");
  const [popupTitles, setpopupTitles] = useState("");
  const [loading, setloading] = useState(true);

  const handleClickOpen = (title, img) => {
    setpopupImages(img);
    setpopupTitles(title);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    
    axios.get(`https://sheet.best/api/sheets/0aa84cd2-1074-4d37-8df8-fbe6565d3bb5`)
      .then(googleData => {
        console.log(googleData.data)
        setCerArray(googleData.data);
        setmicrocontroller(googleData.data[0].Microcontroller);
        setWebstack(googleData.data[0].WebStack);
        setOther(googleData.data[0].Others);
        setprogram(googleData.data[0].BasicPrograms);
        setdeployment(googleData.data[0].deployment);
        setloading(false)
      })
  }, []);




  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing="1">
        <Grid item xs={12}>
          <Paper className={classes.paper_left}>
          <h2>Skills</h2>
            <p>
              <u><b>Programming Skills</b></u>
            </p>
           
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td><b>Microcontroller</b></td>
                <td>{microcontroller}</td>
              </tr>
              <tr>
                <td><b>WebStack</b></td>
                <td>{webstack}</td>
              </tr>
              <tr>
                <td><b>Deployment</b></td>
                <td>{deployment}</td>
              </tr>
              <tr>
                <td><b>Others</b></td>
                <td>{other}</td>
              </tr>
            </tbody>
            </Table>
            <u>
              <b>Basic Programs</b>
            </u>
            <p>
              {program}
            </p>
          </Paper>
        </Grid>
      </Grid>

      <Grid container justify="center" spacing="1">
        <Grid item xs={12}>
          <Paper className={classes.paper_left}>
            <h2>Certificates</h2>
            <GridList className={classes.gridList} cols={1.25}>
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
      <Backdrop className={classes.backdrop} open={loading} >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
