import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { emailValidator, passwordValidator, fullNameValidator, confirmPassWordValidator } from "../utils/inputValidation";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    setFullNameError(fullNameValidator(value));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(emailValidator(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(passwordValidator(value));
    setConfirmPasswordError(confirmPassWordValidator(value)(confirmPassword));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value.trim());
    setConfirmPasswordError(e.target.value !== password ? "Passwords do not match" : "");
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailErrorResult = emailValidator(email);
    setEmailError(emailErrorResult);

    const passwordErrorResult = passwordValidator(password);
    setPasswordError(passwordErrorResult);

    const confirmPasswordErrorResult = confirmPassword !== password ? "Passwords do not match" : "";
    setConfirmPasswordError(confirmPasswordErrorResult);


    if (!fullName || !email || !password || !confirmPassword || fullNameError || emailError || passwordError || confirmPasswordError) {
      return;
    }

    // after successful registration, navigate to dashboard and success console
    console.log (fullName, "just registered")
    navigate("/dashboard");
  };

  return (
    <div
    className="absolute left-0 top-0 flex h-full w-full items-center justify-center"
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
        className={`relative flex h-[550px] w-full max-w-[380px] flex-col items-center justify-center gap-y-2 rounded-md bg-gray-800 px-4 py-5 text-center transition-transform duration-500 ease-in ${isMounted ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"}`}
      >
        <Link to="/" className="absolute right-0 top-0 p-3">
          <FaTimes className="text-gray-300" />
        </Link>
        <h1 className="text-2xl font-semibold text-zinc-200">
          Register to Pawprints
        </h1>
        <p className="mb-[-10px] text-sm text-zinc-500">Already have an account?</p>
        <Link to="/login" className="mt-0 block text-blue-400 underline">
          Please Log in
        </Link>
        <form action="" className="w-full p-2" onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            placeHolder="John Adam"
            type="text"
            value={fullName}
            onChange={handleFullNameChange}
            errorMessage={fullNameError}
          />
          <Input
            label="Email"
            placeHolder="abc@abc.com"
            type="email"
            value={email}
            onChange={handleEmailChange}
            errorMessage={emailError}
          />
          <Input
            label="Password"
            placeHolder="******"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            errorMessage={passwordError || confirmPasswordError}
          />
          <Input
            label="Confirm Password"
            placeHolder="******"
            type="password"
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
