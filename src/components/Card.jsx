import PropTypes from "prop-types";
import { useState } from "react";

export default function Card({ result, backImageUrl, frontImageUrl, color, backgroundColor, fliped }) {
  // const [isButtonActive, setIsButtonActive] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(fliped);
  function handleClick() {
    setIsButtonActive((boolean) => (boolean ? false : true));
  }

  return (
    <button onClick={handleClick}>
      <div className="image-wrapper">
        <img src={backImageUrl} alt="カード" width={300} height={440} className={isButtonActive ? "active" : ""} />
        <img src={frontImageUrl} alt="カード" width={300} height={440} className={`back-image ${isButtonActive ? "active" : ""}`} />
      </div>
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
  fliped: PropTypes.bool,
};
