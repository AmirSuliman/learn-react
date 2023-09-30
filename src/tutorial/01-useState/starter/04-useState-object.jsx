import { useState } from 'react';

const UseStateObject = () => {
  const person = {
    name: 'Amir Suliman',
    age: 25,
    hooby: 'YouTube Shorts'
  }

  const [people, setPeople] = useState(person);
  const {name, age, hooby} = people;

  function changePerson() {
    // setPeople({
    //   name: 'Wisal',
    //   age: 24,
    //   hooby: 'book reading'
    // })

    setPeople({...people, name: 'Shams'})
  }
  return <>
    <h1>{name}</h1>
    <h2>{age}</h2>
    <h5>{hooby}</h5>
    <button type='button' onClick={changePerson}>show wisal</button>
  </>
};

export default UseStateObject;
