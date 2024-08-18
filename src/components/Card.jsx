// import React from "react";
// import cardBack from "./../assets/card_back.png";
import PropTypes from "prop-types";

export default function Card({ result, onUpdate, backImageUrl, frontImageUrl }) {
  const handleClick = () => onUpdate(result);
  return (
    <button onClick={handleClick}>
      <img src={backImageUrl} alt="カード" width={80} />
      <img src={frontImageUrl} alt="カード" width={80} />
      <br />
      {result}
    </button>
  );
}

Card.propTypes = {
  result: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  backImageUrl: PropTypes.string.isRequired,
  frontImageUrl: PropTypes.string.isRequired,
};
