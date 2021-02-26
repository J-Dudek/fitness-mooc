import React from "react";
import './section.css'
import Identity from '../identity/identity';
import Row from "react-bootstrap/Row";
const Article = ({ article }) => (
    <div className="section">

        { (article.position && article.position === 'left') ? <div className="left img" /> : ''}
        <div id={article.position && article.position === 'center' ? 'full' : ''} className={`text flex-center`}>
            <div className="text-container flex-center">
                <h2>{article.title}</h2>
                <p>{article.shorttext}</p>
                <p>{article.text}</p>
                {(article.team) ?
                    <div className={'container flex-grid'}>
                        <Row id="persons">
                            {article.team.map(member =>
                                <Identity member={member} />)}
                        </Row>
                    </div>
                    : <a href={'/first'} className="btn">Start Now</a>
                }
            </div>
        </div>
        { /* Pour afficher l'image à droite */
            (article.position && article.position === 'right') ? <div className="right img" /> : ''
        }
    </div>

);

export default Article;
