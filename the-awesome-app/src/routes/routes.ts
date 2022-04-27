import React from 'react';
import GadgetStore from "../components/GadgetStore"
import Hello from "../components/Hello"
import Search from "../components/Search"
import TypedCounter from "../components/TypedCounter"
import ViewCart from "../components/ViewCart"
import HomeIcon from '@mui/icons-material/Home';
import TimerIcon from '@mui/icons-material/Timer';
import CategoryIcon from '@mui/icons-material/Category';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

//static import
    //import ListProducts from "../components/ListProducts"
//dynamic import(for code splitting)
const  ListProducts = React.lazy(() => import("../components/ListProducts"));

export interface AppRoute{

    id: number, //unique
    title: string,
    path: string,
    component: any,
    secure: boolean,
    menu:boolean,
    icon?: any
}

export const AppRoutes: Array<AppRoute> = [

    {
        id: 1,
        title: "Home",
        path: "/home",
        component: Hello,
        secure: false,
        menu: true,
        icon: HomeIcon
    },
    {
        id: 2,
        title: "Counter",
        path: "/counter",
        component: TypedCounter,
        secure: false,
        menu: true,
        icon: TimerIcon
    },
    {
        id: 3,
        title: "Products",
        path: "/products",
        component: ListProducts,
        secure: true,
        menu: true,
        icon: CategoryIcon
    },
    {
        id: 4,
        title: "Gadgets",
        path: "/gadgets",
        component: GadgetStore,
        secure: false,
        menu: true,
        icon: DevicesOtherIcon
    },
    {
        id: 5,
        title: "View Cart",
        path: "/viewcart",
        component: ViewCart,
        secure: false,
        menu: true,
        icon: ShoppingCartIcon

    },
    {
        id: 6,
        title: "Search",
        path: "/search",
        component: Search,
        secure: true,
        menu: true,
        icon: SearchIcon
    }
] 