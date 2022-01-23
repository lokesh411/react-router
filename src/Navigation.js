import React from "react";
import { NavLink } from 'react-router-dom'

const routesList = [
    {
        path: "/",
        title: "Home"
    },
    {
        path: "/feed",
        title: "Feed"
    },
    {
        path: "/profile",
        title: "Profile"
    },
    {
        path: "/login",
        title: "Login"
    }
]

const Navigation = () => {
    return (
        <nav style={{ margin: 10 }}>
            {
                routesList.map(item => (
                    <NavLink style={({ isActive }) => {
                        return {
                            margin: 10,
                            padding: 10,
                            color: isActive ? "red" : "blue"
                        }
                    }} to={item.path}>{item.title}</NavLink>
                ))
            }
        </nav>
    )
}

export default Navigation;