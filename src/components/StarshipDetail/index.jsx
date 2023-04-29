import React from "react";

const StarshipDetail = ({ starshipDetail }) => {
  console.log(starshipDetail);

  return (
    <div className="mt-20 w-3/5 flex flex-col m-auto ">
      <div className="my-1 py-10 px-2 bg-white bg-opacity-80 rounded">
        <p className="text-5xl tracking-widest font-lato font-bold">
          Name : {starshipDetail.name}
        </p>
      </div>
      <div className="my-1 py-2 px-2 bg-white bg-opacity-80 rounded">
        <p className="text-xl tracking-widest font-lato font-bold">
          Model : {starshipDetail.model}
        </p>
      </div>
      <div className="my-1 py-2 px-2 bg-white bg-opacity-80 rounded">
        <p className="text-xl tracking-widest font-lato font-bold">
          Manufacturer : {starshipDetail.manufacturer}
        </p>
      </div>
      <div className="my-1 py-2 px-2 bg-white bg-opacity-80 rounded">
        <p className="text-xl tracking-widest font-lato font-bold">
          Length : {starshipDetail.length}
        </p>
      </div>
      <div className="my-1 py-2 px-2 bg-white bg-opacity-80 rounded">
        <p className="text-xl tracking-widest font-lato font-bold">
          Crew : {starshipDetail.crew}
        </p>
      </div>
    </div>
  );
};

export default StarshipDetail;
