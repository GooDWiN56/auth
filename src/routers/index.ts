

import { IconAddressBook, IconBrandHipchat, IconBuildingStore, IconCalendar, IconLayoutKanban, IconMailbox } from '@tabler/icons-react'

const icons = {  IconAddressBook, IconBrandHipchat, IconBuildingStore, IconCalendar, IconLayoutKanban, IconMailbox };

export const RoutersListMenu = [{
    name: "General",
    items: [
        {
            icon: icons.IconBuildingStore,
            path: "/",
            text: "Products"
        },
        {
            icon: icons.IconCalendar,
            path: "/",
            text: "Calendar"
        },
        {
            icon: icons.IconLayoutKanban,
            path: "/",
            text: "Task board"
        }
    ]
},
{
    name: "Communication",
    items: [
        {
            icon: icons.IconAddressBook,
            path: "/",
            text: "Contacts"
        },
        {
            icon: icons.IconMailbox,
            path: "/",
            text: "Email"
        },
        {
            icon: icons.IconBrandHipchat,
            path: "/",
            text: "Chat"
        }
    ]
}]