import { FC, useState } from 'react';
import { LuSendHorizonal } from 'react-icons/lu';

interface TextFieldProps {
  placeholder: string;
  onSend: (message: string) => void;
  disabled?: boolean;
}

const TextField: FC<TextFieldProps> = ({ placeholder, onSend }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      onSend(inputValue);
      setInputValue(''); 
    }
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-3xl px-4 py-2 w-full shadow-sm">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500"
        onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
      />
      <button onClick={handleSend} className="text-black ml-3">
        
        <LuSendHorizonal className="text-lg text-lavanda" />
      </button>
    </div>
  );
};

export default TextField;
