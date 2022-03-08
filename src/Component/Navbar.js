import React from "react"
//import img1 from "./images/react-icon-small.png"
export default function Navbar() {
    return (
        <nav>
        <img src="../images/react-icon-small.png" alt="icon pic" className="nav--icon"/>
        <h3 className="nav--logo_text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
    )
}