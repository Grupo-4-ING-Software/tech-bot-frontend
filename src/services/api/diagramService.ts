import { DiagramRequest, DiagramResponse } from '../../types/diagram';
import { API_ROUTES } from '../../shared/utils/routes';

export class DiagramService {
  private static instance: DiagramService;
  private baseUrl: string = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

  private constructor() {}

  public static getInstance(): DiagramService {
    if (!DiagramService.instance) {
      DiagramService.instance = new DiagramService();
    }
    return DiagramService.instance;
  }

  async generateDiagram(prompt: string): Promise<DiagramResponse> {
    try {
      const request: DiagramRequest = { prompt };
      const response = await fetch(`${this.baseUrl}${API_ROUTES.GENERATE_DIAGRAM}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error('Failed to generate diagram');
      }

      return await response.json();
    } catch (error) {
      console.error('Error generating diagram:', error);
      throw error;
    }
  }
} 