import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../shared/utils/routes';

// Types for our diagram data
interface Resource {
  title: string;
  url: string;
  type: 'video' | 'article' | 'course';
}

interface DiagramNode {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
  children?: DiagramNode[];
}

// Mock data (simulating backend response)
const mockDiagramData: DiagramNode = {
  id: 'root',
  title: 'Frontend Developer',
  description: 'Ruta de aprendizaje para convertirte en desarrollador frontend',
  resources: [
    {
      title: 'Guía completa Frontend',
      url: 'https://roadmap.sh/frontend',
      type: 'article'
    }
  ],
  children: [
    {
      id: 'html',
      title: 'HTML & CSS',
      description: 'Fundamentos del desarrollo web',
      resources: [
        {
          title: 'HTML & CSS Crash Course',
          url: 'https://www.youtube.com/watch?v=916GWv2Qs08',
          type: 'video'
        }
      ],
      children: [
        {
          id: 'responsive',
          title: 'Responsive Design',
          description: 'Diseño adaptable a diferentes dispositivos',
          resources: [
            {
              title: 'Flexbox Guide',
              url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
              type: 'article'
            }
          ]
        }
      ]
    },
    {
      id: 'js',
      title: 'JavaScript',
      description: 'Lenguaje de programación web',
      resources: [
        {
          title: 'JavaScript Course',
          url: 'https://javascript.info/',
          type: 'course'
        }
      ],
      children: [
        {
          id: 'react',
          title: 'React',
          description: 'Biblioteca para interfaces de usuario',
          resources: [
            {
              title: 'React Documentation',
              url: 'https://react.dev/',
              type: 'article'
            }
          ]
        }
      ]
    }
  ]
};

// Component to render individual nodes
const DiagramNode: FC<{ node: DiagramNode; level?: number }> = ({ node, level = 0 }) => {
  return (
    <div className={`flex flex-col items-center ${level === 0 ? 'w-full' : 'w-auto'}`}>
      <div 
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow
                   border-2 border-lavanda hover:border-pink cursor-pointer
                   max-w-md w-full"
      >
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-lavanda to-pink text-transparent bg-clip-text">
          {node.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{node.description}</p>
        <div className="space-y-2">
          {node.resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-blue hover:text-pink transition-colors"
            >
              📚 {resource.title}
            </a>
          ))}
        </div>
      </div>
      
      {node.children && node.children.length > 0 && (
        <>
          <div className="w-px h-8 bg-lavanda"></div>
          <div className="flex flex-row gap-8">
            {node.children.map((child, index) => (
              <div key={child.id} className="flex flex-col items-center">
                <DiagramNode node={child} level={level + 1} />
                {index < node.children!.length - 1 && (
                  <div className="w-8 h-px bg-lavanda"></div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ChatDiagram: FC = () => {
  return (
    <div className="min-h-screen bg-gray-ligth p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-lavanda to-pink text-transparent bg-clip-text">
            Ruta de Aprendizaje: Frontend Developer
          </h1>
          <Link
            to={ROUTES.APP.CHAT}
            className="px-6 py-2 bg-black text-white rounded-xl hover:bg-opacity-90 transition-colors"
          >
            Volver al chat
          </Link>
        </div>

        {/* Diagram Container */}
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <DiagramNode node={mockDiagramData} />
        </div>
      </div>
    </div>
  );
};

export default ChatDiagram;