import React, {useEffect} from "react";
import Header from "../components/Header";
import StarshipDetail from "../components/StarshipDetail";

import { getStarshipDetails } from "../redux/starshipSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

const Detail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();

  // get states from store
  const { starshipDetail, starshipDetailStatus } = useSelector(
    (state) => state.starships
  );

  //gets starship details according to id value from url
  useEffect(() => {
    dispatch(getStarshipDetails(id));
  }, [dispatch, id]);


  return (
    <>
      <Header />
      <StarshipDetail starshipDetail = {starshipDetail} />
    </>
  );
};

export default Detail;
