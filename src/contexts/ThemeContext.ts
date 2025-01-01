import { createContext, useContext } from 'react'

export type Theme = 'dark' | 'light'

interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    setTheme: () => undefined,
    toggleTheme: () => undefined,
})

export const useTheme = () => {
    return useContext(ThemeContext)
}
