import PropTypes from "prop-types";

export default function Card({ result, backImageUrl, frontImageUrl, color, backgroundColor, fliped, flipNotice, id }) {
  console.log("Card Component", id);
  function handleClick() {
    flipNotice(id, !fliped);
  }

  return (
    <button onClick={handleClick}>
      <div className="image-wrapper">
        <img src={backImageUrl} alt="カード" width={300} height={440} className={fliped ? "active" : ""} />
        <img src={frontImageUrl} alt="カード" width={300} height={440} className={`back-image ${fliped ? "active" : ""}`} />
      </div>
      <span className={fliped ? "active" : ""} style={{ color: color, backgroundColor: backgroundColor }}>
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
  flipNotice: PropTypes.func,
  id: PropTypes.number,
};
