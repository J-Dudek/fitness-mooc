import React from "react";
import './article.css'
import Identity from '../identity/identity';
import { CardDeck } from 'react-bootstrap'
const Article = ({ title, shorttext, text, team }) => (
    <div className="article">
        <h3>{title}</h3>
        <span>{shorttext}</span>
        <p>{text}</p>
        {team ? <CardDeck>{(team.map(person => (<Identity member={person} key={person.id} />)))}</CardDeck> : ""}

    </div>
);

export default Article;