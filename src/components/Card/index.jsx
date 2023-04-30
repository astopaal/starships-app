import React, { memo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Card = ({ index, starship }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  /*
  The last endpoint of the url value from the api has an id.
  I get this id, and navigate to the detail page by id when onclick.
  */
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
          transition={{ duration: 0.3 }}
          className="md:w-72 w-96 h-[320px] backdrop-filter
         backdrop-blur-lg backdrop-saturate-180 font-rale
         bg-blue-400 bg-opacity-10 rounded-lg
         border border-white border-opacity-25 p-6 shadow-md hover:bg-blue-700 hover:bg-opacity-20 hover:border-white transition duration-1000"
          onClick={() => navigate(`/details/${id}`)}

          /*
          * mouse changes ishovered state in enter and leave states.
          * also in hover state the top of the div is blurred.
          * and at the bottom of this div I add click for details if ishovered true
          */
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`w-full h-full overflow-hidden ${isHovered ? 'blur-md' : ''}`}>
          <div className="p-1 w-48 m-auto bg-black rounded-lg border border-white border-opacity-25">
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
                <p className="min-h-[50px] font-rale tracking-widest text-sm">
                  {starship.model}
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex">
            <span className="font-bold  font-lato">Hyperdrive </span>
            <span className="font-lato">:  {starship.hyperdrive_rating}</span>
          </div>
        </div>

        {/* renders a div that says click for details if is hovered */}
        {isHovered && (
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold"
            >
              Click for details
            </div>
        )}
      </motion.div>
  );
};

export default memo(Card);