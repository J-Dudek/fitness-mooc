import React from 'react';
import MainMenu from '../components/mainMenu/mainMenu'
import Bookclet from '../components/dataContainer/booklet/booklet'




const Common = ({ data }) => (

    <div>
        <h1>{data.title}</h1>{data.autor ? (<small> by {data.autor}</small>) : ""}
        <Bookclet articles={data.content} />
    </div>
);

export default Common;
