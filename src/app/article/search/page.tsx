// import React from 'react'
// import {getSearchedArticle} from "@/apiCalles/getArticlesApi" 
// import { Article } from '@prisma/client'
// import ArticlepPage from '@/app/components/Article/Article.jsx'

// interface searchArticlePageProps {
//     searchParams: {searchText:string}
// }

// const searchArticlePage = ({searchParams}:searchArticlePageProps) => {
//     const articles: Article[] = getSearchedArticle(searchParams.searchText)
//     return (
//         <section className='fix-height container m-auto px-5'>
//             <h1 className='text-2xl font-bold'>
//                 Article based on
//                 <span className='ms-1 text-green-700 text-3xl font-bold'>
//                     {searchParams.searchText}
//                 </span>
//             </h1>
//             <div className='flex items-center justify-center flex-wrap gap-7'>
//                 {articles.map(item => (
//                     <ArticlepPage key={item.id} article={item}/>
//                 ))}
//             </div>
//         </section>
//     )
// }

// export default searchArticlePage

"use client"

import React, { useEffect, useState } from 'react';
import { getSearchedArticle } from "@/apiCalles/getArticlesApi";
import { Article } from '@prisma/client';
import ArticlePage from '@/app/components/Article/Article';

interface SearchArticlePageProps {
    searchParams: { searchText: string };
}

const SearchArticlePage = ({ searchParams }: SearchArticlePageProps) => {
    const [articles, setArticles] = useState<Article[]>([]);
    
    useEffect(() => {
        const fetchArticles = async () => {
            const fetchedArticles = await getSearchedArticle(searchParams.searchText);
            setArticles(fetchedArticles);
        };

        fetchArticles();
    }, [searchParams.searchText]);

    return (
        <section className='fix-height container m-auto px-5'>
            <h1 className='text-2xl font-bold'>
                Articles based on
                <span className='ms-1 text-green-700 text-3xl font-bold'>
                    {searchParams.searchText}
                </span>
            </h1>
            <div className='flex items-center justify-center flex-wrap gap-7'>
                {articles.length > 0 ? (
                    articles.map(item => (
                        <ArticlePage key={item.id} article={item} />
                    ))
                ) : (
                    <p>No articles found.</p>
                )}
            </div>
        </section>
    );
};

export default SearchArticlePage;