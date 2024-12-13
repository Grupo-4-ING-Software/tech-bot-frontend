import { axiosInstance } from './axiosInstance';
import {  DiagramResponse } from '../../types/diagram';

export class DiagramService {
  private static instance: DiagramService;

  private constructor() {}

  public static getInstance(): DiagramService {
    if (!DiagramService.instance) {
      DiagramService.instance = new DiagramService();
    }
    return DiagramService.instance;
  }

  async generateDiagram(prompt: string): Promise<DiagramResponse> {
    try {
      const response = await axiosInstance.post('/chat', {
        prompt: prompt
      });

      // El backend devuelve { data: { data: DiagramNode } }
      if (!response.data || !response.data.data) {
        throw new Error('Respuesta inválida del servidor');
      }

      // Extraer el diagrama de la respuesta anidada
      return {
        message: null,
        data: response.data.data
      };
    } catch (error) {
      console.error('Error generating diagram:', error);
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
  }
} 