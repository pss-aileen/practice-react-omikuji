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

console.log("outside App");

function App() {
  const [randomCards, setRandomCards] = useState(initialRandomCards);
  console.log("App Component Render");

  function reset() {
    const newArray = randomCards.map((card) => {
      card.fliped = false;
      return card;
    });

    setRandomCards(newArray);
    console.log(randomCards);
  }

  function flipNotice(result, result2) {
    console.log("flipしたぞ", result, result2);
    const newArray = randomCards.map((card) => {
      if (card["id"] === result) {
        card.fliped = result2;
        return card;
      }
      return card;
    });

    setRandomCards(newArray);
    console.log(randomCards);
  }

  return (
    <div className="wrapper">
      <h1 style={{ color: randomCards[randomNumber()]["color"] }}>FORTUNE</h1>

      <ul>
        {randomCards.map((card) => {
          return (
            <li key={card.id}>
              <Card result={card.result} backImageUrl={card.backImageUrl} frontImageUrl={card.frontImageUrl} color={card.color} backgroundColor={card.backgroundColor} fliped={card.fliped} flipNotice={flipNotice} id={card.id} />
            </li>
          );
        })}
      </ul>

      <button onClick={reset}>りせっと</button>

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
