import * as React from "react";
interface HeaderProps {
    color: string
}

export default function Header(props: HeaderProps){
    const color = {color: props.color}

    return (
        <header className="header">
            <div className="header-title" style={color}>portfolio photography</div>
        </header>

    )
}