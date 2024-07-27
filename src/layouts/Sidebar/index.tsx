import React, { FC } from "react";
import { styled, Theme, CSSObject, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { DrawerHeader } from "../DrawerHeader";
import { IListMenu, ISidebar } from "interfaces";
import ListMenu from "./ListMenu";
import { RoutersListMenu } from "routers";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar: FC<ISidebar> = ({ openMenu, handleCloseMenu }) => {
  const theme = useTheme();
  return (
    <Drawer variant="permanent" open={openMenu}>
      <DrawerHeader>
        <IconButton onClick={handleCloseMenu}>
          {theme.direction === "rtl" ? <></> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      {RoutersListMenu.map((item: IListMenu, index: number) => (
        <ListMenu
          key={index}
          openMenu={openMenu}
          name={item.name}
          items={item.items}
        />
      ))}
    </Drawer>
  );
};

export default Sidebar;
