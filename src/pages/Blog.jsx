import React from 'react';
import H1 from '../components/global/H1'
import ArticlesList from '../components/Blog/ArticlesList';
const Blog = () => {
    return (
        <section className={'px-[30px]'}>
            <H1>blog</H1>
            <ArticlesList />
        </section>
    );
};

export default Blog;