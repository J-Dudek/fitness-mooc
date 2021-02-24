import React from 'react';
// Components
import Intro from '../components/caroussel/caroussel'
import Article from '../components/article/article'
// Data
import items from '../data/carroussel'
import articles from '../data/homeArticle'

const Home = () => (
    <div>
        <h1>Home</h1>
        <Intro items={items} />
        {articles ? (articles.map(a => <Article article={a} key={a.id} />)) : ""}

    </div>
);

export default Home;