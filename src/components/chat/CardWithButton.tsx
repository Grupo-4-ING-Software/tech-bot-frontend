import { FC } from 'react';
import { FaRobot } from 'react-icons/fa';
import ButtonToDiagram from './ButtonToDiagram';


interface CardWithButtonProps {
  text: string;
  buttonText: string;
  buttonRoute: string;
  onButtonClick?: () => void;
}

const CardWithButton: FC<CardWithButtonProps> = ({
  text,
  buttonText,
  buttonRoute,
  onButtonClick,
}) => {
  return (
    <div className="flex items-start p-6 bg-white rounded-3xl max-w-md space-x-3">
      <div className="text-teal-500">
        <FaRobot className="text-2xl" />
      </div>
      
      {/* Contenedor de texto y botón */}
      <div className="text-gray-800">
        <p className="text-sm leading-relaxed whitespace-pre-line mb-4">{text}</p>
        {/* Botón con gradiente */}
        <ButtonToDiagram text={buttonText} route={buttonRoute} onClick={onButtonClick} />
      </div>
    </div>
  );
};

export default CardWithButton;
