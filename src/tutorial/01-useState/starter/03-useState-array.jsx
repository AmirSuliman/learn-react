import {data} from "../../../data"
import React from "react";
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    const newPeople =people.filter( person => person.id !== id )
    setPeople(newPeople);
  }
  return (
    <div>
      {people.map((person) => {
        const {id, name} = person;
        return(
          <div key={id}>
            <h1>{name}</h1>
            <button type="button" onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button 
        style={{marginTop: "2rem"}} 
        className="btn" type="button" 
        onClick={() => setPeople([]) }
      >
        remove items
      </button>
    </div>
  );
};

export default UseStateArray;
