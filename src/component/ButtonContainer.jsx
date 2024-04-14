import css from "./ButtonContainer.module.css";

function ButtonContainer({ onButtonClick }) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={css.buttonContainer}>
      {buttonNames.map((buttonName) => (
        <button className={css.button} onClick={()=> onButtonClick(buttonName)}>
          {buttonName}
        </button>
      ))}
    </div>
  );
}
export default ButtonContainer;
