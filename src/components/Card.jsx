// import React from "react";

import PropTypes from "prop-types";
import { useState } from "react";

export default function Card({ result, onUpdate, backImageUrl, frontImageUrl }) {
  const [imageUrl, setImageUrl] = useState(backImageUrl);
  const [active, setActice] = useState(false);
  function handleClick() {
    onUpdate(result);
    setImageUrl((url) => (url === backImageUrl ? frontImageUrl : backImageUrl));
    setActice((boolean) => (boolean ? false : true));
  }
  return (
    <button onClick={handleClick}>
      <img src={imageUrl} alt="カード" width={80} />
      <span className={active ? "active" : ""}>{result}</span>
    </button>
  );
}

Card.propTypes = {
  result: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  backImageUrl: PropTypes.string.isRequired,
  frontImageUrl: PropTypes.string.isRequired,
};
