interface singleArticle{
    params: {id: string}
}

const singleArticlePage = async ({params}:singleArticle) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    if(!response.ok){
        throw new Error("Error fetching single article")
    }
    const singleArticle = response.json();
    return (
        <div>single Article Page</div>
    )
}

export default singleArticlePage