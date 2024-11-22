import { FC } from "react";

interface InputLoginProps {
  title: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const InputLogin: FC<InputLoginProps> = ({
  title,
  placeholder,
  type,
  value,
  onChange,
  className = 'flex flex-col ',
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={title.toLowerCase()} className="block text-gray-700 font-semibold  mb-1 text-s">
        {title}
      </label>
      <input
        type={type}
        id={title.toLowerCase()}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-strike-input-login text-xs bg-background-input-login rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};


export default InputLogin;