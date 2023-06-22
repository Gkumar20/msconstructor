import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8  mx-auto">
            <div className="container mx-auto flex justify-center items-center h-20">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Your Business Name. All rights reserved.
                </p>
                <p className="text-sm ml-4">
                    | Real Estate | Construction | Business |
                </p>
                <p className="text-sm ml-4">
                    <a href="/about">About Us</a> | <a href="/services">Services</a> | <a href="/contact">Contact Us</a>
                </p>
            </div>
            <footer className="bg-gray-800 py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 text-center">
                    <p>Contact: businesscell@example.com</p>
                    <p>Free Registrations Available</p>
                    <div className="flex justify-center mt-8">
                        <Link to={`/profile`} className="text-blue-600 hover:text-blue-700 flex items-center">
                            <span className="mr-2">Free Registration</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a1 1 0 01-.707-.293l-8-8a1 1 0 010-1.414l8-8A1 1 0 1110.707 2.707L4.414 9l6.293 6.293a1 1 0 01-1.414 1.414l-8-8a1 1 0 010-1.414l8-8A1 1 0 0110 2h10a1 1 0 01.993.883L21 3v10a1 1 0 01-.883.993L20 14H10a1 1 0 01-.707-.293l-6-6a1 1 0 010-1.414l6-6A1 1 0 0110 2h10a1 1 0 01.993.883L21 3v10a1 1 0 01-.883.993L20 14H10a1 1 0 01-.707-.293l6-6a1 1 0 010-1.414l-6-6A1 1 0 0110 2H2a1 1 0 010-2h8a3 3 0 012.824 4.118l-4.293 4.293a1 1 0 000 1.414l4.293 4.293A3 3 0 0110 18z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </footer>
        </footer>

    );
};

export default Footer;
