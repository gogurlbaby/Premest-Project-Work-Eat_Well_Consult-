import React from "react";
import {FaSignOutAlt} from "react-icons/fa";
import {AiFillHome} from "react-icons/ai";
import {IoMdFitness} from "react-icons/io";
import {IoMdSettings} from "react-icons/io";
import {RiHealthBookFill} from "react-icons/ri";
import {CgProfile} from "react-icons/cg";



export const SidebarData = [
    {
        title: "Home",
        path: "/home",
        icon: <AiFillHome/>,
        cName: "nav-text"
    },
    { 
        title: "Consultation With Dietitian",
        path: "/consultationwithdietitian",
        icon: <RiHealthBookFill/>,
        cName: "nav-text"
    },
    {
        title: "Fitness Exercises",
        path: "/fitnessexercises",
        icon: <IoMdFitness/>,
        cName: "nav-text"
    },
    {
        title: "Profile",
        path: "/profile",
        icon: <CgProfile/>,
        cName: "nav-text"
    },
    {
        title: "Settings",
        path: "/settings",
        icon: <IoMdSettings/>,
        cName: "nav-text"
    },
    {
        title: "Sign Out",
        path: "/signout",
        icon: <FaSignOutAlt/>,
        cName: "nav-text"
    },
]