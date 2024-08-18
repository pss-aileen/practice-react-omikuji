// import { useState } from 'react'
import "./App.css";
import Card from "./components/Card";
import cardBack from "./assets/card_back.png";
import card01 from "./assets/card_01.png";
import card02 from "./assets/card_02.png";
import card03 from "./assets/card_03.png";
import card04 from "./assets/card_04.png";
import card05 from "./assets/card_05.png";
import { useState } from "react";

const cards = [
  {
    id: 1,
    result: "大吉",
    backImageUrl: cardBack,
    frontImageUrl: card01,
  },
  {
    id: 2,
    result: "中吉",
    backImageUrl: cardBack,
    frontImageUrl: card02,
  },
  {
    id: 3,
    result: "小吉",
    backImageUrl: cardBack,
    frontImageUrl: card03,
  },
  {
    id: 4,
    result: "吉",
    backImageUrl: cardBack,
    frontImageUrl: card04,
  },
  {
    id: 5,
    result: "凶",
    backImageUrl: cardBack,
    frontImageUrl: card05,
  },
];

function App() {
  const [result, setResult] = useState("おみくじ結果");

  const update = (result) => {
    setResult(result);
  };

  return (
    <div className="wrapper">
      <h1>Omikuji</h1>

      <p>{result}</p>

      <ul>
        {cards.map((card) => {
          return (
            <li key={card.id}>
              <Card result={card.result} backImageUrl={card.backImageUrl} frontImageUrl={card.frontImageUrl} onUpdate={update} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
