import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabletop from 'tabletop';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
    textAlign: "justify",
  },
}));

const tileData = [
  {
    img: `${process.env.PUBLIC_URL}/images_pdf/DAB.jpg`,
    title: "Data Analytics Bootcamp",
    author: "author",
  },
  {
    img: `${process.env.PUBLIC_URL}/images_pdf/Reactjs.jpg`,
    title: "React.JS",
    author: "author",
  },
  {
    img: `${process.env.PUBLIC_URL}/images_pdf/certificate_dashboard-design-principles-1.jpg`,
    title: "Dashboard Design Priniples",
    author: "author",
  },
  {
    img: `${process.env.PUBLIC_URL}/images_pdf/certificate_data-science-1.jpg`,
    title: "Intro to Data science",
    author: "author",
  },
  {
    img: `${process.env.PUBLIC_URL}/images_pdf/certificate_eda-google-sheets-1.jpg`,
    title: "Google Sheets",
    author: "author",
  },
  {
    img: `${process.env.PUBLIC_URL}/images_pdf/certificate_sql-data-analytics-1.jpg`,
    title: "SQL for Data Analytics",
    author: "author",
  },
  {
    img: `${process.env.PUBLIC_URL}/images_pdf/IntermidiateSQL-1.jpg`,
    title: "Intermidiate SQL Server",
    author: "author",
  },
  {
    img: `${process.env.PUBLIC_URL}/images_pdf/IntroSQL2-1.jpg`,
    title: "Intro to SQL",
    author: "author",
  },
  {
    img: `${process.env.PUBLIC_URL}/images_pdf/IntrotoSQL-1.jpg`,
    title: "Intro to SQL",
    author: "author",
  },
  {
    img: `${process.env.PUBLIC_URL}/images_pdf/IoTforGoogleCloud-1.jpg`,
    title: "IoT for Google Cloud",
    author: "author",
  },
  {
    img: `${process.env.PUBLIC_URL}/images_pdf/MLforGoogleCloud-1.jpg`,
    title: "Machine Learning for Google Cloud",
    author: "author",
  },
];

export default function Skills() {
  const classes = useStyles();
  const [skillArray, setSkillArray] = useState([]);
  const [cerArray, setCerArray] = useState([]);
  const [microcontroller, setmicrocontroller] = useState("");
  const [webstack, setWebstack] = useState("");
  const [other, setOther] = useState("");
  const [program, setprogram] = useState("");
  const [deployment, setdeployment] = useState("");


  useEffect(() => {
    
    Tabletop.init({
      key: '1lxxC3-QWbV4c5H5a3irB6XTrW93lwA5-n9Qjp6DN8AE',
      callback: googleData => {
        setCerArray(googleData);
        console.log('cer --->', googleData)
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
        console.log('skill --->', googleData)
        console.log('microcontroller --->', microcontroller)
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
            <GridList className={classes.gridList} cols={1.25}>
              {cerArray.map((tile) => (
                <GridListTile key={tile.img}>
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
    </div>
  );
}
