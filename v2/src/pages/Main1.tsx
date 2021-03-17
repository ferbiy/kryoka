import * as React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ReactSlidy from 'react-slidy';

interface ImageObject {
    src: string,
    color: Color
}

interface Color {
    interface: string,
    background: string
}

export default function Main() {
    const images: ImageObject[] = [
        {src: './images/01.jpg', color: {interface: '', background: ''}},
        {src: './images/02.jpg', color: {interface: '', background: ''}},
        {src: './images/03.jpg', color: {interface: '', background: ''}},
        {src: './images/04.jpg', color: {interface: '', background: ''}}
    ];

    const colors: Color = {
        interface: 'white',
        background: 'black'
    };

    const backgroundColor = 'white',
        interfaceColor = 'black';

    return (
        <div className="main-wrapper">
            <Header color={interfaceColor}/>
            <main>
                {/*todo change arrows*/}
                <ReactSlidy imageObjectFit="contain" itemsToPreload={2} showArrows={true}>
                    {images.map((image, i) => <img src={image.src} key={`Photograph #${i}`}/>)}
                </ReactSlidy>
            </main>
            <Footer color={interfaceColor}/>
        </div>
    );
}