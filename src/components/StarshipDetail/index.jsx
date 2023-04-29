import React from "react";
import Loading from "../Loading";
const StarshipDetail = ({starshipDetail, loadStatus}) => {
    console.log(starshipDetail);
    console.log(loadStatus)
    return (
        <>
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
            {loadStatus === "LOADING" && <Loading />}
        </>
    );
};

export default StarshipDetail;
