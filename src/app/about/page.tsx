import React from 'react'

const AboutPage = () => {
    console.log("About Page Is Called")
    return (
        <section className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-6 py-10">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
                <p className="text-gray-600 leading-relaxed mb-6">
                    Welcome to our website! We are passionate about providing high-quality services and resources to our users. Our team is dedicated to ensuring your experience is both enjoyable and productive.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-purple-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-purple-700">Our Mission</h2>
                        <p className="text-gray-600 mt-2">
                            To create a user-friendly platform that caters to the needs of our community.
                        </p>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-blue-700">Our Vision</h2>
                        <p className="text-gray-600 mt-2">
                            To be the leading provider of innovative solutions in the industry.
                        </p>
                    </div>
                </div>
                <div className="mt-8">
                    <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}

export default AboutPage