import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useBearStore = create(
    persist(
      (set, get) => ({
        bears: 0,
        addABear: (value) => set({ bears: get().bears + value }),
      }),
      {
        name: 'food-storage', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      },
    ),
  )
