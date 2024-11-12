import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonToDiagramProps {
  text: string;
  route: string;
  onClick?: () => void; // Función opcional que se ejecuta al hacer clic
}

const ButtonToDiagram: FC<ButtonToDiagramProps> = ({ text, route, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick(); 
    navigate(route); 
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-pink to-lavanda hover:from-pink-600  transition duration-300 ease-in-out"
    >
      {text}
    </button>
  );
};

export default ButtonToDiagram;
