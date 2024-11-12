import { FC } from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  iconSrc?: string;
  iconAlt?: string;
}

const ButtonLogin: FC<ButtonProps> = ({
  text,
  onClick,
  className = '',
  bgColor = 'bg-gray-800',
  textColor = 'text-white',
  borderColor = '',
  iconSrc,
  iconAlt = 'icon',
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center font-medium py-2 px-4 rounded-xl w-full text-xs ${bgColor} ${textColor} ${borderColor} ${className} hover:opacity-90`}
    >
      {iconSrc && <img src={iconSrc} alt={iconAlt} className="h-6 mr-2" />}
      {text}
    </button>
  );
};

export default ButtonLogin;
