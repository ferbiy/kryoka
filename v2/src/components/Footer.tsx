import * as React from "react";
import {Link} from "react-router-dom";

interface FooterProps {
    color: string
}

export default function Footer(props: FooterProps) {
    const color = {color: props.color}

    return (
        <footer>
            <div className='footer-wrapper'>
                <div className='footer-name' style={color}>Kryoka Kostyantyn</div>
                <div className='footer-buttons'>
                    <Link to="/contact" style={color}>Contacts</Link>
                    <a href="#" style={color}>Instagram</a>
                    <a href="#" style={color}>Behance</a>
                </div>
            </div>
        </footer>
    )
}