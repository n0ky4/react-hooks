import { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react'
import { Theme, ThemeContext } from './ThemeContext'

const ST_KEY = 'theme'
const THEMES = ['dark', 'light']
const DEFAULT_THEME = THEMES[1]

export function ThemeContextProvider({ children }: PropsWithChildren) {
    const [theme, setTheme] = useState<Theme>('light')
    const initRef = useRef<boolean>(false)

    useEffect(() => {
        if (initRef.current) return
        const st = localStorage.getItem(ST_KEY) || ''
        if (!st || !THEMES.includes(st)) {
            localStorage.setItem('theme', DEFAULT_THEME)
            return
        }
        setTheme(st as Theme)
        initRef.current = true
    }, [])

    useEffect(() => {
        if (theme === 'dark') document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
        localStorage.setItem(ST_KEY, theme)
    }, [theme])

    const toggleTheme = useCallback(() => {
        setTheme((prev) => {
            if (prev === 'dark') return 'light'
            return 'dark'
        })
    }, [setTheme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
