import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  // fetch users from the api
  const fetchUser = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://jsonplaceholder.typicode.com/users',
      headers: { }
    };
    
    axios.request(config)
    .then((response) => {
      const data = response.data
      setUsers(data)
      // console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    
  }

  useEffect(() => {
    fetchUser();
  }, []);

  console.log("user list", users
  )
  return (
    <div>
     <h1>User List</h1>
     {users?.map((user) => (
      <div>
        <h3>{user.name}</h3>
        <p>{user.id}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>

      </div>
     ))}
    </div>
  );
}
export default UserList;