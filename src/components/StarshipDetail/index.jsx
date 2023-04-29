import React from "react";
import {useNavigate} from "react-router-dom";
import Loading from "../Loading";

const StarshipDetail = ({starshipDetail, loadStatus}) => {

    const navigate = useNavigate(); //for back button


    return (
        <>

            {/* I make different renders according to the promise status value.
                If success I render the details,
                if loading I render the loading component,
                in other cases I render the error message. */}

            {/*
                If I keep the data in lcoalStorage,
                the api request can be blocked on return without pulling data from the api again,
                but I do not prefer this.
            */}

            {loadStatus === "SUCCESS" &&
                <div className="mt-20 w-3/5 flex flex-col m-auto ">
                    <div className="my-1 py-10 px-2 bg-white bg-opacity-80 rounded text-center">
                        <p className="text-5xl tracking-widest font-lato font-bold">
                            {starshipDetail.name}
                        </p>
                    </div>
                    <div className="flex flex-grow">
                        <div className="w-1/2 h-auto items-stretch flex flex-col">
                            <div className="my-1 py-2 px-2 bg-white bg-opacity-80 rounded flex-grow">
                                <p className="text-xl tracking-widest font-lato font-bold">
                                    Model : {starshipDetail.model}
                                </p>
                            </div>
                            <div className="my-1 py-2 px-2 bg-white bg-opacity-80 rounded flex-grow">
                                <p className="text-xl tracking-widest font-lato font-bold">
                                    Manufacturer : {starshipDetail.manufacturer}
                                </p>
                            </div>
                            <div className="my-1 py-2 px-2 bg-white bg-opacity-80 rounded flex-grow">
                                <p className="text-xl tracking-widest font-lato font-bold">
                                    Length : {starshipDetail.length}
                                </p>
                            </div>
                            <div className="my-1 py-2 px-2 bg-white bg-opacity-80 rounded flex-grow">
                                <p className="text-xl tracking-widest font-lato font-bold">
                                    Crew : {starshipDetail.crew}
                                </p>
                            </div>
                            <div className="my-1 py-2 px-2 bg-white bg-opacity-80 rounded flex-grow">
                                <p className="text-xl tracking-widest font-lato font-bold">
                                    Cost : {starshipDetail.cost_in_credits}
                                </p>
                            </div>
                            <div className="my-1 py-2 px-2 bg-white bg-opacity-80 rounded flex-grow">
                                <p className="text-xl tracking-widest font-lato font-bold">
                                    HD Rating : {starshipDetail.hyperdrive_rating}
                                </p>
                            </div>
                            <div className="my-1 py-2 px-2 bg-white bg-opacity-80 rounded flex-grow">
                                <p className="text-xl tracking-widest font-lato font-bold">
                                    Max Speed : {starshipDetail.max_atmosphering_speed}
                                </p>
                            </div>
                        </div>
                        <div className=" p-4 bg-white bg-opacity-80 m-1 rounded-md">
                            <img
                                className="rounded-md"
                                src={require('../../assets/starship.png')}
                                alt="shipDetail"/>
                        </div>
                    </div>
                </div>
            }
            {loadStatus === "LOADING" && <Loading/>}

            <button
                onClick={() => navigate(-1)} /* navigate(-1) redirects to the previous route. */
                className="-bottom-[-4%] -right-[-2%] fixed inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
                </svg>

                <p className="font-lato font-extrabold text-2xl">Back</p>
            </button>
        </>
    );
};

export default StarshipDetail;
