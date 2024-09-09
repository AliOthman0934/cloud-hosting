import React from 'react'
interface searchArticlePageProps {
    searchParams: {searchText:string}
}

const searchArticlePage = ({searchParams}:searchArticlePageProps) => {
    
    return (
        <section>
            <h2>
                {searchParams.searchText}
            </h2>
        </section>
    )
}

export default searchArticlePage