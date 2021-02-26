import React from 'react';
// Components
import Intro from '../caroussel/caroussel'
import Article from '../section/section'
// Data
import items from '../../../data/carroussel'
import { aboutUs, article1, article2, otherArticles } from '../../../data/homeArticle'

const Home = () => (
    <section>
        <Intro items={items} />
        <Article article={article1} />
        <Article article={aboutUs} />
        <Article article={article2} />
        {otherArticles.map(a => <Article article={a} key={a.id} />)}
    </section>
);

export default Home;
