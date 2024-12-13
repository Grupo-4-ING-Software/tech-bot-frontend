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

export interface DiagramRequest {
  prompt: string;
}

export interface DiagramResponse {
  message: string | null;
  data: DiagramNode;
} 