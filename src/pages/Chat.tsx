import { FC, useState, useRef, useEffect } from 'react';
import Sidebar from '../layout/sidebar/Sidebar';
import CardTextChatbot from '../components/chat/CardTextChatbot';
import CardTextUser from '../components/chat/CardTextUser';
import TextField from '../components/chat/TextField';
import CardWithButton from '../components/chat/CardWithButton';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  type?: 'text' | 'button'; // Añadir tipo para diferenciar entre mensajes de texto y con botón
}

const Chat: FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: '¡Hola! 👋 ¡Bienvenido a TechBoth! 🚀 Aquí te ayudaremos a descubrir el mejor camino para tu carrera profesional 💼 brindándote los recursos más valiosos 📚. Cuéntame, ¿qué línea de carrera te gustaría explorar hoy? 🎯',
      type: 'text'
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: message, type: 'text' }]);

    // Simulación de respuestas del bot
    setTimeout(() => {
      // Primer mensaje del bot en respuesta al usuario
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: '¡Entendido! Te comparto información sobre desarrollo web.', type: 'text' },
      ]);

      // Segundo mensaje del bot que incluye el botón
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: 'Claro! 😊 Presiona el siguiente botón 👇 y encontrarás todos los pasos para convertirte en un ingeniero de software 🖥️. ¡Vamos a por ello! 🚀', type: 'button' },
        ]);
      }, 1000);
    }, 1000);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex flex-col w-full p-8 justify-center items-center gap-3">
        <div className="flex flex-col w-3/4 gap-3 justify-between h-full">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-semibold bg-gradient-to-r from-lavanda to-pink text-transparent bg-clip-text">
              ¿Qué nueva ruta quieres aprender, Melissa?
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
                    buttonText="¡Click aquí!" 
                    buttonRoute="/chat-diagram"
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
    </div>
  );
};

export default Chat;
