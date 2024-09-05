"use client"
import React, { ReactEventHandler, useState } from "react"


const SearchArticle = () => {
    const [searchText, setSearchText] = useState("");

    const submitFormHandler = (e:React.FormEvent) => {
        e.preventDefault();
    }
    return (
        <form className='my-5 w-full md:w-2/3 m-auto' onSubmit={submitFormHandler}>
            <input
                type='search'
                placeholder='Search For Article'
                value={searchText}
                onChange={(e)=> setSearchText(e.target.value)}
                className='w-full p-3 rounded text-xl border-none text-gray-900' />
        </form>
    )
}

export default SearchArticle
