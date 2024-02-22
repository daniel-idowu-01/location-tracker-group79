import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();

        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div className="signup">
            <h2>Register to keepleft</h2>
            <p>Already have an account? </p>
            <Link to="/login">Login</Link>
            <form onSubmit={handleSignUp}>
                <div>
                    <label htmlFor="username"><FaUser/> Name</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="John"
                    />
                </div>
                <div>
                    <label htmlFor="email"><FaEnvelope/> Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Example43@gail.com"
                    />
                </div>
                <div>
                    <label htmlFor="password"><FaLock/>Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <div>
                    <label htmlFor="confirm"><FaLock/> Confirm Password</label>
                    <input
                        type="password"
                        id="confirm"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                    />
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="remember me"
                        id="remember"
                    />
                    <p>Remember me</p>
                </div>
                <div className="submit">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}


export default Register;