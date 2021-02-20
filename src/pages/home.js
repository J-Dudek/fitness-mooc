import React from 'react';
import Intro from '../components/Carroussel/caroussel'
import items from '../data/carroussel'

const Home = () => (
    <div>
        <h1>Home</h1>
        <Intro items={items} />
    </div>
);

export default Home;