import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div>
      <button className="btn" type="button" onClick={() => {setToggle(!toggle)}}>toggle</button>
      {toggle && <SecondComponent />}
    </div>
  )
};
// the below useEffect will render each time it gets mount and unmount 
// because we render this component conditionaly as above
const SecondComponent = () => {
  useEffect(() => {
    console.log("initail render")
    // const intId = setInterval(() => {
    //   console.log("hello world")
    // }, 1000);
    // return () => {
    //   clearInterval(intId)
    // }

    // another use of clean up function
    function someFunc() {
      // some logic here
    }
    window.addEventListener('scroll', someFunc);
    return removeEventListener('scroll', someFunc);
  }, [])
  return (
    <h1>this is interesting</h1>
  )
}

export default CleanupFunction;
