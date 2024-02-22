import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';


const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>Register to keepleft</h2>
      <p>Already have an account?</p>
      <Link to="/register">Login</Link>
      <form onSubmit={handleSignIn}>
        <div>
          <label htmlFor="email">
            <FaEnvelope /> email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">
            <FaLock /> Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default SignInForm;
