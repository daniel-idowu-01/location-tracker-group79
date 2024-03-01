import { Link } from "react-router-dom";

const Error = ({ errorMessage }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold text-red-500 mb-4">Error</h1>
      <p className="text-lg text-gray-600 mb-8">{errorMessage}</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default Error;
  