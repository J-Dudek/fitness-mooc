import React from 'react';
import MainMenu from '../components/mainMenu/mainMenu'
import cards from '../data/week4'


const Fourth = () => (
    <div>
        <h1>Fourth Week</h1>
        <MainMenu cards={cards} />
    </div>
);

export default Fourth;