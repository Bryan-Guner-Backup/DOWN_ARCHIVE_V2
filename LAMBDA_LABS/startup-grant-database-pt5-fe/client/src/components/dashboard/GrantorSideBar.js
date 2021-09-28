import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import ProfileBox from "./ProfileBox";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: 1,
    marginTop: "15vh",
    height: "85vh",
    border: "none",
    backgroundColor: "#c0f0f7"
  },
  toolbar: theme.mixins.toolbar,
  listitems: {
    zIndex: 2
  }
}));

const pages = [
  {
    title: "Dashboard",
    href: "/grantordashboard",
    icon: <DashboardIcon />
  },
  {
    title: "Grants and Applicants",
    href: "/grants",
    icon: <FolderSpecialIcon />
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <SettingsIcon />
  }
];

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const SideBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <ProfileBox />
        <div className={classes.toolbar} />
        <List>
          {pages.map(page => (
            <ListItemLink
              button
              classes={classes.listitems}
              key={page.title}
              href={page.href}
            >
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.title} />
            </ListItemLink>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
