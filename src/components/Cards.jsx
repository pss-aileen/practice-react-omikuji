import { useState } from "react";
import Card from "./../components/Card";
import cards from "./../utils/Cards";

const cardsCards = [...cards];

const initialRandomCards = [];

while (cardsCards[0]) {
  const randomNumber = Math.floor(Math.random() * cardsCards.length);
  initialRandomCards.push(cardsCards.splice(randomNumber, 1)[0]);
}

export default function Cards() {
  const [randomCards, setRandomCards] = useState(initialRandomCards);
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <>
      <ul className={isLoading ? "loading" : ""}>
        {/* <ul> */}
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
    </>
  );
}
