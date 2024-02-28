import { Link, useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { FaEnvelope, FaLock, FaTimes, FaUser } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value.trim());
    setFullNameError(""); 
  };
  
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value.trim());
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value.trim());
    setPasswordError(""); 
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value.trim());
    setConfirmPasswordError(""); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let requiredFields = [];
    if (!fullName) {
      setFullNameError("Full Name is required");
      requiredFields.push("Full Name");
    }
    if (!email) {
      setEmailError("Email is required");
      requiredFields.push("Email");
    } else if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
    }
    if (!password) {
      setPasswordError("Password is required");
      requiredFields.push("Password");
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    }
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm Password is required");
      requiredFields.push("Confirm Password");
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    }

    if (requiredFields.length === 1) {
      setFullNameError(`${requiredFields[0]} is required`);
    } else if (requiredFields.length > 1) {
      setFullNameError("All fields are required");
    }

    // Proceed with registration if all fields are filled correctly
    if (
      fullName &&
      email &&
      isValidEmail(email) &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      console.log(fullName,'have successfully registerd')
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/dashboard");
    }
  };

  // Email validation function
  const isValidEmail = (email) => {
    //email logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
      <div className="relative overflowscroll-y my-3 mt-2 flex h-[550px] w-full max-w-[380px] flex-col items-center justify-center gap-y-2 rounded-md bg-gray-800 px-4 py-5 text-center transition-transform duration-500 ease-in">
        <h1 className="text-2xl font-semibold text-zinc-200">
          Register to Pawprints
        </h1>
        <p className="mb-[-10px] text-sm text-zinc-500">
          Already have an account?
        </p>
        <Link to="/login" className="mt-0 block text-blue-400 underline">
          Please Log in
        </Link>
        <form action="" className="w-full p-2" onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            icon={<FaUser />}
            placeHolder="John Adam"
            type="text"
            value={fullName}
            onChange={handleFullNameChange}
            errorMessage={fullNameError}
          />
          <Input
            label="Email"
            icon={<FaEnvelope />}
            placeHolder="abc@abc.com"
            type="email"
            value={email}
            onChange={handleEmailChange}
            errorMessage={emailError}
          />
          <Input
            label="Password"
            icon={<FaLock />}
            placeHolder="******"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            errorMessage={passwordError}
          />
          <Input
            label="Confirm Password"
            icon={<FaLock />}
            placeHolder="******"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            errorMessage={confirmPasswordError}
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
    </div>
  );
};

export default Register;
