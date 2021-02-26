import React from 'react';
// Components
import Intro from '../components/dataContainer/caroussel/caroussel'
import Article from '../components/article/article'
// Data
import items from '../data/carroussel'
import {aboutUs, article1, article2, otherArticles} from '../data/homeArticle'
import Identity from "../components/dataContainer/identity/identity";

const Home = () => (
    <section>
        <Intro items={items} />
        <Article article={article1}/>
        <Article article={aboutUs}/>
        <Article article={article2}/>
        {otherArticles.map(a => <Article article={a} key={a.id}/> )}
    </section>
);

export default Home;
