import * as React from "react";
import { Admin } from "./Admin";
import { Home } from "./Home";
import { Login } from "./Login";
import { Catalog } from "./Catalog";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

function AppBaseRouting() {



    return (
        <>
            <BrowserRouter>
                <button className="ml-2 btn btn-primary">Home</button>
                <button className="ml-2 btn btn-primary" >Admin</button>
                <button className="ml-2 btn btn-primary" >Login</button>
                <button className="ml-2 btn btn-primary" >Catalog</button>
                <hr />
                <Routes>
                    <Route path="home" element={<Home/>} />
                    <Route path="admin" element={<Admin/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="catalog" element={<Catalog/>} />
                    <Route path="/" element={
                        <Navigate to="home"/>
                    } />
                    <Route path="*" element={
                        <div>
                            <p>This page not exist</p>
                            <Link to="/">to home page</Link>
                        </div>
                    } />
                </Routes>
                <div className="m-5">
                    { /** */}
                </div>

            </BrowserRouter>
        </>
    )
}

export default AppBaseRouting