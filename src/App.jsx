import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import cards from "./utils/Cards";

const initialRandomCards = [];

while (cards[0]) {
  const randomNumber = Math.floor(Math.random() * cards.length);
  initialRandomCards.push(cards.splice(randomNumber, 1)[0]);
}

function randomNumber() {
  return Math.floor(Math.random() * 4);
}

const initialArray = 1;
console.log("outside App");

function App() {
  const [randomCards, setRandomCards] = useState(initialRandomCards);
  const [array, setArray] = useState(initialArray);
  console.log("initial");

  function handleClickReset() {
    setArray(Math.floor(Math.random() * 100));

    const currentCards = randomCards;

    const initialRandomCards = [];

    while (currentCards[0]) {
      const randomNumber = Math.floor(Math.random() * currentCards.length);
      initialRandomCards.push(currentCards.splice(randomNumber, 1)[0]);
    }

    const newArray = initialRandomCards.map((card) => {
      card.fliped = false;
      card.result = "変化だ！";
      return card;
    });

    console.log(newArray);

    setRandomCards(newArray);
    console.log("handleClickReset");
  }

  return (
    <div className="wrapper">
      <h1 style={{ color: randomCards[randomNumber()]["color"] }}>FORTUNE</h1>

      {array}

      <ul>
        {randomCards.map((card) => {
          return (
            <li key={card.id}>
              <Card result={card.result} backImageUrl={card.backImageUrl} frontImageUrl={card.frontImageUrl} color={card.color} backgroundColor={card.backgroundColor} fliped={card.fliped} />
            </li>
          );
        })}
      </ul>

      <button onClick={handleClickReset}>RESET</button>

      <footer>
        <p>
          created by&nbsp;
          <a href="https://github.com/pss-aileen" style={{ color: randomCards[randomNumber()]["color"] }}>
            Aileen
          </a>
          ,&nbsp;
          <a href="https://github.com/pss-aileen/practice-react-omikuji" style={{ color: randomCards[randomNumber()]["color"] }}>
            GitHub
          </a>
        </p>
        <p>
          materials from&nbsp;
          <a href="https://www.irasutoya.com/" target="_blank" style={{ color: randomCards[randomNumber()]["color"] }}>
            Irasutoya
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
