import css from "./ButtonContainer.module.css";

function ButtonContainer() {
    const buttonNames =["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]
  return (
    <div className={css.buttonContainer}>

        {buttonNames.map((buttonName => <button className={css.button}>{buttonName}</button>))}
      
    </div>
  );
}
export default ButtonContainer;
