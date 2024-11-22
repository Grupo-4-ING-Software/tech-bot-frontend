import { FC } from 'react';

const ChatHistory: FC = () => {
  return (
    <div className="flex flex-col w-full p-8 justify-center items-center gap-3">
      <div className="flex flex-col w-3/4 gap-3 justify-between h-full">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-semibold bg-gradient-to-r from-lavanda to-pink text-transparent bg-clip-text">
            Historial de Chats
          </h1>
        </div>
        {/* Add your chat history content here */}
      </div>
    </div>
  );
};

export default ChatHistory; 