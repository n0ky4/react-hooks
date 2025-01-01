import { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import { Collapsible, HookDescription, HookMeta, HookTemplate, HookTitle } from '../HookTemplate'

export default function RefHook() {
    const countRef = useRef<number>(0)

    const inputRef = useRef<HTMLInputElement | null>(null)
    const [focused, setFocused] = useState(false)

    const handleCount = () => {
        countRef.current += 1
        alert(`Você clicou ${countRef.current} vez${countRef.current > 1 ? 'es' : ''}`)
    }

    const handleFocus = () => inputRef.current?.focus()

    useEffect(() => {
        const el = inputRef.current
        if (!el) return

        const blurListener = () => setFocused(false)
        const focusListener = () => setFocused(true)

        el.addEventListener('blur', blurListener)
        el.addEventListener('focus', focusListener)

        return () => {
            el.removeEventListener('blur', blurListener)
            el.removeEventListener('focus', focusListener)
        }
    }, [])

    return (
        <HookTemplate id='ref'>
            <HookMeta>
                <HookTitle anchor='ref'>useRef</HookTitle>
                <HookDescription>
                    É usado para criar uma referência a um elemento do DOM ou a um valor que
                    persistirá entre renderizações. Diferentemente do useState, o useRef não causa
                    re-renderizações quando seu valor é atualizado.
                </HookDescription>
                <HookDescription>
                    O que difere o useRef de uma variável comum é que a variável comum é recriada a
                    cada renderização, e persiste somente durante a renderização atual.
                </HookDescription>
                <Collapsible>
                    <HookDescription>
                        No primeiro exemplo, criamos uma referência para um contador que será
                        incrementado a cada clique no botão. Não utilizamos states neste caso, já
                        que não mostraríamos o valor do contador na tela, apenas o exibiríamos em um
                        alert.
                    </HookDescription>
                    <HookDescription>
                        No segundo exemplo, criamos uma referência para um input, que é focado
                        através de um botão. Utilizamos um estado para mostrar se o input está
                        focado ou não apenas para fins de demonstração.
                    </HookDescription>
                </Collapsible>
            </HookMeta>
            <div className='grid grid-cols-2 gap-4'>
                <Button onClick={handleCount} className='w-fit h-fit'>
                    Contagem
                </Button>
                <div className='flex flex-col gap-2'>
                    <Button onClick={handleFocus}>Focar no input</Button>
                    <input
                        ref={inputRef}
                        type='text'
                        className='focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                        placeholder={focused ? 'Focado' : 'Não focado'}
                    />
                </div>
            </div>
        </HookTemplate>
    )
}
