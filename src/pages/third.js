import React from 'react';
import MainMenu from '../components/mainMenu/mainMenu'
import cards from '../data/week3'


const Third = () => (
    <div>
        <h1>Third Week</h1>
        <MainMenu cards={cards} />
    </div>
);

export default Third;