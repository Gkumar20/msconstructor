import React from "react";


const PropertyCard = ({ property }) => {
  const { title, description, image } = property;
  

  

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover"
        
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-lg mb-2">{description}</p>
        <div className="flex items-center justify-between">
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
