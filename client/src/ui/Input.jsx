/* eslint-disable react/prop-types */

const Input = ({ icon,label, type, value, placeHolder, className }) => {
  return (
    <div className="mb-4 flex w-full flex-col items-start gap-1 last-of-type:mb-0">
      <label htmlFor={label} className="flex gap-2 text-sm capitalize text-zinc-500">
        <div className="text-blue-400 py-1">{icon}</div>
        {label}
      </label>
      <input
        type={type}
        name={label}
        id={label}
        value={value}
        //onChange={handleChange}
        //onBlur={handleBlur}
        placeholder={placeHolder}
        className={`h-10 w-full rounded-md border-2 border-gray-300 px-5 py-2 text-zinc-700 placeholder-zinc-400 outline-none focus:border-blue-400  ${className} ${error || errorMessage ? "border-red-400" : ""}`}
      />
    </div>
  );
};

export default Input;
