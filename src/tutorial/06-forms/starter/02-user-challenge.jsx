import { useState } from "react";
import { data } from "../../../data"

const UserChallenge = () => {
  
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name) return
    const fakeId = Date.now();
    const newUsers = { id:fakeId, name:name }
    const updatedUsers = [...data, newUsers]
    setUsers(updatedUsers)
    setName('');
  }

  const removeHandle = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id)
    setUsers(updatedUsers)
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>Users</h2>
      {users.map( user => {
        return <div>
          <h4 key={user.id}>{user.name}</h4>
          <button className="btn" onClick={() => removeHandle(user.id)}>remove</button>
        </div>
      } )}
    </div>
  );
};
export default UserChallenge;
