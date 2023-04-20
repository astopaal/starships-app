import React, { useEffect, useState } from "react";
import Card from "../Card";

import { getStarships } from "../../redux/starshipSlice";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import "./pagination.css";

const List = () => {
  const dispatch = useDispatch();

  const { starships, starshipsStatus } = useSelector(
    (state) => state.starships
  );
  console.log(starships);
  console.log(starshipsStatus);

  useEffect(() => {
    dispatch(getStarships());
  }, [dispatch]);


  /* pagination calculations start */

  //we decompose the data in a very simple way
  const itemsPerPage = 5;

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = starships.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(starships.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % starships.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  /* pagination calculations end */


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

      {/* mapping paginated data */}
      <div className="list-container my-10 flex flex-col md:flex-row gap-4">
        {starshipsStatus == "SUCCESS"
          ? currentItems?.map((starship, index) => (
              <Card key={index} starship={starship} />
            ))
          : starshipsStatus == "LOADING"
          ? "Loading Component"
          : "Error"}
      </div>


      {/* I used react-paginate package to facilitate pagination */}
      <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel="n>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<p"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default List;
