import React, { useEffect, useState } from "react";
import Card from "../Card";
import Loading from "../Loading"

import { getStarships } from "../../redux/starshipSlice";
import { useDispatch, useSelector } from "react-redux";

const List = () => {
  const dispatch = useDispatch();

  // get states from store
  const { starships, starshipsStatus } = useSelector(
    (state) => state.starships
  );

  // set page state
  const [currentPage, setCurrentPage] = useState(1);

  // next button handler
  const handleNext = async () => {
    const page = currentPage + 1;
    const response = await dispatch(getStarships(page));
    if (response.payload) {
      setCurrentPage(page);
    }
  };

  // previous button handler
  const handlePrevious = async () => {
    const page = currentPage - 1;
    const response = await dispatch(getStarships(page));
    if (response.payload) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    dispatch(getStarships(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className="text-white mt-8 w-5/6 mx-auto flex flex-col justify-center items-center p-2">
      <div className="search-field ">
        <input
          className="focus:outline-none bg-[rgb(255,250,250)] text-black p-2 md:w-96 border-white shadow-md shadow-white rounded-md"
          type="text"
          name="search"
          id="search"
          placeholder="Search by name or model..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-10">
        {starshipsStatus === "LOADING" ? (
          <Loading />
        ) : starshipsStatus === "FAIL" ? (
          <p>Failed to load data</p>
        ) : (
          starships.map((starship, index) => (
            <Card
              key={parseInt(
                new URL(starship.url).pathname.split("/").slice(-2, -1)[0]
              )}
              index={index + 1}
              starship={starship}
            />
          ))
        )}
      </div>
        {/* I USE FORWARD AND BACK BUTTONS INSTEAD OF LOAD MORE. 
            BECAUSE I HAVE SOME PROBLEMS DURING MAP AND RENDER WHEN USING LOAD MORE
        */}
        
      <div className="flex fixed -bottom-0 mb-8">

        {/* if the data on page 1 is displayed, the previous button will be disabled */}
        <button
        onClick={handlePrevious}
          disabled={currentPage === 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          {"<"} Prev
        </button>

        {starships.length > 0 && (
          <button
          onClick={handleNext} className={"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"}>
            Next {">"}
          </button>
        )}
      </div>
    </div>
  );
};

export default List;
