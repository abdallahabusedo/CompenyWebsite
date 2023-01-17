import React from "react";

function Body() {
  return (
    <div className="flex flex-col text-center justify-center items-center gap-4 h-[70vh] ">
      <p className="text-[40px] font-extrabold text-white z-50">
        This is the company name
      </p>
      <p className="text-[16px] font-extrabold text-white z-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi
        laborum tempora
      </p>
      <button className="border border-white px-[15px] py-[5px] text-white rounded-lg">
        Contact us
      </button>
    </div>
  );
}

export default Body;
