import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  function login() {
    setUser({name: 'amir'});
  }
  function logOut() {
    setUser(null);
  }
  return (
    <div>
      {
        user ? 
          <div>
            <h1>Hello there {user.name}</h1> 
            <button type='button' className="btn" onClick={logOut}>Logout</button>
          </div>:
          <div>
              <h1>Please login</h1>
              <button type='button' className="btn" onClick={login}>Login</button>
          </div>
      }
    </div>
  )
};

export default UserChallenge;
