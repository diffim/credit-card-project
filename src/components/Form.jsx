import React from "react";
import Cleave from "cleave.js/react";

function Form(props) {
  function handleInput(e) {
    props.setCard1((prevCard) => {
      return {
        ...prevCard,
        [e.target.name]: e.target.value,
      };
    });
  }
  console.log(props.card1);

  console.log(props.card2);
  return (
    <div
      className=" grid grid-cols-5 w-[500px]
      ml-40 mt-10 relative
      "
    >
      <div className={` mb-12 col-span-5`}>
        <p className=" mb-2 ">CARDHOLDER NAME</p>
        <input
          onChange={(e) => handleInput(e)}
          placeholder="e.g kdiffin!!!"
          name="cardName"
          maxLength={50}
          value={props.card1.cardName}
          spellCheck="false"
          className={`     p-5  w-full border-gray-700 border  rounded-lg inputclass `}
        />
      </div>

      <div className={` mb-12 col-span-5`}>
        <p className=" mb-2 ">CARD NUMBER</p>
        <Cleave
          placeholder="XXXX XXXX XXXX XXXX"
          onChange={(e) => handleInput(e)}
          value={props.card1.cardNumber}
          name="cardNumber"
          options={{
            creditCard: true,
          }}
          className={`     p-5  w-full border-gray-700 border  rounded-lg inputclass `}
        />{" "}
      </div>

      <div className="col-span-5 flex mb-2 ">
        <p>EXP. DATE (MM/YY)</p> <p className="ml-auto mr-auto">CVC</p>{" "}
      </div>

      <div className={` mb-14`}>
        <p className=" mb-2 ">{props.name}</p>
        <Cleave
          placeholder="MM"
          onChange={(e) => handleInput(e)}
          value={props.card1.cardMonth}
          name="cardMonth"
          options={{
            blocks: [2],
            numericOnly: true,
          }}
          className={`     p-5  w-full border-gray-700 border  rounded-lg inputclass `}
        />{" "}
      </div>

      <div className={` mb-14`}>
        <p className=" mb-2 ">{props.name}</p>
        <Cleave
          placeholder="YY"
          onChange={(e) => handleInput(e)}
          name="cardYear"
          value={props.card1.cardYear}
          options={{
            blocks: [2],
            numericOnly: true,
          }}
          className={`  ml-5   p-5  w-full border-gray-700 border  rounded-lg inputclass `}
        />{" "}
      </div>

      <div className={`col-span-2 mb-14`}>
        <p className=" mb-2 ">{props.name}</p>
        <Cleave
          placeholder="CVC"
          onChange={(e) => props.setCard2(e.target.value)}
          value={props.card2}
          options={{
            blocks: [3],
            numericOnly: true,
          }}
          className={
            "ml-24   p-5   w-full border-gray-700 border  rounded-lg inputclass"
          }
        />{" "}
      </div>

      <button
        onClick={() => props.setShowThanks(true)}
        className="p-5 col-span-5 
      
      text-xl text-white  bg-[#8c38bc] flex items-center text-center justify-center  rounded-lg active:scale-95 "
      >
        Confirm
      </button>
    </div>
  );
}

export default Form;
