import { Link, useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  confirmPassWordValidator,
  emailValidator,
  fullNameValidator,
  passwordValidator2,
} from "../utils/inputValidation";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  const handlefullNameChange = (e) => {
    setFullName(e.target.value.trim());
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value.trim());
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value.trim());
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullNameErrorResult = fullNameValidator(fullName);
    const emailErrorResult = emailValidator(email);
    const passwordErrorResult = passwordValidator2(password);
    const confirmPasswordErrorResult =
      confirmPassWordValidator(password)(confirmPassword);

    setFullNameError(fullNameValidator(fullName));
    setEmailError(emailValidator(email));
    setPasswordError(passwordValidator2(password));
    setConfirmPasswordError(
      confirmPassWordValidator(password)(confirmPassword),
    );

    if (
      fullNameErrorResult ||
      emailErrorResult ||
      passwordErrorResult ||
      confirmPasswordErrorResult ||
      fullNameError ||
      emailError ||
      passwordError ||
      confirmPasswordError
    ) {
      return;
    }

    const newUser = {
      fullName,
      email,
      password,
      confirmPassword,
    };
    console.log(newUser);
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
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
        className={`relative  flex h-max w-full max-w-[380px] flex-col items-center justify-center gap-y-1 rounded-md bg-gray-800 px-4 py-5 text-center transition-transform delay-200 duration-500 ease-in md:h-[550px] md:gap-y-2 ${isMounted ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"} mt-20 md:mt-16`}
      >
        {" "}
        {/* Adjust the margin-top here */}
        <Link to="/" className="absolute right-4 top-5 ">
          <FaTimes className="text-gray-300" />
        </Link>
        <h1 className="text-xl font-semibold text-zinc-200 md:text-xl">
          Register to Pawprints
        </h1>
        <p className=" mb-[-6px] text-sm text-zinc-500 md:mb-[-8px]">
          Already have an account?
        </p>
        <Link to="/login" className="mt-0 block text-blue-400 underline">
          Please Log in
        </Link>
        <form className="w-full p-2" onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            placeHolder="John Adam"
            type="text"
            validateOnBlur={true}
            validateFunction={fullNameValidator}
            value={fullName}
            onChange={handlefullNameChange}
            errorMessage={fullNameError}
          />
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
            validateFunction={passwordValidator2}
            value={password}
            onChange={handlePasswordChange}
            errorMessage={passwordError}
          />
          <Input
            label="Confirm Password"
            placeHolder="******"
            type="password"
            validateOnBlur={true}
            validateFunction={confirmPassWordValidator(password)}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            errorMessage={confirmPasswordError}
          />

          <Button className="mt-6 h-10 w-full font-semibold uppercase text-zinc-50 md:h-10">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
