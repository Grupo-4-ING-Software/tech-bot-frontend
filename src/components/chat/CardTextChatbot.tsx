import { FC } from 'react';
import { FaRobot } from 'react-icons/fa'; 

interface CardTestChatbotProps {
  text: string;
}

const CardTextChatbot: FC<CardTestChatbotProps> = ({ text }) => {
  return (
    <div className="flex items-start p-6 bg-white rounded-3xl  max-w-md space-x-3">
      <div className="text-green">
        <FaRobot className="text-2xl" />
      </div>
      
      <div className="text-gray-800">
        <p className="text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default CardTextChatbot;
