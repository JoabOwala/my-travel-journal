import React from "react";
import earthLogo from "../images/World-logo.png"

export default function Header(){
    return(
        <header className="header">
            <img src={earthLogo} alt="header logo" className="header--image"/>
            <h3 className="header--title">my travel journal.</h3>
        </header>
        )
}