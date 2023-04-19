import React, {useEffect} from "react";
import Card from "../Card";

import { getStarships } from "../../redux/starshipSlice";
import { useDispatch } from "react-redux";

const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStarships())
  }, []);
  return (
    <div className="text-white mt-8 w-5/6 mx-auto flex flex-col justify-center items-center p-2">
      <div className="search-field ">
        <input
          className="focus:outline-none bg-[rgb(255,250,250)] text-white p-2 w-96 border-white shadow-md shadow-white rounded-md"
          type="text"
          name="search"
          id="search"
          placeholder="Search by name or model..."
        />
      </div>
      <div className="list-container">
        <Card />
      </div>
    </div>
  );
};

export default List;
