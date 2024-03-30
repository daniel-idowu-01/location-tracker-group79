import { Link } from "react-router-dom";
import bgerror from "/assets/error-bckgrnd.jpeg";

const ErrorPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <img src={bgerror} alt="Map Error" className="mb-8" />
      <h1 className="mb-4 text-3xl font-semibold text-red-500">
        Navigation Lost
      </h1>
      <p className="mb-8 p-3 text-center text-lg text-gray-600">
        Looks like we&apos;ve hit a dead end . Click the BUTTON below to return
        home and start fresh.
      </p>
      <Link
        to="/"
        className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
