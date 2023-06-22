import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from "../Component/PropertyCard";
import Footer from './Footer';
import Contact from './Contact';



const HomePage = () => {

    const properties = [
        {
            id: 1,
            title: "Family Home: A Complete Home Solution",
            description: `Cost of making your dream home only @ Rs 1500 - 2500 per square foot `,
            image: "home.jpg",
            // image: `https://wallsanddreams.com/images/testimonial-bg.jpg`,
        },

        {
            id: 2,
            title: "Construction Material",
            description: "We supply all required contruction materials",
            image: `construct.webp`,
        },
        {
            id: 3,
            title: "Construction Vehicles",
            description: "All contruction vehicles are avialable here ",
            image: `jcb.webp`,
        },
    ];
    return (
        <div className="bg-gray-100">

            <header className="relative bg-gray-900 py-12 sm:py-10 min-h-screen">
                <div
                    className="absolute top-0 left-0 w-full h-full opacity-50 bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://wallsanddreams.com/images/testimonial-bg.jpg')`
                    }}
                />

                <div className="container relative mx-auto my-10 px-4">

                    <img
                        className="bg-gradient-to-b from-blue-900 via-white to-green-900 rounded-full w-16 mr-2 mx-10"
                        src="MSlogo.png"
                        alt="Logo"
                    />
                    <span className="text-gray-300 mx-3 sm:text-xl md:text-1xl mb-8">
                        MS Contructor
                    </span>

                    <div className="mx-10 my-10 flex justify-center">
                        <div>
                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                                Welcome to MS Construction & Supplier
                            </h1>
                            <div className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-8">
                                <p>We Build Your Dream!</p>
                                <p>Get Your Dream Home In Low Budget.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center my-10">
                        <Link to="https://forms.gle/y4bMXLjJGNADReZk7">
                            <button>
                                <span className="text">contact</span>
                            </button>
                        </Link>
                    </div>

                    <section className="bg-gray-900 py-3 my-3">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {properties.map((property) => (
                                    <PropertyCard key={property.id} property={property} />
                                ))}

                            </div>
                        </div>
                    </section>

                </div>
            </header>


            <main className=" bg-gradient-to-b from-gray-900 via-white">
                <div className="container mx-auto px-4">


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800">Feature 1</h2>
                            <p className="mt-2 text-lg text-gray-600">MS Constrution & Supplier is a leading provider of comprehensive construction services, specializing in both residential and commercial projects. With a team of highly skilled professionals and a proven track record of delivering quality results, we offer a wide range of services including new construction, remodeling, renovations, and project management.</p>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800">Feature 2</h2>
                            <p className="mt-2 text-lg text-gray-600">As a trusted construction material supplier, we are dedicated to providing high-quality products and solutions to contractors, builders, and construction professionals. With an extensive range of construction materials and a commitment to reliability, we serve as a one-stop shop for all your project needs.</p>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800">Feature 3</h2>
                            <p className="mt-2 text-lg text-gray-600">When it comes to home construction, there are specific types of construction vehicles that are commonly used. These vehicles play a crucial role in various stages of the construction process, from site preparation to material transportation and heavy lifting. We are here to providing you all the necessary vehicles you required.</p>
                        </div>
                    </div>

                    <section className="mt-16">

                        <div className="flex items-center justify-center">
                            <div className=" p-8 bg-white rounded-lg shadow-lg">
                                <p className="text-lg text-gray-700">
                                    At My Website, we specialize in real estate construction projects. With our team of experienced architects and engineers, we bring your dream projects to life. Whether it's residential buildings, commercial complexes, or industrial spaces, we provide top-notch construction services with a focus on quality and innovation.
                                </p>
                                <p className="mt-4 text-lg text-gray-700">
                                    We handle every aspect of the construction process, from design and planning to execution and project management. Our commitment to delivering projects on time and within budget has earned us a reputation for excellence in the industry. Contact us today to discuss your construction needs and turn your vision into reality.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;
