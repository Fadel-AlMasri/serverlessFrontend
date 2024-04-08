import { create } from 'zustand';

type UIStoreState = {
  action: 'customers';
};

type UIStoreActions = {
  setAction: (action: 'customers') => void;
};

const useUIStore = create<UIStoreState & UIStoreActions>((set) => ({
  action: 'customers',

  setAction: (action: 'customers') => set({ action }),
}));

export default useUIStore;
