import React from 'react';
import './nav.css';

class CustomNav extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.setState({link_class: 'hidden'});
        this.openNav = this.openNav.bind(this);

    }

    openNav() {
        this.myRef.current.style.display =
            (this.myRef.current.style.display === 'flex') ?
            'none': 'flex';
    }

    render() {
        return (
            <nav id="nav-container" className="flex-grid">
                <div id="nav-title" className="flex-grid">
                    <h1><a id="title" href={'/'}>Fitness Mooc</a></h1>
                </div>
                <div id="nav-dropdown" className="flex-center">
                    <button id="nav-btn" onClick={this.openNav}>
                        <span id="btn-icon" className="material-icons">menu</span>
                    </button>
                </div>
                <div id="links-container" ref={this.myRef}>
                    <a href={'/first'} className="link">First Week</a>
                    <a href={'/second'} className="link">Second Week</a>
                    <a href={'/third'} className="link">Third Week</a>
                    <a href={'/fourth'} className="link">Fourth Week</a>
                </div>
            </nav>
        )
    }
}

export default CustomNav
