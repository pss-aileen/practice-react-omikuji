// import React from "react";

import PropTypes from "prop-types";
import { useState } from "react";

export default function Card({ result, onUpdate, backImageUrl, frontImageUrl }) {
  // const handleClick = () => onUpdate(result);
  const [imageUrl, setImageUrl] = useState(backImageUrl);
  function handleClick() {
    onUpdate(result);
    setImageUrl((url) => (url === backImageUrl ? frontImageUrl : backImageUrl));
  }
  return (
    <button onClick={handleClick}>
      <img src={imageUrl} alt="カード" width={80} />
    </button>
  );
}

Card.propTypes = {
  result: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  backImageUrl: PropTypes.string.isRequired,
  frontImageUrl: PropTypes.string.isRequired,
};
