import React from 'react';
import MainMenu from '../components/mainMenu/mainMenu'
const cards=[{id:'0',title:"Essential of Running",program:"Blabla de run"},
            {id:'1',title:"Explications",program:"Blabla de run detaillé"},
            {id:'2',title:"Video of the week",program:"Here is The video",url:"https://www.youtube.com/watch?v=mWaoIDtEe1c&ab_channel=Doctissimo"}];

const Fourth = ()=>(
<div>
<h1>Fourth Week</h1>
<MainMenu cards={cards} />
</div>
);

export default Fourth;