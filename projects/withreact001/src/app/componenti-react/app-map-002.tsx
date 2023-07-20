import * as React from "react";
import { Utente } from "./models";
const users: Utente[] = [
    { id: 1, name: 'Fabio' },
    { id: 2, name: 'Lorenzo' },
    { id: 3, name: 'Silvia' }
];

const AppMap002 = ( ) => {
    return (
        <React.Fragment>
            {
            users.map((user:Utente) => {
                return <li key={user.id}>{user.name}</li>
            })
            }
        </React.Fragment>
    )
};

export default AppMap002;