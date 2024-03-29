// eslint-disable-next-line react/prop-types
const Spinner = ({ className }) => {
  return (
    <div className={`relative m-auto h-6 w-6 ${className}`}>
      <div className="absolute left-0 top-0 h-full w-full animate-spin rounded-full border-b-4 border-t-4 border-blue-500"></div>
      <div className="absolute left-0 top-0 h-full w-full animate-spin rounded-full border-b-4 border-t-4 border-blue-200"></div>
    </div>
  );
};

export default Spinner;
