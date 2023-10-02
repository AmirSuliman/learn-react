import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "default value"}</h2>
      {/* {text && <div>
        <h2>Whatever returns</h2>
        <h3>{name}</h3>
      </div>} */}
      {/* {!text && <div>
        <h2>Whatever returns</h2>
        <h3>{name}</h3>
      </div>} */}
    {user && <SomeComponent name={user.name}/>}
    <h2 style={{margin: "1rem 0"}}>ternory operator</h2>
    <button className='btn'>{isEditing ? 'edit': 'add'}</button>
    { user ? 
      <div>
        <h3>hello there {user.name}</h3>
      </div>: 
      <div>
        <h3>Please login</h3>
      </div>
    }
    </div>
  )
};

function SomeComponent({name}){
  return (
    <div>
      <h2>Whatever returns</h2>
      <h2>{name}</h2>
    </div>
  )
}

export default ShortCircuitExamples;
