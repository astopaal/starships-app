import React from "react";

const Card = ({starship}) => {
    return (
        <div className="md:w-96 w-80 h-[550px] backdrop-filter outline outline-2 outline-amber-100
         backdrop-blur-lg backdrop-saturate-180 font-rale
         bg-blue-400 bg-opacity-10 rounded-lg
         border border-white border-opacity-25 p-6 shadow-md">
            <div className="w-full h-full">
                <div className="p-1 bg-black rounded-lg border border-white border-opacity-25">
                    <img className="rounded object-cover" src="https://preview.redd.it/clone-wars-style-nubian-starship-animation-by-me-v0-babd2xcbt0a91.gif?width=640&crop=smart&format=png8&s=54bd755485b850573be0663bec5ed42916635770"/>
                </div>
                <div>
                    <h3 className="text-white font-lato text-3xl my-4 tracking-widest uppercase">{starship.name}</h3>
                    <p className="font-rale">Model : {starship.model}</p>
                </div>
                <div className="my-10 justify-end">
                    <span className="font-bold font-lato">Hyperdrive rating: </span>
                    <p className="text-5xl">{starship.hyperdrive_rating}</p>
                </div>
            </div>
        </div>

);
};

export default Card;
