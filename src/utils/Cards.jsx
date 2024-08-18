import cardBack from "./../assets/card_back.png";
import card01 from "./../assets/card_01.png";
import card02 from "./../assets/card_02.png";
import card03 from "./../assets/card_03.png";
import card04 from "./../assets/card_04.png";
import card05 from "./../assets/card_05.png";

const cards = [
  {
    id: 1,
    result: "Excellent",
    backImageUrl: cardBack,
    frontImageUrl: card01,
    color: "#dc2626",
    backgroundColor: "#fee2e2",
    fliped: false,
  },
  {
    id: 2,
    result: "Good",
    backImageUrl: cardBack,
    frontImageUrl: card02,
    color: "#ea580c",
    backgroundColor: "#ffedd5",
    fliped: false,
  },
  {
    id: 3,
    result: "Average",
    backImageUrl: cardBack,
    frontImageUrl: card03,
    color: "#0891b2",
    backgroundColor: "#cffafe",
    fliped: false,
  },
  {
    id: 4,
    result: "Poor",
    backImageUrl: cardBack,
    frontImageUrl: card04,
    color: "#059669",
    backgroundColor: "#d1fae5",
    fliped: false,
  },
  {
    id: 5,
    result: "Bad",
    backImageUrl: cardBack,
    frontImageUrl: card05,
    color: "#7c3aed",
    backgroundColor: "#ede9fe",
    fliped: false,
  },
];

export default cards;
