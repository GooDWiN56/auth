import { FC } from "react";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IItemMenu } from "interfaces";
import { NavLink } from "react-router-dom";

const ItemMenu: FC<IItemMenu> = ({ openMenu, icon, path, text }) => {
  console.log(icon);
  return (
    <NavLink to={path}>
      <ListItem key={text} disablePadding sx={{ display: "block" }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: openMenu ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: openMenu ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <i className={icon}></i>
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: openMenu ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    </NavLink>
  );
};

export default ItemMenu;
