import React from "react";
import './article.css'
import Identity from '../identity/identity';
import { CardDeck } from 'react-bootstrap'
const Article = ({ article }) => (
    <div className="article">
        <h3>{article.title}</h3>
        <span>{article.shorttext}</span>
        <p dangerouslySetInnerHTML={{ __html: article.text }}></p>
        {article.team ? <CardDeck>{(article.team.map(person => (<Identity member={person} key={person.id} />)))}</CardDeck> : ""}

    </div>
);

export default Article;