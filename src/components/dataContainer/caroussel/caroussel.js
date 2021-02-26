import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './caroussel.css'

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        const { items } = this.props;
        return (

            <Carousel className="carroussel">
                {items.map((it) => (
                    <Carousel.Item key={it.id} >
                        <img
                            className="d-block w-100"
                            src={it.url}
                            alt={it.alt}
                        />
                        <Carousel.Caption position="initial">
                            <h3>{it.title}</h3>
                            <p>{it.txt}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

        );
    }


}

export default Intro;
