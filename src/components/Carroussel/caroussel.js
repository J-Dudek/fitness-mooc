import React, { Component, Fragment } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './carroussel.css'

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        const { items } = this.props;
        return (
            <Fragment>
                <Carousel className="carroussel">
                    {items.map((it) => (<Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={it.url}
                            alt={it.alt}
                        />
                        <Carousel.Caption>
                            <h3>{it.title}</h3>
                            <p>{it.txt}</p>
                        </Carousel.Caption>
                    </Carousel.Item>))}
                </Carousel>
            </Fragment>
        );
    }


}

export default Intro;