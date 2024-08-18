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

function App() {
  const [randomCards, setRandomCards] = useState(initialRandomCards);
  const [isLoading, setIsLoading] = useState(false);

  function reset() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);

    setTimeout(() => {
      const newArray = randomCards.map((card) => {
        card.fliped = false;
        return card;
      });

      const newnewArray = [];

      while (newArray[0]) {
        const randomNumber = Math.floor(Math.random() * newArray.length);
        newnewArray.push(newArray.splice(randomNumber, 1)[0]);
      }

      setRandomCards(newnewArray);
    }, 400);
  }

  function flipNotice(id, boolean) {
    const newArray = randomCards.map((card) => {
      if (card["id"] === id) {
        card.fliped = boolean;
        return card;
      }
      return card;
    });

    setRandomCards(newArray);
  }

  return (
    <div className="wrapper">
      <h1 style={{ color: randomCards[randomNumber()]["color"] }}>FORTUNE</h1>

      <ul className={isLoading ? "loading" : ""}>
        {randomCards.map((card) => {
          return (
            <li key={card.id}>
              <Card result={card.result} backImageUrl={card.backImageUrl} frontImageUrl={card.frontImageUrl} color={card.color} backgroundColor={card.backgroundColor} fliped={card.fliped} flipNotice={flipNotice} id={card.id} />
            </li>
          );
        })}
      </ul>

      <button onClick={reset} className="reset-button">
        Reset
      </button>

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
