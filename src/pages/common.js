import React from 'react';
import MainMenu from '../components/mainMenu/mainMenu'



const Common = ({ data }) => (

    <div>
        <h1>{data.title}</h1>
        <MainMenu cards={data.content} />
    </div>
);

export default Common;
