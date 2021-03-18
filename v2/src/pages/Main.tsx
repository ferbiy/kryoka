import * as React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ReactSlidy from 'react-slidy';
import {useState} from "react";

interface ImageObject {
    src: string,
    color: Color
}

export interface Color {
    interface: string,
    background: string
}

export default function Main() {
    const images: ImageObject[] = [
        {src: './images/01.jpg', color: {interface: '#FFFFFF', background: '#8C914F'}},
        {src: './images/02.jpg', color: {interface: '#BA55D3', background: '#D38E38'}},
        {src: './images/03.jpg', color: {interface: '#0000FF', background: '#FF0000'}},
        {src: './images/04.jpg', color: {interface: '#FFD700', background: '#808080'}}
    ];

    let [colors, setColors] = useState<Color>({...images[0].color});

    function changeColors(e: {currentSlide: number}): void {
        setColors({...images[e.currentSlide].color});
    }

    return (
        <div className="main-wrapper" style={{backgroundColor: colors.background}}>
            <Header colors={colors}/>
            <main>
                {/*todo change arrows*/}
                <ReactSlidy imageObjectFit="contain" itemsToPreload={2} showArrows={true} doAfterSlide={changeColors}>
                    {images.map((image, i) => <img src={image.src} key={`Photograph #${i}`}/>)}
                </ReactSlidy>
            </main>
            <Footer colors={colors}/>
        </div>
    );
}