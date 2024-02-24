import { Link } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { FaTimes } from "react-icons/fa";

const Register = () => {
  return (
    <div className="relative flex h-[550px] w-full max-w-[380px] flex-col my-12 items-center justify-center gap-y-2 rounded-md bg-gray-800 px-4 py-5 text-center mt-2"> {/* Adjust the margin-top here */}
      <Link to="/" className="absolute top-0 right-0 p-3">
        <FaTimes className="text-gray-300" />
      </Link>
      <h1 className="text-2xl font-semibold text-zinc-200">
        Register to Pawprints
      </h1>
      <p className="mb-[-10px] text-sm text-zinc-500">Already have an account?</p>
      <Link to="/login" className="mt-0 block text-blue-400 underline">
        Please Log in
      </Link>
      <form action="" className="w-full p-2">
        <Input label="Full Name" placeHolder="John Adam" type="text" />
        <Input label="Email" placeHolder="abc@abc.com" type="email" />
        <Input label="Password" placeHolder="******" type="password" />
        <Input label="Confirm Password" placeHolder="******" type="password" />
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
  );
};

export default Register;
