
import { HomeIcon, HeartIcon, MoonIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

const categories = [
    {id : "all" , name: "All"},
    {id : "beverages" , name: "Beverages"},
    {id : "snacks" , name: "Snacks"},
    {id : "dairy" , name: "Dairy"},
    
];

const navLinks = [
    {id : "home" , name: "Home", link: "/home", icon: HomeIcon},
    {id : "food" , name: "Food", link: "/food", icon : HeartIcon},
    {id : "sleep" , name: "Sleep", link: "/sleep", icon: MoonIcon},
    {id : "inbox" , name: "Inbox", link: "/inbox", icon: EnvelopeClosedIcon},
]

export {categories, navLinks}


