// Drawer at top for profile, add subscription, dark mode
import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  Person as PersonIcon,
  Dashboard as DashboardIcon,
  Add as AddIcon } from "@material-ui/icons";

const SettingDrawer = (props) => {
  const history = useHistory();
  const settingsList = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      onClick: () => history.push("/"),
    },
    {
      name: "Subscription",
      icon: <AddIcon />,
      onClick: () => history.push("/form"),
    },
    {
      name: "Members List",
      icon: <PersonIcon />,
      onClick: () => history.push("/membersList"),
    },
  ];

  return (
    <List>
      {settingsList.map((item, index) => {
        const { name, icon, onClick } = item;
        return (
          <ListItem button key={index} onClick={onClick}>
            <ListItemIcon>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default withRouter(SettingDrawer);
