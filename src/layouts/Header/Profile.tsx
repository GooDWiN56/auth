import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  IconLogout,
  IconSettings,
  IconUser,
  IconUserCircle,
} from "@tabler/icons-react";
import { useAppDispatch } from "hooks/redux-hooks";
import { IProfile } from "interfaces";
import React, { FC } from "react";
import { removeUser } from "store/slices/userSlice";

const Profile: FC<IProfile> = ({ user }) => {
  const dispatch = useAppDispatch();

  const settings = [
    {
      name: "Profile",
      icon: <IconUserCircle />,
      click: () => console.log("Profile"),
    },
    {
      name: "Settings",
      icon: <IconSettings />,
      click: () => console.log("Settings"),
    },
    {
      name: "Logout",
      icon: <IconLogout />,
      click: () => dispatch(removeUser()),
    },
  ];

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0, ml: "auto" }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar src={user}>
            <IconUser />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting, key) => (
          <MenuItem key={key} onClick={setting.click}>
            <ListItemIcon
              sx={{ minWidth: "24px !important", "& svg": { width: "18px" } }}
            >
              {setting.icon}
            </ListItemIcon>
            <Typography variant="body2">{setting.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Profile;
