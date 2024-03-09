import { Link } from "react-router-dom";
import bgerror from '../public/assets/error-bckgrnd.jpeg'


const ErrorPage = ({ errorCode }) => {
  const errorMessages = {
    404: "Oops! Page not found.",

  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={bgerror} alt="Map Error" className="mb-8" />
      <h1 className="text-3xl font-semibold text-red-500 mb-4">Navigation Lost</h1>
      <p className="text-lg text-gray-600 text-center p-3 mb-8">Looks like we've hit a dead end . Click the BUTTON below to return home and start fresh.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
