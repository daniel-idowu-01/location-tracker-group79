import { Link } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";

const Login = () => {
  return (
    <div className=" flex h-[430px] w-full max-w-[380px] flex-col items-center justify-center gap-y-2 rounded-md bg-gray-800 px-4 py-5 text-center">
      <h1 className="text-2xl font-semibold text-zinc-200">
        Login to Pawprints
      </h1>
      <p className=" mb-[-10px] text-sm text-zinc-500">Not registered?</p>
      <Link to="/register" className="mt-0 block text-blue-400 underline">
        Create Account here
      </Link>
      <form action="" className="w-full p-2">
        <Input label="Email" placeHolder="abc@abc.com" type="email" />
        <Input label="Password" placeHolder="******" type="password" />
        <Button className="mt-6 h-10 w-full font-semibold uppercase text-zinc-50 md:h-10">
          Login
        </Button>
      </form>
      <Link className="mt-2 block text-zinc-500 underline">
        Forgot Password?
      </Link>
    </div>
  );
};

export default Login;
