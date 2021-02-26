import React, { Component, Fragment } from 'react';
import { Accordion } from 'react-bootstrap'
import Chapter from '../chapter/chapter';
import Article from '../article/article'


class Booklet extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        const { articles } = this.props;
        return (
            <Fragment>
                <Accordion defaultActiveKey="0">

                    {articles.map((article) => (<Article key={article.id} article={article} />))
                    }
                </Accordion>
            </Fragment>
        );
    }
}

export default Booklet;