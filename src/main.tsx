import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeContextProvider } from './contexts/ThemeContextProvider'
import Page from './pages'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeContextProvider>
            <Page />
        </ThemeContextProvider>
    </StrictMode>
)
