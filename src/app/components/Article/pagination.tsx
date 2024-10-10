import Link from "next/link"

interface paginationProps {
    page : number,
    pageNumber : number,
    route : string
}

const Pagination = ({page, pageNumber,route} : paginationProps) => {
    let pageArray:number[] = [];
    console.log(pageArray)
    for(let i = 1; i<=page ; i++ ) pageArray.push(i)
    return (
        <div className="flex justify-center items-center space-x-2 m-auto my-5">
            <div className="p-2 border rounded cursor-pointer hover:bg-gray-200">
                Prev
            </div>
            {pageArray.map(pages => (
                <Link href={`${route}?pageNumber=${page}`} key={pages} className="p-2 border rounded cursor-pointer hover:bg-gray-200">
                    {pages}
                </Link>
            ))}
            <div className="p-2 border rounded cursor-pointer hover:bg-gray-200">
                Next
            </div>
        </div>
    );
}

export default Pagination;
