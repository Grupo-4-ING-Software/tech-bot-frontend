import { createContext, useContext, useReducer, ReactNode } from 'react';
import { DiagramNode } from '../types/diagram';
import { DiagramService } from '../services/api/diagramService';

// Estado inicial
interface DiagramState {
  diagram: DiagramNode | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: DiagramState = {
  diagram: null,
  isLoading: false,
  error: null,
};

// Acciones
type DiagramAction =
  | { type: 'SET_LOADING' }
  | { type: 'SET_DIAGRAM'; payload: DiagramNode }
  | { type: 'SET_ERROR'; payload: string };

// Reducer
function diagramReducer(state: DiagramState, action: DiagramAction): DiagramState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: true, error: null };
    case 'SET_DIAGRAM':
      if (action.payload.id === 'error') {
        return {
          ...state,
          diagram: action.payload,
          isLoading: false,
          error: null
        };
      }
      return { ...state, diagram: action.payload, isLoading: false };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}

// Contexto
interface DiagramContextType extends DiagramState {
  generateDiagram: (prompt: string) => Promise<DiagramNode | null>;
  dispatch: React.Dispatch<DiagramAction>;
}

const DiagramContext = createContext<DiagramContextType | undefined>(undefined);

// Provider
export function DiagramProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(diagramReducer, initialState);

  const generateDiagram = async (prompt: string) => {
    try {
      dispatch({ type: 'SET_LOADING' });
      const response = await DiagramService.getInstance().generateDiagram(prompt);
      
      if (!response || !response.data) {
        throw new Error('Respuesta inválida del servidor');
      }

      dispatch({ type: 'SET_DIAGRAM', payload: response.data });
      return response;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      return {
        message: 'Error',
        data: {
          id: 'error',
          title: 'Error',
          description: 'No se pudo generar el diagrama',
          resources: [],
          children: []
        }
      };
    }
  };

  return (
    <DiagramContext.Provider value={{ ...state, generateDiagram, dispatch }}>
      {children}
    </DiagramContext.Provider>
  );
}

// Hook personalizado
export function useDiagram() {
  const context = useContext(DiagramContext);
  if (context === undefined) {
    throw new Error('useDiagram debe usarse dentro de DiagramProvider');
  }
  return context;
} 