// import React from "react";
import cardBack from "./../assets/card_back.png";
import PropTypes from "prop-types";

export default function Card({ result, onUpdate }) {
  const handleClick = () => onUpdate(result);
  return (
    <button>
      <img src={cardBack} alt="カード" width={80} onClick={handleClick} />
      <br />
      {result}
    </button>
  );
}

Card.propTypes = {
  result: PropTypes.string,
  onUpdate: PropTypes.func,
};
