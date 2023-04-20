import React from "react";

const Card = ({ starship }) => {
  return (
    <div className="md:w-32 w-64">
      <div className="">
        <h3 className="text-xl font-bold">{starship.name}</h3>
        <p className="font-rale ">{starship.model}</p>
      </div>
      <p>{starship.hyperdrive_rating}</p>
    </div>
  );
};

export default Card;
