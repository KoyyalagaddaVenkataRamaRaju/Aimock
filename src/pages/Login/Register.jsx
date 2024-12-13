import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!role) {
            alert("Please select a role.");
            return;
        }

        const userData = { name, email, password, role };

        // Debugging log to check if data is correct
        console.log("Sending data to backend:", userData);

        axios.post('http://localhost:5000/register', userData)
            .then(result => {
                if (result.data === "Registration successful. Admin approval pending.") {
                    alert("Your request for admin access has been sent. Please wait for approval.");
                } else {
                    navigate('/login');
                }
            })
            .catch(err => {
                console.log('Frontend Error:', err);
                alert("An error occurred. Please try again.");
            });
    };

    return (
        <div className="container-register">
            <div className="regimg">
                <img src="../regimg.jpg" alt="Registration" />
            </div>
            <div className="box-register">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="role">
                            <strong>Select Role</strong>
                        </label>
                        <select
                            name="role"
                            className="form-control"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select a role</option>
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button type="submit" className="sub-btn">
                        Register
                    </button>
                </form>
                <p>Already Have an Account?</p>
                <Link to="/login" className="next-btn">
                    Sign in
                </Link>
            </div>
        </div>
    );
}

export default Register;
