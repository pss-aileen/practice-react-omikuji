// import { useState } from 'react'
import "./App.css";
import Card from "./components/Card";
import randomCards from "./utils/Cards";

function randomNumber() {
  return Math.floor(Math.random() * 4);
}

function App() {
  return (
    <div className="wrapper">
      <h1 style={{ color: randomCards[randomNumber()]["color"] }}>FORTUNE</h1>

      <ul>
        {randomCards.map((card) => {
          return (
            <li key={card.id}>
              <Card result={card.result} backImageUrl={card.backImageUrl} frontImageUrl={card.frontImageUrl} color={card.color} backgroundColor={card.backgroundColor} />
            </li>
          );
        })}
      </ul>

      <footer>
        <p>
          created by&nbsp;
          <a href="https://github.com/pss-aileen" style={{ color: randomCards[randomNumber()]["color"] }}>
            Aileen
          </a>
          ,&nbsp;
          <a href="https://github.com/practice-react-omikuji" style={{ color: randomCards[randomNumber()]["color"] }}>
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
