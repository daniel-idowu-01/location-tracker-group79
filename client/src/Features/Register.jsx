import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import Error from '../Pages/Error';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    let errors = [];

    if (!fullName) {
      errors.push('Full Name is required.');
    }

    if (!email) {
      errors.push('Email is required.');
    }

    if (!password) {
      errors.push('Password is required.');
    }

    if (!confirmPassword) {
      errors.push('Confirm Password is required.');
    }

    if (errors.length === 1) {
      setErrorMessage(errors[0]);
    } else if (errors.length > 1) {
      setErrorMessage('All fields are required.');
    } else {
      console.log('Full Name:', fullName);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
      setErrorMessage('');
    }
  };

  const clearErrorMessage = () => {
    setErrorMessage('');
  };

  return (
    <div className="relative flex h-[550px] w-full max-w-[380px] flex-col items-center my-12 justify-center gap-y-2 rounded-md bg-gray-800 px-4 py-5 text-center mt-2">
      <h1 className="text-2xl font-semibold text-zinc-200">
        Register to Pawprints
      </h1>
      <p className="mb-[-10px] text-sm text-zinc-500">Already have an account?</p>
      <Link to="/login" className="mt-0 block text-blue-400 underline">
        Please Log in
      </Link>
      {errorMessage && <Error message={errorMessage} onClose={clearErrorMessage} />}
      <form onSubmit={handleRegister} className="w-full p-2">
        <Input
          icon={<FaUser />}
          label="Full Name"
          placeHolder="John Adam"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
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
        <Input
          icon={<FaLock />}
          label="Confirm Password"
          placeHolder="******"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="flex items-center">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe" className="text-sm text-zinc-500">
            Remember Me
          </label>
        </div>
        <Button type="submit" className="mt-6 h-10 w-full font-semibold uppercase text-zinc-50 md:h-10">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
