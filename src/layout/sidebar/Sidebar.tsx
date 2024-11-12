import { FC } from 'react';
import { IconType } from 'react-icons';
import { GoPlus } from 'react-icons/go';
import { LiaHistorySolid } from 'react-icons/lia';
import { RxExit } from 'react-icons/rx';


interface Option {
  icon: IconType;
  text: string;
}

const options: Option[] = [
  {
    icon: GoPlus,
    text: 'Nuevo chat',
  },
  {
    icon: LiaHistorySolid,
    text: 'Historial de chats',
  },
  {
    icon: RxExit,
    text: 'Salir',
  },
];

const Sidebar: FC = () => {
  return (
    <div className="flex flex-col justify-start items-start p-4 bg-gray-100 h-screen w-64">
      <div className="font-bold text-xl mb-6">Techbot</div>
      <div className="space-y-4">
        {options.map((option, index) => (
          <div key={index} className="flex flex-row items-center gap-3 text-gray-700 hover:text-blue-500 cursor-pointer">
            <option.icon className="text-2xl" /> 
            <span className="text-lg">{option.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
