import React, { createContext, useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    console.log('came from', location.state?.from);



    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }


    const handleEmailChange = e => {
        setEmail(e.target.value);
        e.preventDefault();
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
        e.preventDefault();
    }

    const handleRegistration = e => {
        console.log(email, password);
        e.preventDefault();
    }

    return (
        <div className="login-form">
            <div>
                <h3 className="text-primary">Please Log in to proceed</h3>


                <form onSubmit={handleRegistration}>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Example checkbox
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>



                <p>new to my website? <Link to="/register">Sign Up</Link> </p>
                <div>You can also do this sign in</div>
                <button
                    className="btn btn-outline-primary"
                    // onClick={signInUsingGoogle}
                    onClick={handleGoogleLogIn}
                >Google Sign In</button>
            </div>

        </div>
    );
};

export default Login;