import React from "react";
import './article.css'
const Article = ({ title, shorttext, text }) => (
    <div className="article">
        <h3>{title}</h3>
        <span>{shorttext}</span>
        <p>{text}</p>
    </div>
);

export default Article;