import React, {useEffect} from 'react';
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
import Dashboard from "./components/dashboard/dashboard";
// import PrivateRoute from "./components/routing/PrivateRoute";

// Redux
import {Provider} from "react-redux";
import store from './store';
import {loadUser} from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";


if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar/>
                <Alert/>
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <React.Fragment key="container">
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/dashboard" element={<Dashboard />}/>
                        {/*<PrivateRoute path="/dashboard" element={<Dashboard />}/>*/}
                    </React.Fragment>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};
export default App;
