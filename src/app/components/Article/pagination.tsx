import Link from "next/link";

interface paginationProps {
    page: number;
    pageNumber: number;
    route: string;
}




const Pagination = ({ page, pageNumber, route }: paginationProps) => {
    const prev = pageNumber - 1
    const next = pageNumber + 1
    let pageArray: number[] = [];

    // Log the page value for debugging
    console.log("page value:", page);

    // Check if page is a valid number greater than 0
    if (!isNaN(page) && page > 0) {
        for (let i = 1; i <= page; i++) pageArray.push(i);
    }

    console.log("pageArray:", pageArray);  // Log the pageArray

    return (
        <div className="flex justify-center items-center space-x-2 m-auto my-5">
            {pageNumber !== 1 &&
                <Link href={`${route}?pageNumber=${prev}`} className="p-2 border rounded cursor-pointer hover:bg-gray-200">
                    Prev
                </Link>
            }

            {pageArray.map(pages => (
                <Link
                    href={`${route}?pageNumber=${pages}`}  // Fix the href here to use "pages"
                    key={pages}
                    className={`${pageNumber === pages ? "bg-gray-300": ""}p-2 border rounded cursor-pointer hover:bg-gray-200`}
                >
                    {pages}
                </Link>
            ))}

            {pageNumber !== page &&
                <Link href={`${route}?pageNumber=${next}`} className="p-2 border rounded cursor-pointer hover:bg-gray-200">
                    Next
                </Link>
            }
        </div>
    );
};

export default Pagination;
