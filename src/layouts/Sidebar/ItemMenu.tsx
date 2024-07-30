import { FC } from "react";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IItemMenu } from "interfaces";
import { NavLink } from "react-router-dom";
import { IconSitemap } from "@tabler/icons-react";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const ItemMenu: FC<IItemMenu> = ({ openMenu, icon, path, text }) => {
  const Icon = icon;
  const itemIcon = icon ? (
    <Icon stroke={2} size="1.3rem" />
  ) : (
    <IconSitemap stroke={2} size="1.3rem" />
  );
  return (
    <NavLink to={path} style={{ color: "inherit", textDecoration: "none" }}>
      <LightTooltip title={!openMenu && text} placement="right">
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
              {itemIcon}
            </ListItemIcon>
            <ListItemText primary={text} sx={{ opacity: openMenu ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </LightTooltip>
    </NavLink>
  );
};

export default ItemMenu;
