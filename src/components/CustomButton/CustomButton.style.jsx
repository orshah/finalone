import "./customButton.style.css";

const CustomButton = ({ text, type, onClickHandler }) => {
  return (
    <button className={`${type}`} onClick={onClickHandler}>
      {text}
    </button>
  );
};
export default CustomButton;
