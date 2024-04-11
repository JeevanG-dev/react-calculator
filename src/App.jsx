import Display from "./component/Display";
import css from "./App.module.css";
import ButtonContainer from "./component/ButtonContainer";

function App() {
  return (
    <div className={css.calculator}>
      <Display></Display>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}

export default App;
