import { useState } from "react";

const UseStateGotcha = () => {
const [value, setValue] = useState(0);
  return <>
    <h1>{value}</h1>
    <button className="btn" type="button" onClick={ () => {
      // setValue(currentValue => {
      //   const newState = currentValue + 1;
      //   return newState;
      // })
      setTimeout(() => {
        setValue(currentValue => {
          return currentValue + 1;
        })
      }, 3000)
      console.log(value)
    }
      }>increment</button>
  </>
};

export default UseStateGotcha;
