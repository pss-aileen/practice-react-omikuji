// import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import cards from "./utils/Cards";

function randomNumber() {
  return Math.floor(Math.random() * 4);
}

const appCards = [...cards];

function App() {
  return (
    <div className="wrapper">
      <h1 style={{ color: appCards[randomNumber()]["color"] }}>FORTUNE</h1>

      <Cards />

      <footer>
        <p>
          created by&nbsp;
          <a href="https://github.com/pss-aileen" style={{ color: appCards[randomNumber()]["color"] }}>
            Aileen
          </a>
          ,&nbsp;
          <a href="https://github.com/pss-aileen/practice-react-omikuji" style={{ color: appCards[randomNumber()]["color"] }}>
            GitHub
          </a>
        </p>
        <p>
          materials from&nbsp;
          <a href="https://www.irasutoya.com/" target="_blank" style={{ color: appCards[randomNumber()]["color"] }}>
            Irasutoya
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
