import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import Input from "../ui/Input";
import Button from "../ui/Button";

import { emailValidator } from "../utils/inputValidation";
import { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";
import toast from "react-hot-toast";
import axiosConfig from "../auth/axiosConfig";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailErrorResult = emailValidator(email);

    setEmailError(emailValidator(email));

    if (emailErrorResult || !email) {
      return;
    }

    try {
      setLoading(true);

      await axiosConfig.post("/auth/password/forgot", { email });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }

    setEmail("");
    navigate("/");
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
        className={`relative mt-16 flex h-max w-full max-w-[380px] flex-col items-center justify-center gap-y-2 rounded-md bg-gray-800 px-4 py-6 text-center transition-transform delay-200 duration-500 ease-in md:m-auto ${isMounted ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"}`}
      >
        <Link to="/" className="absolute right-5 top-5" disabled={loading}>
          <FaTimes className="text-gray-300" />
        </Link>
        <h1 className="text-xl font-semibold text-zinc-200">
          Forgot My Password
        </h1>
        <p className="mb-[-6px] text-sm text-zinc-500 md:mb-[-8px]">
          Not registered?
        </p>
        <Link
          to="/register"
          className="mt-0 block text-blue-400 underline"
          disabled={loading}
        >
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
            disabled={loading}
          />

          <Button
            className="mt-6 h-10 w-full font-semibold uppercase text-zinc-50 md:h-10"
            disabled={loading}
          >
            {loading ? <Spinner className="h-6 w-6" /> : "Submit"}
          </Button>
          <p className="text-xs text-zinc-500">
            After submitting check your email for password reset link.
          </p>
        </form>
        <Link
          className="mt-1 block text-zinc-500 underline"
          to="/login"
          disabled={loading}
        >
          Back to login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
