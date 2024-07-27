import { FC } from "react";
import Header from "./Header";

import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";

import React from "react";
import { useAuth } from "hooks/use-auth";
import { IChildren } from "interfaces";
import { DrawerHeader } from "./DrawerHeader";
import Sidebar from "./Sidebar";

const MainLayout: FC<IChildren> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { email, photoURL } = useAuth();
  const photo = photoURL || "";
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header openMenu={open} handleOpenMenu={handleOpen} user={photo} />
      <Sidebar openMenu={open} handleCloseMenu={handleClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
