import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';
import "./Signin.css";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");  // Added state for role selection
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!role) {
            alert("Please select a role.");
            return;
        }

        axios.post('http://localhost:5000/login', { email, password, role })  // Pass role to backend
            .then(result => {
                console.log("Result:", result.data);
                if (result.data.token) {
                    // Set the JWT token in Cookies
                    Cookies.set('jwt_token', result.data.token, {expires: 50000});

                    // Check the role and navigate accordingly
                    const userRole = result.data.role;  // This comes from the backend (either 'admin', 'student', or 'other')

                    if (userRole === 'admin') {
                        navigate('/dashboard');  // Navigate to admin dashboard
                    } else {
                        navigate('/home');  // Navigate to home for student or other roles
                    }
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
                            autoComplete="current-password" 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    
                    {/* Role Selection Dropdown */}
                    <div className="input-box1">
                        <label htmlFor="role">
                            <strong>Role</strong>
                        </label>
                        <select
                            name="role"
                            className="form-control" 
                            onChange={(e) => setRole(e.target.value)}
                            value={role}
                        >
                            <option value="">Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="student">Student</option>
                            <option value="other">Other</option>
                        </select>
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
