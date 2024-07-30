import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import { IHeader } from "interfaces";
import Profile from "./Profile";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header: React.FC<IHeader> = ({ openMenu, handleOpenMenu, user }) => {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      open={openMenu}
      sx={{ px: 2, bgcolor: theme.palette.grey[100] }}
    >
      <Toolbar disableGutters>
        <Tooltip arrow title="Menu">
          <IconButton
            size="large"
            sx={{
              mr: 0,
              ...(openMenu && { display: "none" }),
            }}
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
        <NavLink to="/">
          <img src="./logo.png" />
        </NavLink>
        <Profile user={user} />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
