const paginationArray = [1, 2, 3, 4, 5];

const Pagination = () => {
    return (
        <div className="flex justify-center items-center space-x-2 m-auto my-5">
            <div className="p-2 border rounded cursor-pointer hover:bg-gray-200">
                Prev
            </div>
            {paginationArray.map(page => (
                <div key={page} className="p-2 border rounded cursor-pointer hover:bg-gray-200">
                    {page}
                </div>
            ))}
            <div className="p-2 border rounded cursor-pointer hover:bg-gray-200">
                Next
            </div>
        </div>
    );
}

export default Pagination;
