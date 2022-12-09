import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/store";

function App() {
    const isLogged = useSelector<AppStateType, boolean>(state => state.profilePage.isLogged)
    // if (!isLogged) {
    //     return <Navigate to={'/sign-in'}/>
    // }
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
