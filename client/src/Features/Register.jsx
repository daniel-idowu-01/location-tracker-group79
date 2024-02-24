import { Link } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

const Register = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
        className={`relative my-12 mt-2 flex h-[550px] w-full max-w-[380px] flex-col items-center justify-center gap-y-2 rounded-md bg-gray-800 px-4 py-5 text-center transition-transform duration-500 ease-in ${isMounted ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"}`}
      >
        {" "}
        {/* Adjust the margin-top here */}
        <Link to="/" className="absolute right-0 top-0 p-3">
          <FaTimes className="text-gray-300" />
        </Link>
        <h1 className="text-2xl font-semibold text-zinc-200">
          Register to Pawprints
        </h1>
        <p className="mb-[-10px] text-sm text-zinc-500">
          Already have an account?
        </p>
        <Link to="/login" className="mt-0 block text-blue-400 underline">
          Please Log in
        </Link>
        <form action="" className="w-full p-2">
          <Input label="Full Name" placeHolder="John Adam" type="text" />
          <Input label="Email" placeHolder="abc@abc.com" type="email" />
          <Input label="Password" placeHolder="******" type="password" />
          <Input
            label="Confirm Password"
            placeHolder="******"
            type="password"
          />
          <div className="flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-sm text-zinc-500">
              Remember Me
            </label>
          </div>
          <Button className="mt-6 h-10 w-full font-semibold uppercase text-zinc-50 md:h-10">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
