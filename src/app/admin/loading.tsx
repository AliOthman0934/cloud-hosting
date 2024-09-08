import React from 'react'

const loadingAdmin = () => {
    return (
        <div className='h-[70vh] flex items-center justify-center px-5 lg:px-20'>
            <div className='overflow-height flex items-start justify-between overflow-hidden'></div>
            <div className='overflow-height w-15 lg:w-1/5 bg-gray p-1 lg:p-5'></div>
            <div className='shadow p-4 bg-gray-300 rounded w-full'>
                <h2 className='bg-gray-400 mb-4r h-6'></h2>
                <div className='flex flex-col'>
                    <div className='bg-gray-400 h-24'></div>
                    <div className='bg-gray-400 h-6'></div>
                </div>
            </div>
        </div>
    )
}

export default loadingAdmin