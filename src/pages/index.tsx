import { Moon, Sun } from 'lucide-react'
import CallbackHook from '../components/hooks/CallbackHook'
import ContextHook from '../components/hooks/ContextHook'
import EffectHook from '../components/hooks/EffectHook'
import MemoHook from '../components/hooks/MemoHook'
import ReducerHook from '../components/hooks/ReducerHook'
import RefHook from '../components/hooks/RefHook'
import StateHook from '../components/hooks/StateHook'
import { useTheme } from '../contexts/ThemeContext'

function Page() {
    const { theme, toggleTheme } = useTheme()

    return (
        <main className='max-w-screen-md mx-auto px-4 pt-12 pb-64 flex flex-col gap-12 '>
            <div>
                <div className='flex w-full items-center justify-between'>
                    <h1>React Hooks</h1>
                    <button
                        onClick={toggleTheme}
                        className='w-8 h-8 flex items-center justify-center overflow-hidden'
                        aria-label={`Mudar para o tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
                    >
                        <div
                            className='flex flex-col gap-2 transition-all ease-out duration-300 pointer-events-none'
                            style={{
                                transform: `translateY(${theme === 'dark' ? '-16px' : '16px'})`,
                            }}
                        >
                            <Moon />
                            <Sun />
                        </div>
                    </button>
                </div>
                <p>
                    Olá! Esse projeto foi criado para explorar como funcionam os states mais
                    utilizados no React e seus casos de uso.
                </p>
            </div>
            <StateHook />
            <ReducerHook />
            <EffectHook />
            <RefHook />
            <ContextHook />
            <MemoHook />
            <CallbackHook />
        </main>
    )
}

export default Page
