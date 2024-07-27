//layout
//Header
export interface IHeader {
    openMenu: boolean
    handleOpenMenu: () => void
    user: string
}
export interface IProfile {
    user: string
}

//Sidebar
export interface ISidebar {
    openMenu: boolean
    handleCloseMenu: () => void
}
//Menu
export interface IListMenu {
    openMenu?: boolean
    name: string,
    items: IItemMenu[]
}
export interface IItemMenu {
    openMenu?: boolean;
    icon: any;
    path: string;
    text: string;
}

export interface IForm {
    button?: string;
    email?: string;
    password?: string;
    handleClick: (email: string, password: string) => void;
    title: string;
  }

export interface IChildren {
    children: React.ReactNode;
  }

