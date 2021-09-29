import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import WorkIcon from '@material-ui/icons/Work';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

export default function SwipeableTemporaryDrawer() {
  const history = useHistory();
  const [state, setState] = React.useState({ top: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <AppBar position="static" style={{ background: '#2E3B55' }} onClick={toggleDrawer("top", true)}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("top", true)}
          >
            <Avatar alt="Suphadet" src={`${process.env.PUBLIC_URL}/images/boss.jpg`} />
          </IconButton>
          <Grid container justify="flex-start">
            <Typography variant="h6" >
              Suphadet Vatjanajaroenrat
            </Typography>
          </Grid>

            <MenuIcon style={{ fill: '#FFFFFF' }} />

        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        anchor="top"
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
      >
        <div
          onClick={toggleDrawer("top", false)}
          onKeyDown={toggleDrawer("top", false)}
        >
          <List style={{ background: '#0072A0' }}>

            <ListItem button key="Main" onClick={() => history.push('/main')} >
              <ListItemIcon>
                <HomeIcon style={{ fill: '#FFFFFF' }} />
              </ListItemIcon>
              <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Home</Typography>} />
            </ListItem>

            <ListItem button key="Education" onClick={() => history.push('/education')} >
              <ListItemIcon>
                <WorkIcon style={{ fill: '#FFFFFF' }} />
              </ListItemIcon>
              <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Education & Work Experience</Typography>} />
            </ListItem>

            <ListItem button key="Portfoldio" onClick={() => history.push('/portfolio')}>
              <ListItemIcon>
                <ImportContactsIcon style={{ fill: '#FFFFFF' }} />
              </ListItemIcon>
              <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Project & Workshop</Typography>} />
            </ListItem>

            <ListItem button key="skills" onClick={() => history.push('/skills')} >
              <ListItemIcon>
                <CardMembershipIcon style={{ fill: '#FFFFFF' }} />
              </ListItemIcon>
              <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Skills & Certificates</Typography>} />
            </ListItem>

            <ListItem button key="Socialmedia" onClick={() => history.push('/social')}>
              <ListItemIcon>
                <GroupIcon style={{ fill: '#FFFFFF' }} />
              </ListItemIcon>
              <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Social Media</Typography>} />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
