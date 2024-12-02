import { FC } from 'react';
import { IconType } from 'react-icons';
import { GoPlus } from 'react-icons/go';
import { LiaHistorySolid } from 'react-icons/lia';
import { RxExit } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../shared/utils/routes';

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
  return (
    <div className="flex flex-col justify-start items-start p-4 bg-gray-100 h-screen w-64">
      <img src={logo} alt="Logo de TechBot" className="h-8 mb-6"/>
      <div className="space-y-4">
        {options.map((option, index) => (
          <Link
            key={index}
            to={option.route}
            className="flex flex-row items-center gap-3 text-gray-700 hover:text-blue-500 cursor-pointer"
          >
            <option.icon className="text-2xl" />
            <span className="text-lg">{option.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
