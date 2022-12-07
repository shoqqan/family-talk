import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {LoginPage} from "./components/LoginPage/LoginPage";

function App() {
    const logo = 'https://upload.wikimedia.org/wikipedia/commons/4/4e/VK_Compact_Logo.svg'
    return (
        <BrowserRouter>
            {/*<Routes>*/}
            {/*    <Route path={'/login'} element={<LoginPage/>}></Route>*/}
            {/*</Routes>*/}
            <div className="App">


                <Header imgSrc={logo}/>
                <Navbar/>
                <div className='App-content'>
                    <Routes>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/profile'} element={<Profile/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
