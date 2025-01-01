import { DotsThree } from '@phosphor-icons/react'
import { Link } from 'lucide-react'
import { PropsWithChildren, useState } from 'react'
import Button from './Button'

interface HookTemplateProps extends PropsWithChildren {
    id: string
}

interface HookTitleProps extends PropsWithChildren {
    anchor: string
}

export function HookTitle({ children, anchor }: HookTitleProps) {
    return (
        <a href={`#${anchor}`} className='hover:underline flex items-center gap-2 w-fit'>
            <Link size={16} />
            <h2>{children}</h2>
        </a>
    )
}

export function HookDescription({ children }: PropsWithChildren) {
    return <p className='text-justify mt-2'>{children}</p>
}

export function HookMeta({ children }: PropsWithChildren) {
    return <div>{children}</div>
}

export function Collapsible({ children }: PropsWithChildren) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            {isOpen && children}
            <div className='w-full flex items-center justify-center'>
                <Button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className='px-0.5 h-4 mt-2 flex items-center justify-center leading-none'
                    aria-label='Mostrar mais'
                >
                    <DotsThree size={26} className='pointer-events-none' />
                </Button>
            </div>
        </div>
    )
}

export function HookTemplate({ id, children }: HookTemplateProps) {
    return (
        <div id={id} className='flex flex-col gap-3'>
            {children}
        </div>
    )
}
