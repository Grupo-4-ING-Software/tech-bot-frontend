import create from 'zustand'

const useDiagramStore = create<DiagramStore>((set) => ({
  diagram: null,
  isLoading: false,
  error: null,
  generateDiagram: async (prompt: string) => {
    try {
      set({ isLoading: true });
      const response = await DiagramService.getInstance().generateDiagram(prompt);
      set({ diagram: response.data, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to generate diagram', isLoading: false });
    }
  },
}))
