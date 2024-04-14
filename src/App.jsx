import Display from "./component/Display";
import css from "./App.module.css";
import ButtonContainer from "./component/ButtonContainer";
import { useState } from "react";

function App() {
let [calVal,setCalVal] = useState("");

let operator = ['%','*','/','+','-']

function showValue (newBtn){
if(newBtn === 'C'){

  
  setCalVal('');
}

else if (newBtn === '='){


  const check = calVal[calVal.length -1]
if(operator.includes(check)){
  setCalVal(calVal.slice(0,-1))
  
}
const reult = eval(calVal)
setCalVal(reult)

}



else{
  const newDisplayValue = calVal + newBtn;
  setCalVal(newDisplayValue);
}
}

  
 

  return (
    <div className={css.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={showValue}></ButtonContainer>
    </div>
  );
}

export default App;
