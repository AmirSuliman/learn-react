import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    async function multipleFetch() {
      try {
      const response = await fetch(url);
      const user = await response.json();
      console.log("data:", user);  
      setUser(user);
      }catch (error) {
        setIsError(true);
        console.log("Error occured...", error)
      } 
      setIsLoading(false);
    }
    multipleFetch();
  },[])
  if(isLoading) {
    return <h2>Loading...</h2>
  }
  return <div>
    <img style={{width: "25%", borderRadius: "25px"}} src={user.avatar_url} alt={user.name} />
    <h2>{user.name}</h2>
    <h3>Works at {user.company} </h3>
  </div>
};
export default MultipleReturnsFetchData;
