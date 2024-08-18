// import { useState } from 'react'
import "./App.css";
import Card from "./components/Card";
import cardBack from "./assets/card_back.png";
import card01 from "./assets/card_01.png";
import card02 from "./assets/card_02.png";
import card03 from "./assets/card_03.png";
import card04 from "./assets/card_04.png";
import card05 from "./assets/card_05.png";

const cards = [
  {
    id: 1,
    result: "Excellent",
    backImageUrl: cardBack,
    frontImageUrl: card01,
  },
  {
    id: 2,
    result: "Good",
    backImageUrl: cardBack,
    frontImageUrl: card02,
  },
  {
    id: 3,
    result: "Average",
    backImageUrl: cardBack,
    frontImageUrl: card03,
  },
  {
    id: 4,
    result: "Poor",
    backImageUrl: cardBack,
    frontImageUrl: card04,
  },
  {
    id: 5,
    result: "Bad",
    backImageUrl: cardBack,
    frontImageUrl: card05,
  },
];

const randomCards = [];

while (cards[0]) {
  const randomNumber = Math.floor(Math.random() * cards.length);
  randomCards.push(cards.splice(randomNumber, 1)[0]);
}

function App() {
  return (
    <div className="wrapper">
      <h1>Omikuji (Fortune)</h1>

      <ul>
        {randomCards.map((card) => {
          return (
            <li key={card.id}>
              <Card result={card.result} backImageUrl={card.backImageUrl} frontImageUrl={card.frontImageUrl} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
