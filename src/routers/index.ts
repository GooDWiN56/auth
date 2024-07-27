import React from 'react'

import { IconAddressBook, IconBrandHipchat, IconBuildingStore, IconCalendar, IconLayoutKanban, IconMailbox } from '@tabler/icons-react'


export const RoutersListMenu = [{
    name: "General",
    items: [
        {
            icon: IconBuildingStore,
            path: "/",
            text: "Products"
        },
        {
            icon: IconCalendar,
            path: "/",
            text: "Calendar"
        },
        {
            icon: IconLayoutKanban,
            path: "/",
            text: "Task board"
        }
    ]
},
{
    name: "Communication",
    items: [
        {
            icon: IconAddressBook,
            path: "/",
            text: "Contacts"
        },
        {
            icon: IconMailbox,
            path: "/",
            text: "Email"
        },
        {
            icon: IconBrandHipchat,
            path: "/",
            text: "Chat"
        }
    ]
}]