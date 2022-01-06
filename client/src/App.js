import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
// Redux
import {Provider} from "react-redux";
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar/>
                <Alert />
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <React.Fragment key="container">
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </React.Fragment>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};
export default App;
