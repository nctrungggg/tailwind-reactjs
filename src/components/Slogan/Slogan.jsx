import React from "react";
import Cards from "../../assets/desktop/isocard.svg";

Slogan.propTypes = {};

function Slogan(props) {
  return (
    <section
      className="flex gap-y-10 flex-col item-center mt-16 
    md:mt-[100px] md:flex-row justify-between xl:mt-32"
    >
      <div className=" font-semibold text-center md:text-left md:min-w-[366px] lg:min-w-[400px]">
        <h1 className="text-5xl md:text-7xl xl:text-8xl">
          Earn <span className="text-purple-400">More</span>
        </h1>
        <h1 className="text-4xl md:text-6xl xl:text-7xl">Pay Less</h1>
        <button
          className="inline-block mt-7 font-medium text-18 px-14 py-[8px] rounded-md transition-all  bg-violet-700 text-white hover:bg-purple-700  shadow-lg shadow-purple-500/50
        
        md:mt-10 md:px-20 md:py-3 xl:text-4xl xl:mt-20 xl:px-32 xl:py-4 "
        >
          Start
        </button>
      </div>

      <div className="mt-[-30px]">
        <img className="w-full object-cover" src={Cards} alt="Cards images" />
      </div>
    </section>
  );
}

export default Slogan;
