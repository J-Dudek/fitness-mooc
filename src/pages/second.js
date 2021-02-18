import React from 'react';
import MainMenu from '../components/mainMenu/mainMenu'
import cards from '../data/week2'

const Second = () => (
    <div>
        <h1>Second Week</h1>
        <MainMenu cards={cards} />
    </div>
);

export default Second;