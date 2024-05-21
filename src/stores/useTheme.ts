import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Props = { isDark: boolean, toggleIsDark: () => void };

// the store itself does not need any change
export const useTheme = create(
  persist<Props>(
    (set, get) => ({
      isDark: true,
      toggleIsDark: () => set({ isDark: !get().isDark }),
    }),
    {
      name: 'rm-storage',
    },
  ),
)