import { FC } from "react";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";

import { IItemMenu, IListMenu } from "interfaces";
import { Typography } from "@mui/material";
import ItemMenu from "./ItemMenu";

const ListMenu: FC<IListMenu> = ({ openMenu, name, items }) => {
  return (
    <>
      <List>
        <Typography variant="h6" sx={{ px: 2 }}>
          {openMenu && name}
        </Typography>
        {items.map((item: IItemMenu, index: number) => (
          <ItemMenu
            key={index}
            openMenu={openMenu}
            icon={item.icon}
            path={item.path}
            text={item.text}
          />
        ))}
      </List>
      <Divider />
    </>
  );
};

export default ListMenu;
