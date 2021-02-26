import React from 'react';
import Bookclet from '../components/dataContainer/booklet/booklet'
import Title from '../components/body/title/title'




const Common = ({ data }) => (

    <div>
        <Title data={data} />
        <Bookclet articles={data.content} />
    </div>
);

export default Common;
