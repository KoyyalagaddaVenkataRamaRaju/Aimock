import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie'
import "./Signin.css";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login', { email, password })
            .then(result => {
                console.log("Result:", result.data);
                if (result.data.token) { 
                    Cookies.set('jwt_token', result.data.token,{expires:50000}); 
                    navigate('/home');
                } else {
                    alert("Incorrect username or password");
                }
            })
            .catch(err => {
                console.error(err);
                alert("An error occurred. Please try again.");
            });
    };

    return (
        <div className="container-register">
            <div className="signimg">
                <img src="./sign_img.jpg" alt="" />
            </div>
            <div className="box-register">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-box1">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-box1">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            name="password" 
                            className="form-control" 
                            autoComplete="current-password" // Add this attribute
                            onChange={(e) => setPassword(e.target.value)} 
                        />

                    </div>
                    <button type="submit" className="sub-btn1">
                        Login
                    </button>
                </form>
                <p>Don't Have an Account?</p>
                <Link to="/" className="next-btn1">
                    Sign Up
                </Link>
            </div>
        </div>
    );
}

export default Signin;
