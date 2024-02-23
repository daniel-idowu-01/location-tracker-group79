/* eslint-disable react/prop-types */

const Input = ({ label, type, value, onChange, placeHolder, className }) => {
  return (
    <div className="mb-4 flex w-full flex-col items-start gap-1 last-of-type:mb-0">
      <label htmlFor={label} className="text-sm capitalize text-zinc-500">
        {label}
      </label>
      <input
        type={type}
        name={label}
        id={label}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        className={`h-10 w-full rounded-md border-2 border-gray-300 px-5 py-2 text-zinc-700 placeholder-zinc-400 outline-none focus:border-blue-400  ${className}`}
      />
    </div>
  );
};

export default Input;
