import * as React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header"
import '@brainhubeu/react-carousel/lib/style.css';
// import {ReactComponent as Back} from '../icons/back.svg';
// import {ReactComponent as Next} from '../icons/next.svg';

interface ImageObject {
    src: string,
    color: Color
}

interface Color {
    interface: string,
    background: string
}

export default class Main extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        console.log('shit');
    }

    public images: ImageObject[] = [
        {src: './images/01.jpg', color: {interface: '', background: ''}},
        {src: './images/02.jpg', color: {interface: '', background: ''}},
        {src: './images/03.jpg', color: {interface: '', background: ''}},
        {src: './images/04.jpg', color: {interface: '', background: ''}}
    ];
    public colors: Color = {
        interface: 'white',
        background: 'black'
    };

    render() {
        const backgroundColor = 'white',
            interfaceColor = 'black';


        return (

            <div className="main-wrapper">
                <Header color={interfaceColor}/>
                <main>
                    {/*<Carousel*/}
                    {/*    slides={this.images.map((img) => <img src={img.src} alt="" key={img.src + ' photo'}/>)}*/}
                    {/*    onChange={this.onChange}*/}
                    {/*    plugins={[*/}
                    {/*        'infinite',*/}
                    {/*        'clickToChange',*/}
                    {/*        {*/}
                    {/*            resolve: arrowsPlugin,*/}
                    {/*            options: {*/}
                    {/*                arrowLeft: <button className='arrow'><Back fill={interfaceColor}/></button>,*/}
                    {/*                arrowRight: <button className='arrow'><Next fill={interfaceColor}/></button>,*/}
                    {/*                addArrowClickHandler: true,*/}
                    {/*            },*/}
                    {/*        },*/}
                    {/*    ]}/>*/}
                </main>
                <Footer color={interfaceColor}/>
            </div>
        )
    }
}