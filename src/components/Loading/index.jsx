import React from "react";

const index = () => {
  return (
    <>
      <div data-testid="loading"  className=" absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-32 w-32"></div>
        <p className="mt-20 font-rale text-3xl">Loading...</p>
      </div>
    </>
  );
};

export default index;
