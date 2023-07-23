import * as React from "react";
import { Admin } from "./Admin";
import { Home } from "./Home";
import { Login } from "./Login";
import { Catalog } from "./Catalog";
type Page = 'home' | 'admin' | 'login' | 'catalog';

function AppBase() {

    const [page, setPage] = React.useState<Page>('home');

    function getPage() {
        switch (page) {
            case "home": return <Home />
            case "admin": return <Admin />
            case "login": return <Login />
            case "catalog": return <Catalog />
        }
    }

    return (
        <>
            <div>
                <button className="ml-2 btn btn-primary" onClick={() => setPage('home')}>Home</button>
                <button className="ml-2 btn btn-primary" onClick={() => setPage('admin')}>Admin</button>
                <button className="ml-2 btn btn-primary" onClick={() => setPage('login')}>Login</button>
                <button className="ml-2 btn btn-primary" onClick={() => setPage('catalog')}>Catalog</button>
                <hr />
                <div className="m-5">
                    {getPage()}
                </div>

            </div>
        </>
    )
}

export default AppBase