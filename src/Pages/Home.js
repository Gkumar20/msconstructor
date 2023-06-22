import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropertyCard from "../Component/PropertyCard";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Home = () => {
  const properties = [
    {
      id: 1,
      title: "Spacious Family Home",
      description: "Beautiful 4-bedroom home in a quiet neighborhood.",
      price: "$500,000",
      image: `https://source.unsplash.com/500x300/?construction`,
    },

    {
      id: 2,
      title: "Luxury Beach House",
      description: "Stunning beachfront property with ocean views.",
      price: "$1,200,000",
      image: `https://source.unsplash.com/500x300/?building`,
    },
    {
      id: 3,
      title: "Modern City Apartment",
      description: "Contemporary apartment in the heart of the city.",
      price: "$800,000",
      image: `https://source.unsplash.com/500x300/?realstate`,
    },
  ];

  return (

    <div className="bg-gray-900 min-h-screen mx-auto " >


      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 relative rounded-lg">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage:
              "url(https://source.unsplash.com/500x300/?building)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Welcome to MS Construction and Supplier
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-8">
          We Build Your Dream!
        </p>
        <div className="flex justify-center">
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg sm:text-xl"
          >
            Register to Contact
          </Link>
        </div>
      </div>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Featured Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Find Your Dream Home
              </h2>
              <p className="text-gray-600">
                We have a wide range of properties available for sale or rent.
                Use our advanced search filters to find the perfect home for
                you.
              </p>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Sell Your Property
              </h2>
              <p className="text-gray-600">
                List your property with us and reach a wide audience of
                potential buyers. Our experienced agents will assist you
                throughout the selling process.
              </p>
            </div>
          </div>
        </div>
      </section>


      <Contact />
    </div>
  );
};

export default Home;
