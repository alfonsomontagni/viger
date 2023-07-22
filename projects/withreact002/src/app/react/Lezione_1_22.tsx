import * as React from "react";
import { User } from "./model/user";
//import { useEffect, useState } from 'react';
import axios from 'axios';

function Lezione_1_22() {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
  }, [])

  function addUser() {
    axios.post<User>('https://jsonplaceholder.typicode.com/users', {
      name: `name ${Math.random()}`
    })
      .then(res => setUsers(s => [...s, res.data]))
  }

  return (
    <>
      {
        users.map(user => {
          return (
            <li key={user.id}>{user.name}</li>
          )
        })
      }
      <button onClick={addUser}>Add</button>
    </>
  )
}


export default Lezione_1_22;
