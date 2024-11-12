import { FC } from 'react';
import { FaUserCircle } from 'react-icons/fa'; 

interface CardTextUserProps {
  text: string;
}

const CardTextUser: FC<CardTextUserProps> = ({ text }) => {
  return (
    <div className="relative flex items-start p-4 bg-white rounded-3xl max-w-md w-fit">
      <div className="text-gray-800 text-sm leading-relaxed break-words max-w-full whitespace-pre-wrap pr-10">
        {text}
      </div>

      <div className="absolute bottom-2 right-2 text-pink-500">
        <FaUserCircle className="text-lg text-pink" />
      </div>
    </div>
  );
};

export default CardTextUser;
