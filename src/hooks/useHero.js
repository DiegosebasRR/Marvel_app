import { create } from "zustand";
import { persist } from "zustand/middleware";

const useHero = create(
  persist(
    (set) => ({
      heroes: [],
      updateHeroes: (heroes) => set(() => ({ heroes: heroes })),
    }),
    { name: "hero-storage" }
  )
);

export default useHero;
