import * as React from "react";
import {Color} from "../pages/Main";

interface HeaderProps {
    colors: Color
}

export default function Header(props: HeaderProps){
    const interfaceColor = {color: props.colors.interface},
    backgroundColor = {backgroundColor: props.colors.background};

    return (
        <header className="header">
            <div className="header-title" style={interfaceColor}>portfolio photography</div>
        </header>

    )
}