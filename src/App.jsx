import { useState } from "react";
import Card2 from "./components/Card2";
import Card1 from "./components/Card1";
import Form from "./components/Form";
import Thanks from "./components/Thanks";

function App() {
  const [card1, setCard1] = useState({
    cardName: "",
    cardNumber: "",
    cardYear: "",
    cardMonth: "",
  });
  const [card2, setCard2] = useState();
  const [showThanks, setShowThanks] = useState(false);

  function resetCard() {
    setCard1({
      cardName: "",
      cardNumber: "",
      cardYear: "",
      cardMonth: "",
    });
  }

  return (
    <div className="flex">
      <div className=" sm:w-3/5 h-screen  min-h-full specialgradient"></div>
      {/* 0000 0000 0000 0000 Jane Appleseed 00/00 000 Cardholder Name e.g. Jane
      Appleseed Card Number e.g. 1234 5678 9123 0000 Exp. Date (MM/YY) MM YY CVC
      e.g. 123 Confirm Thank you! We've added your card details Continue{" "} */}
      <Card1
        name={card1.cardName}
        number={card1.cardNumber}
        month={card1.cardMonth}
        year={card1.cardYear}
      />

      <Card2 number={card2} />

      <div className="flex justify-center items-center  h-screen min-h-full w-full">
        {showThanks ? (
          <Thanks setShowThanks={setShowThanks} resetCard={resetCard} />
        ) : (
          <Form
            setCard1={setCard1}
            setCard2={setCard2}
            card2={card2}
            card1={card1}
            setShowThanks={setShowThanks}
          />
        )}
      </div>
    </div>
  );
}

export default App;
