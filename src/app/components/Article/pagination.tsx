interface paginationProps {
    page : number,
    pageNumber : number,
    route : string
}

const Pagination = ({page, pageNumber,route} : paginationProps) => {
    let pageArray:number[] = [];
    for(let i = 1; i<=page ; i++ ) pageArray.push(i)
    return (
        <div className="flex justify-center items-center space-x-2 m-auto my-5">
            <div className="p-2 border rounded cursor-pointer hover:bg-gray-200">
                Prev
            </div>
            {pageArray.map(page => (
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
