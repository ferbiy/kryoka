import * as React from "react";
import {Link} from "react-router-dom";
import {Color} from "../pages/Main";

interface FooterProps {
    colors: Color
}

export default function Footer(props: FooterProps) {
    const interfaceColor = {color: props.colors.interface},
        backgroundColor = {backgroundColor: props.colors.background};

    return (
        <footer style={backgroundColor}>
            <div className='footer-wrapper'>
                <div className='footer-name' style={interfaceColor}>Kryoka Kostyantyn</div>
                <div className='footer-buttons'>
                    <div><Link to="/contact" style={interfaceColor}>Contacts</Link></div>
                    <div><a href="#" style={interfaceColor}>Instagram</a></div>
                    <div><a href="#" style={interfaceColor}>Behance</a></div>
                </div>
            </div>
        </footer>
    )
}