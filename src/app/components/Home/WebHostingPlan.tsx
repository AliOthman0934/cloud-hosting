import { TiTick } from "react-icons/ti"

const WebHostingPlan = () => {
    return (
        <div className="flex flex-col justify-center items-center w-3/4 rounded p-4 bg-gray-200 mb-7 md:w-2/4 lg:w-1/4 ">
            <h3 className="text-3xl text-bold text-purple-700">Premium</h3>
            <strong className="text-3xl text-bold text-gray-900 my-5">
                $4.50/mo
            </strong>
            <span className="bg-red-200 text-red-900  rounded-full px-2 py-1 font-semibold">
                10% OFF
            </span>
            <div className="mt-6">
                <h5 className="text-purple-700 text-2xl font-semibold mb-1">Top Features</h5>
                <div className="flex items-center text-green-700  mb-1 ps-3">
                    <TiTick/> 100 Websites
                </div>
                <div className="flex items-center text-green-700  mb-1 ps-3">
                    <TiTick/> 100GB SSD Storage
                </div>
                <div className="flex items-center text-green-700  mb-1 ps-3">
                    <TiTick/> Weekly Backups
                </div>
                <div className="flex items-center text-green-700  mb-1 ps-3">
                    <TiTick/> Unlimited Bandwidth
                </div>
                <div className="flex items-center text-green-700  mb-1 ps-3">
                    <TiTick/> Free SLL
                </div>
            </div>
            <button className="mt-4 border-2 border-gray-900 text-2xl font-bold rounded-full hover:text-white hover:bg-gray-900  ttransition w-full">
                BUY NOW
            </button>
        </div>
    )
}

export default WebHostingPlan