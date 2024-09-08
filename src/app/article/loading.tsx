const ArticlesSkeleton = [1, 2, 3, 4, 5, 6];

const LoadingArticle = () => {
    return (
        <section className="fix-height px-5 m-auto animate-pulse">
            <div className='my-5 w-full md:w-2/3 m-auto bg-gray-300 h-12'></div>
            <div className="flex justify-center items-center flex-wrap gap-7" >
                {ArticlesSkeleton.map((item) => (
                    <div key={item} className="p-5 rounded-lg my-1 bg-gray-200 w-full md:w-2/5 lg:w-1/4">
                        <h1 className=" bg-gray-300 h-6 "></h1>
                        <p className="my-2 bg-gray-300 p-1 h-10 "></p>
                        <div className="bg-gray-300 h-6 w-full block text-center p-1 rounded-lg"></div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center space-x-2 m-auto my-5">
                <div className="bg-gray-300 h-6 w-48 rounded-sm"></div>
            </div>
        </section>
    );
};

export default LoadingArticle;