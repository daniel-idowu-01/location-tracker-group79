import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import Input from "../ui/Input";
import Button from "../ui/Button";

import { emailValidator, passwordValidator } from "../utils/inputValidation";
import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value.trim());
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailErrorResult = emailValidator(email);
    const passErrorResult = passwordValidator(password);

    setEmailError(emailValidator(email));
    setPasswordError(passwordValidator(password));

    if (emailErrorResult || passErrorResult || !email || !password) {
      return;
    }

    const user = { email, password };

    console.log(user);

    setEmail("");
    setPassword("");
    navigate("/dashboard");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className="absolute left-0 top-0 flex h-full w-full items-center justify-center px-4"
      style={{
        backgroundImage: `linear-gradient(
            rgba(36, 42, 46, 0.7),
            rgba(36, 42, 46, 0.7)
          )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`relative mt-16 flex h-[430px] w-full max-w-[380px] flex-col items-center justify-center gap-y-2 rounded-md bg-gray-800 px-4 py-5 text-center transition-transform delay-200 duration-500 ease-in md:m-auto ${isMounted ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"}`}
      >
        <Link to="/" className="absolute right-4 top-5">
          <FaTimes className="text-gray-300" />
        </Link>
        <h1 className="text-xl font-semibold text-zinc-200">
          Login to Pawprints
        </h1>
        <p className="mb-[-6px] text-sm text-zinc-500 md:mb-[-8px]">
          Not registered?
        </p>
        <Link to="/register" className="mt-0 block text-blue-400 underline">
          Create Account here
        </Link>
        <form action="" className="w-full p-2" onSubmit={handleSubmit}>
          <Input
            label="Email"
            placeHolder="abc@abc.com"
            type="email"
            validateOnBlur={true}
            validateFunction={emailValidator}
            value={email}
            onChange={handleEmailChange}
            errorMessage={emailError}
          />
          <Input
            label="Password"
            placeHolder="******"
            type="password"
            validateOnBlur={true}
            validateFunction={passwordValidator}
            value={password}
            onChange={handlePasswordChange}
            errorMessage={passwordError}
          />
          <Button className="mt-6 h-10 w-full font-semibold uppercase text-zinc-50 md:h-10">
            Login
          </Button>
        </form>
        <Link
          className="mt-2 block text-zinc-500 underline"
          to="/forgot-password"
        >
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
