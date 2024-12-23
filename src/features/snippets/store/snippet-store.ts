"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { v4 as uuidv4 } from 'uuid';
import { Snippet, Version } from '../types';

interface SnippetState {
  snippets: Snippet[];
  selectedSnippetId: string | null;
  addSnippet: (snippet: Omit<Snippet, 'id' | 'createdAt' | 'updatedAt' | 'versions' | 'isDraft'>) => string;
  updateSnippet: (id: string, snippet: Partial<Snippet>, shouldVersion?: boolean) => void;
  publishSnippet: (id: string, message?: string) => void;
  deleteSnippet: (id: string) => void;
  duplicateSnippet: (id: string) => string;
  setSelectedSnippetId: (id: string | null) => void;
}

export const useSnippetStore = create<SnippetState>()(
  persist(
    immer((set) => ({
      snippets: [],
      selectedSnippetId: null,
      addSnippet: (newSnippet) => {
        const id = uuidv4();
        set((state) => {
          const snippet = {
            ...newSnippet,
            id,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            versions: [],
            isDraft: true,
          };
          state.snippets.push(snippet);
          state.selectedSnippetId = snippet.id;
        });
        return id;
      },
      updateSnippet,
      publishSnippet,
      deleteSnippet,
      duplicateSnippet,
      setSelectedSnippetId: (id) => set((state) => { state.selectedSnippetId = id; }),
    })),
    {
      name: 'snippet-storage',
      version: 1,
    }
  )
);