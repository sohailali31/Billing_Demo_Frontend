import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaUserAlt, FaEnvelope, FaLock, FaUserTie } from 'react-icons/fa';
import '../Component Css/Register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [showNotification, setShowNotification] = useState(false);  
    const [notificationMessage, setNotificationMessage] = useState('');  

    const handleRegister = () => {
        axios.post('http://localhost:9696/api/register', { username, email, password, name })
            .then(response => {
                setNotificationMessage('Registration successful');
                setShowNotification(true);

                // Clear the form fields
                setUsername('');
                setEmail('');
                setPassword('');
                setName('');

                // Hide notification after 3 seconds
                setTimeout(() => {
                    setShowNotification(false);
                }, 3000);
            })
            .catch(error => {
                setNotificationMessage('Registration failed');
                setShowNotification(true);

                // Hide notification after 3 seconds
                setTimeout(() => {
                    setShowNotification(false);
                }, 3000);
            });
    };

    return (
        <div className="register-container">
            {/* Notification Popup */}
            {showNotification && (
                <div className="notification-popup">
                    {notificationMessage}
                </div>
            )}
            
            <div className="register-form">
                <h2>Register</h2>
                <div className="input-group">
                    <FaUserAlt className="input-icon" />
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </div>
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
                <div className="input-group">
                    <FaUserTie className="input-icon" />
                    <input
                        type="text"
                        placeholder="Full Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <button className="register-button" onClick={handleRegister}>Register</button>
                <p className="redirect-link">
                    Already have an account? <Link to="/login" className="login-link">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
