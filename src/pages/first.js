import React from 'react';
import MainMenu from '../components/mainMenu/mainMenu'
import cards from '../data/week1'


const First = () => (

    <div>
        <h1>First Week</h1>
        <MainMenu cards={cards} />
    </div>
);

export default First;
