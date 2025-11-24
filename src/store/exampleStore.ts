import { Example } from '@/types';
import { create } from 'zustand';

export const useExampleStore = create<Example>((_set) => ({
  name: 'Nextjs Boilerplate',
}));
