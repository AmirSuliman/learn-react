import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  function clickHandle() {
    setCount(count + 1);
  }  
  function clickHandle1() {
    setCount(count - 1);
  }  
  function clickHandle2() {
    setCount(0);
  }  
  return (
    <>
      <h2>You Clicked {count} Times</h2> 
      <button type="button" className="btn" onClick={clickHandle}>increase</button> 
      <button style={{marginLeft:"1rem",marginRight:"1rem"}} type="button" className="btn" onClick={clickHandle1}>decrease</button> 
      <button type="button" className="btn" onClick={clickHandle2}>clear</button> 
    </>
  )
};

export default UseStateBasics;
