// import { useState } from 'react'
import "./App.css";
import Card from "./components/Card";
// import cardBack from "./assets/card_back.png";
import { useState } from "react";

/*
  @@ まず、カードを5つ用意して、それらに値をセット、ひいたら、その結果がディスプレイに出るようにする @@
  - liの中身を作成する
  - 値を手動でセットする
  - こぽんねーんとから、親へ値を渡す...？
  - 値を定数の配列に格納する（imgのURL、大吉とか）
  - クリックしたら、pに表示されるようにする

  @@ カードの値がランダムで最初にきまっていて、選んだらその値が表示される @@

  @@ カードに値と、表の画像を設定する。選んだらカードがひっくりかえって、結果が表示される @@

  完成度がすごくきになるけど、Reactを使えるようになることが目的なのでUIUXが多少ダメでもOK。

*/

// const cards = [
//   {
//     id: 1,
//     result: "大吉",
//     backImageUrl: cardBack,
//     frontImageUrl: "",
//   },
//   {
//     id: 2,
//     result: "大吉",
//     backImageUrl: "",
//     frontImageUrl: "",
//   },
//   {
//     id: 3,
//     result: "大吉",
//     backImageUrl: "",
//     frontImageUrl: "",
//   },
//   {
//     id: 4,
//     result: "大吉",
//     backImageUrl: "",
//     frontImageUrl: "",
//   },
//   {
//     id: 5,
//     result: "大吉",
//     backImageUrl: "",
//     frontImageUrl: "",
//   },
// ];

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
        <li>
          <Card result="大吉" onUpdate={update} />
        </li>
        <li>
          <Card result="中吉" onUpdate={update} />
        </li>
        <li>
          <Card result="小吉" onUpdate={update} />
        </li>
        <li>
          <Card result="吉" onUpdate={update} />
        </li>
        <li>
          <Card result="凶" onUpdate={update} />
        </li>
      </ul>
    </div>
  );
}

export default App;
