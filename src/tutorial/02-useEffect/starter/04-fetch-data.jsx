const url = 'https://api.github.com/users';
import { useState, useEffect } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        console.log(response);
        const users = await response.json();
        setUsers(users);
        console.log(users)
      }catch (error){
        console.log(error);
      }
    }
    fetchData();
  },[])
  return (
    <section>
      <h3>GitHub users</h3>
    <ul className="users">
        {users.map(user => {
          const {id, login, avatar_url, html_url} = user;
          return <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h5>{login}</h5>
              <a href={html_url}>profile</a>
            </div>
          </li> 
        })}
      </ul> 
    </section>
  )
};
export default FetchData;
