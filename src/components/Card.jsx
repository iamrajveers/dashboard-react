import React from "react";

const Card = ({ icon, title, value }) => {  // Destructure props here

  return (
    <div className="bg-white text-dark p-4 rounded-lg shadow-md flex items-center space-x-6">
      <div className="text-3xl text-gray-500">{icon}</div>  {/* Render the icon */}

      <div>
        <h2 className="text-lg font-semibold">{title}</h2>  {/* Render the title */}
        <p className="text-xl">{value}</p>  {/* Render the value */}
      </div>
    </div>
  );
};

export default Card;
