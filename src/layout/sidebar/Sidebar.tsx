import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../shared/utils/routes';
import { useNavigate } from 'react-router-dom';

import { IconType } from 'react-icons';
import { GoPlus } from 'react-icons/go';
import { LiaHistorySolid } from 'react-icons/lia';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { RxExit } from 'react-icons/rx';

import logo from '../../assets/icons/logo.svg'

interface Option {
  icon: IconType;
  text: string;
  route: string;
}

const options: Option[] = [
  {
    icon: GoPlus,
    text: 'Nuevo chat',
    route: ROUTES.APP.CHAT,
  },
  {
    icon: LiaHistorySolid,
    text: 'Historial de chats',
    route: ROUTES.APP.HISTORY,
  },
  {
    icon: RxExit,
    text: 'Salir',
    route: ROUTES.LOGIN,
  },
];

const Sidebar: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remover token de acceso luego de cerrar sesion
    localStorage.removeItem('access_token');
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className="relative h-screen">
      {/* Sidebar */}
      {isSidebarOpen &&
        (
          <div className={`flex flex-col justify-start items-start p-4 bg-gray-100 h-screen transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-0 overflow-hidden'
            }`}>
            <img src={logo} alt="Logo de TechBot" className="h-8 mb-6" />
            <div className="space-y-4">
              {options.map((option, index) => (
                <Link
                  key={index}
                  to={option.route}
                  className="flex flex-row items-center gap-3 text-gray-700 hover:text-blue-500 cursor-pointer"
                  onClick={option.text === 'Salir' ? handleLogout : undefined}
                >
                  <option.icon className="text-2xl" />
                  <span className="text-lg">{option.text}</span>
                </Link>
              ))}
            </div>
          </div>
        )
      }

      {/* Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`absolute top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md text-gray-700 hover:text-blue-500 transition-all duration-300 ${isSidebarOpen ? 'right-[-16px]' : 'right-0'
          }`}
      >
        {isSidebarOpen ? (
          <MdOutlineKeyboardArrowLeft className="text-2xl" />
        ) : (
          <MdOutlineKeyboardArrowRight className="text-2xl" />
        )}
      </button>
    </div >
  );
};

export default Sidebar;
