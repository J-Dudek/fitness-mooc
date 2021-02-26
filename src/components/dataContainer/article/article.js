import React, { Fragment } from "react";
import Chapter from "../chapter/chapter";
import ReactPlayer from '../player/player';
import Quizz from '../quizz/quizz'
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
                    <h3>{part.subtitle}</h3>
                    <div>{part.content}</div>
                    <ReactPlayer style={videoStyle} url={part.url} />
                    <Chapter.Img src={part.img} />
                    {part.quizz ? (<Quizz questions={part.quizz} />) : ""}
                </Chapter.Body>
            )}


        </Chapter>
    </Fragment>
);


export default Article;