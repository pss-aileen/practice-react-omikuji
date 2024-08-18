// import React from "react";

import PropTypes from "prop-types";
import { useState } from "react";

export default function Card({ result, backImageUrl, frontImageUrl, color, backgroundColor }) {
  const [imageUrl, setImageUrl] = useState(backImageUrl);
  const [isButtonActive, setIsButtonActive] = useState(false);
  function handleClick() {
    setImageUrl((url) => (url === backImageUrl ? frontImageUrl : backImageUrl));
    setIsButtonActive((boolean) => (boolean ? false : true));
  }

  return (
    <button onClick={handleClick}>
      <img src={imageUrl} alt="カード" width={300} height={440} />
      <span className={isButtonActive ? "active" : ""} style={{ color: color, backgroundColor: backgroundColor }}>
        {result}
      </span>
    </button>
  );
}

Card.propTypes = {
  result: PropTypes.string.isRequired,
  backImageUrl: PropTypes.string.isRequired,
  frontImageUrl: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};
