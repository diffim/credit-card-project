import React from "react";
function card1(props) {
  return (
    <div className="bg-[url(/images/bg-card-front.png)] flex justify-center items-center flex-col overflow-hidden   px-20  absolute z-10 top-[14%] left-[18%] w-[550px] bg-cover rounded-b-xl h-[300px]">
      <div className="scale-110">
        <div className="mb-16 mr-auto  ">
          <svg
            width="84"
            height="47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
            <path
              d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
              stroke="#fff"
            />
          </svg>
        </div>

        <p className="text-4xl mb-7  align-bottom  font-semibold text-white">
          {props.number || "XXXX XXXX XXXX XXXX"}
        </p>
        <div className="flex w-full ">
          <p className="font-semibold text-white  overflow-hidden text-xl w-full ">
            {props.name || "kdiffim"}{" "}
          </p>
          <p className="font-semibold ml-2  text-white text-xl ">
            {props.month || "00"}/{props.year || "00"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default card1;
