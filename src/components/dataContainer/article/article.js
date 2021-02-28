import React, { Fragment } from "react";
import Chapter from "../chapter/chapter";
import ReactPlayer from '../player/player';
import Quizz from '../quizz/quizz'
import Diaporama from '../caroussel/caroussel'
const videoStyle = {
    margin: 'auto',
};

const Article = ({ article }) => (
    <Fragment>
        <Chapter>
            <Chapter.Header
                title={article.title}
                id={article.id}
            />
            {article.program.map(part =>
                <Chapter.Body id={article.id}>
                    {part.subtitle ? <h3 className="article-subtitle">{part.subtitle}</h3> : ""}
                    {part.content ? <div className="article-content">{part.content}</div> : ""}
                    <ReactPlayer style={videoStyle} url={part.url} />
                    <Chapter.Img src={part.img} />
                    {part.quizz ? (<Quizz questions={part.quizz} />) : ""}
                    {part.diapo ? (<div className="diapo-article"><Diaporama items={part.diapo} /></div>) : ""}
                </Chapter.Body>
            )}


        </Chapter>
    </Fragment>
);


export default Article;