import { FC, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardTextChatbot from '../components/chat/CardTextChatbot';
import CardTextUser from '../components/chat/CardTextUser';
import TextField from '../components/chat/TextField';
import CardWithButton from '../components/chat/CardWithButton';
import { ROUTES } from '../shared/utils/routes';
import { useDiagram } from '../context/DiagramContext';
import { IoMdClose } from "react-icons/io";

interface Message {
  sender: 'bot' | 'user';
  text: string;
  type?: 'text' | 'button';
}

const WELCOME_MESSAGE = '¡Hola! 👋 ¡Bienvenido a TechBoth! 🚀 Aquí te ayudaremos a descubrir el mejor camino para tu carrera profesional 💼 brindándote los recursos más valiosos 📚. Cuéntame, ¿qué línea de carrera te gustaría explorar hoy? 🎯';

const Chat: FC = () => {

  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { generateDiagram, diagram } = useDiagram();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('access_token');

      if (!token) {
        navigate(ROUTES.APP.CHAT);
        return;
      }

      try {
        const response = await fetch(`http://localhost:8000/api/verify-token/${token}`);

        if (!response.ok) {
          throw new Error('Token verification failed');
        }
      } catch {
        localStorage.removeItem('access_token');
        navigate(ROUTES.LOGIN);
      }
    };

    verifyToken();
  }, [navigate]);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: WELCOME_MESSAGE,
      type: 'text'
    },
  ]);



  const handleSend = async (message: string) => {
    try {
      setMessages(prev => [...prev, { sender: 'user', text: message, type: 'text' }]);

      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: '🤔 Déjame analizar tu solicitud...', type: 'text' },
      ]);

      const response = await generateDiagram(message);

      // Verificar que tenemos una respuesta válida
      if (!response || !response.id) {
        throw new Error('Respuesta inválida del servidor');
      }

      const diagramData = response;

      setMessages(prev => {
        const updatedMessages = prev.slice(0, -1);

        if (!diagramData || diagramData.id === 'error') {
          return [
            ...updatedMessages,
            {
              sender: 'bot',
              text: 'Lo siento, hubo un problema al generar tu ruta. ¿Podrías intentarlo de nuevo?',
              type: 'text',
            },
          ];
        }

        return [
          ...updatedMessages,
          {
            sender: 'bot',
            text: `¡He creado una ruta de aprendizaje personalizada para ${diagramData.title}! 🎯\n\n${diagramData.description}\n\nHaz clic en el botón para ver el diagrama completo.`,
            type: 'button',
          },
        ];
      });
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => {
        const updatedMessages = prev.slice(0, -1);
        return [
          ...updatedMessages,
          {
            sender: 'bot',
            text: 'Ups, parece que hubo un problema técnico 😅. ¿Podrías intentarlo de nuevo?',
            type: 'text',
          },
        ];
      });
    }
  };

  const handleDiagramClick = () => {
    if (diagram && diagram.id !== 'error') {
      navigate(ROUTES.APP.DIAGRAM);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col w-full p-8 justify-center items-center gap-3">
      <div className="flex flex-col w-3/4 gap-3 justify-between h-full">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-semibold bg-gradient-to-r from-lavanda to-pink text-transparent bg-clip-text">
            ¿Qué nueva ruta quieres aprender?
          </h1>
        </div>

        <article className="flex flex-col bg-gray-ligth w-full h-3/4 rounded-3xl p-5 gap-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
            >
              {message.sender === 'bot' && message.type === 'text' ? (
                <CardTextChatbot text={message.text} />
              ) : message.sender === 'bot' && message.type === 'button' ? (
                <CardWithButton
                  text={message.text}
                  buttonText="¡Ver mi ruta! 🗺️"
                  buttonRoute={ROUTES.APP.DIAGRAM}
                  onButtonClick={handleDiagramClick}
                />
              ) : (
                <CardTextUser text={message.text} />
              )}
            </div>
          ))}

          <div ref={messagesEndRef} />
        </article>

        <TextField
          placeholder="Escribe tu mensaje..."
          onSend={handleSend}
        />
      </div>
    </div>
  );
};

export default Chat;