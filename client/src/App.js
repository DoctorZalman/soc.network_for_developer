import React, {useEffect, useState} from 'react';
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
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-forms/CreateProfile";
import EditProfile from "./components/profile-forms/EditProfile";
import Spinner from "./components/layout/Spinner";

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
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        await store.dispatch(loadUser()); // dispatch returns promise
        setLoading(false); // set loading state to false
    }, []);

    if (loading) {
        return <Spinner/> // load this when page is getting data
    }
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Alert/>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/create-profile" element={<CreateProfile/>}/>
                    <Route path="/edit-profile" element={<EditProfile/>}/>
                    {/*<PrivateRoute path="/dashboard" element={<Dashboard />}/>*/}
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};
export default App;
