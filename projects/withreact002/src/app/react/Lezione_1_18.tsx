import * as React from "react";


const initialState = [
  { id: 1, name: 'Fabio' },
  { id: 2, name: 'Lorenzo' },
  { id: 3, name: 'Silvia' }
];

function Lezione_1_18() {
  const [users, setUsers] = React.useState(initialState);

  function addUser() {
    const newUser = { id: Date.now(), name: `user ${Math.random()}`}
    setUsers(s => [...s, newUser])
  }

  return (
    <>
      {
        users.map(user => {
          return <li key={user.id}>{user.name}</li>
        })
      }
      <button onClick={addUser}>Add</button>
    </>
  )
}

export default Lezione_1_18;
