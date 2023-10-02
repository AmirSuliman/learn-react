import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState("Amir")


  return <div>
    {/* {if(someCondition){"You can't do this in JSX"}} */}
    <h3>Falsy OR: {text || "Hello world"}</h3>
    <h3>Falsy AND: {text && "Hello world"}</h3>
    <h3>Truthy OR: {name || "Hello world"}</h3>
    <h3>Truthy AND: {name && "Hello world"}</h3>
  </div>
};
export default ShortCircuitOverview;
