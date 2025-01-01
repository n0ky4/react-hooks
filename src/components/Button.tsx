import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export default function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            className={twMerge(
                'py-0.5 px-1 rounded transition-colors',
                'dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-zinc-200',
                'bg-zinc-200 text-zinc-600 hover:bg-zinc-300 hover:text-zinc-700',
                className
            )}
            {...rest}
        >
            {children}
        </button>
    )
}
