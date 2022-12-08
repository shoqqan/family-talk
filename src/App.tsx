import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {LoginPage} from "./components/LoginPage/LoginPage";
import Settings from "./components/Settings/Settings";
import {Outlet} from "react-router-dom"
function App() {
    const logo = 'https://upload.wikimedia.org/wikipedia/commons/4/4e/VK_Compact_Logo.svg'
    return (
        <>

            <div className="App">

                <Header imgSrc={logo}/>
                <Navbar/>
                <div className='App-content'>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default App;
