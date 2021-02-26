import React from 'react';
import Bookclet from '../booklet/booklet'
import Title from '../../body/title/title'
import "./common.css"



const Common = ({ data }) => (

    <div>
        <Title data={data} />
        <Bookclet articles={data.content} />
    </div>
);

export default Common;
