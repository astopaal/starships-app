import React, { memo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Card = ({ index, starship }) => {
  const navigate = useNavigate();
  const url = starship.url;
  const id = parseInt(new URL(url).pathname.split("/").slice(-2, -1)[0]);

  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      transition={{ duration: 0.5 }}
      className=" md:w-72 w-96 h-[300px] backdrop-filter 
         backdrop-blur-lg backdrop-saturate-180 font-rale
         bg-blue-400 bg-opacity-10 rounded-lg
         border border-white border-opacity-25 p-6 shadow-md hover:bg-blue-700 hover:bg-opacity-20 hover:border-white transition duration-1000"
      onClick={() => navigate(`/details/${id}`)}
    >
      <div className="w-full h-full overflow-hidden">
        <div className="p-1 bg-black rounded-lg border border-white border-opacity-25">
          <img
            className="rounded object-cover"
            src={require('../../assets/starship.png')}
            alt="starship"
          />
        </div>
        <div>
          <h3 className="min-h-[50px] overflow-hidden text-white font-lato text-md my-4 tracking-widest uppercase">
            {starship.name}
          </h3>
          <div className="flex">
            <div>
              Model :
              <p className="min-h-[50px] font-rale tracking-widest text-sm">
                {starship.model}
              </p>
            </div>
            <div>
              
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex">
          <p className="font-bold  font-lato">Hyperdrive : </p>
          <p className="">{starship.hyperdrive_rating}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(Card);
