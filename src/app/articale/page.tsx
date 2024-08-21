type articales = {
    id : number,
    userId: number,
    title: string,
    body: string
}

const Articalepage = async () => {
    const getArticales = await fetch("https://jsonplaceholder.typicode.com/posts");
    const articles: articales[] = await getArticales.json();
    return (
        <section>
                {articles.map(item => <h1 key={item.id}>{item.title}</h1> )}
        </section>
        
    )
}

export default Articalepage