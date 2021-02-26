import React from 'react';
import './nav.css';

class CustomNav extends React.Component {
    render() {
        return (
            <nav id="nav-container" className="flex-grid">
                <div id="nav-title" className="flex-grid">
                    <h1><a id="title" href={'/'}>Fitness Mooc</a></h1>
                </div>
                <div id="nav-dropdown" className="flex-center">
                    <button onClick="displayLinks()" id="nav-btn">
                        <span id="btn-icon" className="material-icons"></span>
                    </button>
                </div>
                <div id="links-container">
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
