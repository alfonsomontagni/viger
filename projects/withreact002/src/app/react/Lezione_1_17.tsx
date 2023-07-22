import * as React from "react";


const users = [
  { id: 1, name: 'Fabio' },
  { id: 2, name: 'Lorenzo' },
  { id: 3, name: 'Silvia' }
];

function Lezione_1_17() {

  return (
    <>
      {
        users.map(user => {
          return <li key={user.id}>{user.name}</li>
        })
      }
    </>
  )
}

export default Lezione_1_17;
