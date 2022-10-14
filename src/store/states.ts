import create from "zustand";

interface Store {
  currentRoute: string;
  setCurrentRoute: (routeName: string) => void;
}

const useStore = create<Store>((set) => ({
  currentRoute: "/",
  setCurrentRoute: (routeName: string) =>
    set((state) => ({ currentRoute: state.currentRoute })),
}));

export default useStore;
