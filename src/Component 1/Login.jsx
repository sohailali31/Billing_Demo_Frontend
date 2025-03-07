import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import '../Component Css/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        axios.post(`http://localhost:8363/api/login?email=${email}&password=${password}`)
            .then(response => {
                if (response.data) {
                    // Navigate to welcome page with username from the response
                    navigate(`/welcome/${response.data.username}`);
                } else {
                    alert('Invalid credentials');
                }
            })
            .catch(error => {
                alert('Login failed');
            });
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <div className="input-group">
                    <FaEnvelope className="input-icon" />
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="input-group">
                    <FaLock className="input-icon" />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <button className="login-button" onClick={handleLogin}>Login</button>
                <p className="redirect-link">
                    Don't have an account? <a href="/register/bellarybilling+550+software&kk$" className="register-link">Register</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
