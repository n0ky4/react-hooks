import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type Position = {
    x: number
    y: number
}
const CURSOR_SIZE = 48
const INTERACTIVE_ELEMENTS = ['a', 'button', 'input', 'textarea', 'select']

interface CursorProps {
    show: boolean
}

export default function Cursor({ show }: CursorProps) {
    const [pos, setPos] = useState<Position>({ x: 0, y: 0 })
    const [focused, setFocused] = useState(false)

    const cursorSize = focused ? CURSOR_SIZE * 1.5 : CURSOR_SIZE

    useEffect(() => {
        const listener = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY })

            const el = document.elementFromPoint(e.clientX, e.clientY)

            if (el && INTERACTIVE_ELEMENTS.includes(el.tagName.toLowerCase())) setFocused(true)
            else setFocused(false)
        }

        document.addEventListener('mousemove', listener)

        return () => {
            document.removeEventListener('mousemove', listener)
        }
    }, [])

    return (
        <div
            className={twMerge(
                'fixed top-0 left-0 rounded-full pointer-events-none select-none border-2',
                'ease-out duration-200',
                focused
                    ? 'bg-transparent dark:border-white border-black'
                    : 'backdrop-invert border-transparent',
                show ? 'block' : 'hidden'
            )}
            style={{
                transform: `translate(${pos.x - cursorSize * 0.5}px, ${
                    pos.y - cursorSize * 0.5
                }px)`,
                width: `${cursorSize}px`,
                height: `${cursorSize}px`,
            }}
        />
    )
}
