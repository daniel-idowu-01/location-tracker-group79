import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Error from '../Pages/Error';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    let errors = [];

    if (!email) {
      errors.push('Email is required.');
    }

    if (!password) {
      errors.push('Password is required.');
    }

    if (errors.length === 1) {
      setErrorMessage(errors[0]);
    } else if (errors.length > 1) {
      setErrorMessage('All fields are required.');
    } else {
      console.log('Email:', email);
      console.log('Password:', password);
      setErrorMessage(''); 
    }
  };

  const clearErrorMessage = () => {
    setErrorMessage('');
  };

  return (
    <div className=" justify-center gap-y-2 rounded-md bg-gray-800 px-4 py-5 text-center">
      <h1 className="text-2xl font-semibold text-zinc-200">Login to Pawprints</h1>
      <p className="text-sm text-zinc-500">Not registered? <Link to="/register" className="text-blue-400 underline">Create Account here</Link></p>
      {errorMessage && <Error message={errorMessage} onClose={clearErrorMessage} />} 
      <form onSubmit={handleLogin} className="w-full p-2">
        <Input
          icon={<FaEnvelope />}
          label="Email"
          placeHolder="abc@abc.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          icon={<FaLock />}
          label="Password"
          placeHolder="******"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" className="mt-6 h-10 w-full font-semibold uppercase text-zinc-50 md:h-10">Login</Button>
      </form>
      <Link to="/" className="block text-zinc-500 underline">Forgot Password?</Link>
    </div>
  );
};

export default Login;
