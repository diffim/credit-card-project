import React from "react";

function Card2(props) {
  return (
    <div className="bg-[url(/images/bg-card-back.png)] text-xl text-white absolute z-10 top-[52%] left-[24%] w-[550px] bg-cover rounded-b-xl h-[300px]">
      <div className="absolute top-[8.25rem] left-[28rem]">
        {props.number || "000"}
      </div>
    </div>
  );
}

export default Card2;
