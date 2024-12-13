import { FC, useEffect, useState } from 'react';
import { ChatHistory as ChatHistoryType, chatService } from '../services/api/chatService';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../shared/utils/routes';
import { authService } from '../services/api/authService';
import { useDiagram } from '../context/DiagramContext';

const ChatHistory: FC = () => {
  const [chats, setChats] = useState<ChatHistoryType[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { dispatch } = useDiagram();

  useEffect(() => {
    const verifyAndFetch = async () => {
      const isValid = await authService.verifyToken();
      if (!isValid) {
        navigate(ROUTES.LOGIN);
        return;
      }
      fetchChatHistory();
    };

    verifyAndFetch();
  }, [navigate]);

  const fetchChatHistory = async () => {
    try {
      const history = await chatService.getChatHistory();
      setChats(Array.isArray(history) ? history : []);
    } catch {
      toast.error('Error al cargar el historial de chats');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteChat = async (chatId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Mostrar toast de confirmación
    toast((t) => (
      <div className="flex flex-col gap-4">
        <p className="font-medium text-gray-800">
          ¿Estás seguro de eliminar este chat?
        </p>
        <div className="flex justify-end gap-2">
          <button
            className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancelar
          </button>
          <button
            className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            onClick={async () => {
              try {
                await chatService.deleteChat(chatId);
                setChats(chats.filter(chat => chat.id !== chatId));
                toast.success('Chat eliminado exitosamente');
              } catch {
                toast.error('Error al eliminar el chat');
              }
              toast.dismiss(t.id);
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    ), {
      duration: 5000,
      position: 'top-center',
      style: {
        background: 'white',
        padding: '1rem',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    });
  };

  const handleDeleteAllChats = async () => {
    // Mostrar toast de confirmación
    toast((t) => (
      <div className="flex flex-col gap-4">
        <p className="font-medium text-gray-800">
          ¿Estás seguro de eliminar todo el historial?
        </p>
        <p className="text-sm text-gray-600">
          Esta acción no se puede deshacer.
        </p>
        <div className="flex justify-end gap-2">
          <button
            className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancelar
          </button>
          <button
            className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            onClick={async () => {
              try {
                await chatService.deleteAllChats();
                setChats([]);
                toast.success('Todos los chats han sido eliminados');
              } catch {
                toast.error('Error al eliminar los chats');
              }
              toast.dismiss(t.id);
            }}
          >
            Eliminar Todo
          </button>
        </div>
      </div>
    ), {
      duration: 5000,
      position: 'top-center',
      style: {
        background: 'white',
        padding: '1rem',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    });
  };

  const handleCardClick = (chat: ChatHistoryType) => {
    dispatch({ 
      type: 'SET_DIAGRAM', 
      payload: chat.response.data 
    });
    navigate(ROUTES.APP.DIAGRAM);
  };

  return (
    <div className="flex flex-col w-full p-8 justify-center items-center gap-3">
      <div className="flex flex-col w-3/4 gap-3 justify-between h-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-lavanda to-pink text-transparent bg-clip-text">
            Historial de Chats
          </h1>
          {chats.length > 0 && (
            <button
              onClick={handleDeleteAllChats}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl 
                       hover:from-red-600 hover:to-red-700 transition-all duration-300 
                       shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Eliminar Todo
            </button>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lavanda"></div>
          </div>
        ) : chats.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-64 gap-4">
            <svg
              className="w-16 h-16 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <p className="text-gray-500 text-lg">No hay chats en el historial</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 mt-6">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => handleCardClick(chat)}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-xl 
                         transition-all duration-300 transform hover:-translate-y-1 
                         border-2 border-transparent hover:border-lavanda/30
                         cursor-pointer relative group"
              >
                <div className="absolute right-16 top-4 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 text-lavanda">
                  <span className="bg-lavanda/10 px-3 py-1 rounded-full text-sm">
                    Ver diagrama 🔍
                  </span>
                </div>

                <button
                  onClick={(e) => handleDeleteChat(chat.id, e)}
                  className="absolute top-4 right-4 p-2 rounded-full text-gray-400 
                           hover:text-red-500 hover:bg-red-50 transition-all duration-300
                           z-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="mb-4">
                  <span className="text-sm text-lavanda/70 bg-lavanda/10 px-3 py-1 rounded-full">
                    {format(new Date(chat.created_at), 'dd/MM/yyyy HH:mm')}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <span className="text-lavanda">🤔</span> Pregunta
                    </h3>
                    <p className="text-gray-600">{chat.prompt}</p>
                  </div>
                  <div className="bg-lavanda/5 p-4 rounded-xl">
                    <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <span className="text-pink">🤖</span> Respuesta
                    </h3>
                    <div className="space-y-2">
                      <h4 className="text-lg font-medium text-pink">
                        {chat.response.data.title}
                      </h4>
                      <p className="text-gray-600">
                        {chat.response.data.description}
                      </p>
                      {chat.response.data.resources.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-lavanda/10">
                          <p className="text-sm text-lavanda font-medium mb-2">
                            🎯 Recursos disponibles: {chat.response.data.resources.length}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatHistory; 