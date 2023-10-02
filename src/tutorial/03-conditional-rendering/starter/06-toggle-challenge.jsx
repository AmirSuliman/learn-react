import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)
  const toggleAlert = () => {
    // if(showAlert){
    //   setShowAlert(false)
    //   return
    // }
    // setShowAlert(true)
    
    // this is same as above
    setShowAlert(!showAlert);
  }
  return (
    <div>
      <button className="btn" type="button" onClick={toggleAlert}>Show alert</button>
      {showAlert && <h1 className="alert alert-danger">this will be toggled</h1>}
    </div>
  )
};

export default ToggleChallenge;
