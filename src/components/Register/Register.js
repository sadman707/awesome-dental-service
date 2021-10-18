import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="Register-form">
            <div>
                <h2>Register your Account</h2>
                <form onSubmit="">
                    <input type="text" name="" id="" placeholder="Enter your name" />
                    <br />
                    <input type="email" name="" id="" placeholder="Enter your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter your password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Confirm Your Password" />
                    <br />
                    <input className="register-button" type="submit" value="Submit" />

                </form>
                <p>Already have an account? <Link to="/login">Log In</Link> </p>

                <div>You can also do this sign in</div>
                <button className="signIn-button">Google Sign In</button>

            </div>

        </div>
    );
};

export default Register;