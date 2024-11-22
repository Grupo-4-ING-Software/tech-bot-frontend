export interface Resource {
  title: string;
  url: string;
  type: 'video' | 'article' | 'course';
}

export interface DiagramNode {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
  children?: DiagramNode[] | null;
}

export interface DiagramResponse {
  message: string | null;
  data: DiagramNode;
}

export interface DiagramRequest {
  prompt: string;
}

export interface ErrorDiagram extends DiagramNode {
  id: 'error';
  description: string;
  resources: [];
  children: [];
}

export function isErrorDiagram(diagram: DiagramNode): diagram is ErrorDiagram {
  return diagram.id === 'error';
} 