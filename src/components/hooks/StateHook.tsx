import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import octopusData from '../../assets/octopusData'
import { Collapsible, HookDescription, HookMeta, HookTemplate, HookTitle } from '../HookTemplate'

export default function StateHook() {
    const [input, setInput] = useState<string>('Valor padrão')

    const [index, setIndex] = useState<number>(0)
    const [imgIndex, setImgIndex] = useState<number>(0)
    const [selectedColor, setSelectedColor] = useState<number>(0)

    const data = octopusData[index]

    const next = () => {
        setIndex((prev) => {
            let nextIndex = prev + 1
            if (nextIndex >= octopusData.length) nextIndex = 0
            setImgIndex(0)
            return nextIndex
        })
    }

    const nextImg = () => {
        setImgIndex((prev) => {
            let nextIndex = prev + 1
            if (nextIndex >= data.images.length) nextIndex = 0
            return nextIndex
        })
    }

    return (
        <HookTemplate id='state'>
            <HookMeta>
                <HookTitle anchor='state'>useState</HookTitle>
                <HookDescription>
                    É usado para armazenar/lembrar informações do usuário, como o texto de um input,
                    o índice de uma página e outros.
                </HookDescription>
                <Collapsible>
                    <HookDescription>
                        Você pode até usar uma variável normal para armazenar um estado, mas sem os
                        states, o React não sabe quando ele deve re-renderizar o componente assim
                        que houver uma alteração.
                    </HookDescription>
                    <HookDescription>
                        Nos exemplos abaixo, utilizamos os states para: armazenar o texto de um
                        input, selecionar uma cor, armazenar o índice de uma página e o índice de
                        uma imagem.
                    </HookDescription>
                </Collapsible>
            </HookMeta>
            <div className='grid grid-cols-3 gap-4'>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-1'>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='Insira um valor'
                        />
                        <p className='text-xs max-w-full truncate'>Texto: {input}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        {['bg-red-400', 'bg-orange-400', 'bg-emerald-400', 'bg-blue-400'].map(
                            (x, i) => {
                                return (
                                    <button
                                        className={twMerge(
                                            'w-12 h-12 rounded-lg transition-all border-2 border-transparent',
                                            selectedColor === i
                                                ? 'opacity-100 border-white/50'
                                                : 'opacity-50',
                                            x
                                        )}
                                        key={x}
                                        onClick={() => setSelectedColor(i)}
                                        aria-label={`Selecionar cor ${x.split('-')[1]}`}
                                    />
                                )
                            }
                        )}
                    </div>
                </div>
                <div className='flex flex-col gap-1 col-span-2 border p-4 rounded border-zinc-300 dark:border-zinc-600'>
                    <div className='flex items-center justify-between text-xs'>
                        <span className='text-zinc-400'>
                            Página {index + 1}/{octopusData.length}
                        </span>
                        <button
                            className={twMerge(
                                'disabled:opacity-20 disabled:cursor-not-allowed',
                                'enabled:hover:underline opacity-100'
                            )}
                            disabled={index === octopusData.length}
                            onClick={next}
                        >
                            {'Próximo 🠊'}
                        </button>
                    </div>
                    <div
                        className='w-full h-64 rounded relative mb-2 overflow-hidden bg-cover bg-center'
                        style={{
                            background: `url(${data.images[imgIndex]})`,
                        }}
                    >
                        <div className='absolute bottom-0 p-4 z-10 bg-black/50 w-full flex items-center justify-between text-white'>
                            <div className='leading-none'>
                                <h3 className='text-xl font-bold'>{data.title}</h3>
                                <span className='text-xs text-zinc-400'>{data.binomial}</span>
                            </div>
                            <button onClick={nextImg} className='text-4xl'>
                                {'🠊'}
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 text-sm text-justify'>
                        {data.description.split('\n').map((x, i) => (
                            <p key={i}>{x}</p>
                        ))}
                    </div>
                </div>
            </div>
        </HookTemplate>
    )
}
