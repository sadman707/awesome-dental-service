import React, { createContext, useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    console.log("history==", history);
    console.log("location==", location);
    console.log("auth==", auth);
    let { from } = location.state || { from: { pathname: "/" } };
    console.log("from", from);

    return (
        <div className="login-form">
            <div>
                <h2>Please Log in to proceed</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter your password" />
                    <br />
                    <input className="signIn-button" type="submit" value="Submit" />

                </form>
                <p>new to my website <Link to="/register">Sign Up</Link> </p>
                <div>You can also do this sign in</div>
                <button
                    className="signIn-button"
                    onClick={signInUsingGoogle}
                >Google Sign In</button>
            </div>

        </div>
    );
};

export default Login;