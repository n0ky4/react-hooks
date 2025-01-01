import { useMemo, useState } from 'react'
import { filterMovies } from '../../util/movies'
import { Collapsible, HookDescription, HookMeta, HookTemplate, HookTitle } from '../HookTemplate'
import Movie from '../movie/Movie'

export default function MemoHook() {
    const [query, setQuery] = useState<string>('')

    const movies = useMemo(() => filterMovies(query, 'memo'), [query])
    filterMovies(query, 'normal')

    return (
        <HookTemplate id='memo'>
            <HookMeta>
                <HookTitle anchor='memo'>useMemo</HookTitle>
                <HookDescription>
                    É usado para <i>memoizar</i> o resultado de uma função e evitar que ela seja
                    recalculada em todas as renderizações. Recomenda-se usar o useMemo apenas quando
                    o cálculo realmente for custoso, uma vez que sua utilização em cálculos simples
                    pode prejudicar a performance.
                </HookDescription>
                <Collapsible>
                    <HookDescription>
                        O useMemo só recalcula o valor memorizado quando uma das dependências muda.
                        Isso pode melhorar a performance de componentes que realizam operações
                        pesadas, evitando cálculos desnecessários em cada renderização.
                    </HookDescription>
                    <HookDescription>
                        Observe o console e realize ações no site, como digitar no campo de pesquisa
                        ou trocar o tema. Veja a diferença da quantidade de chamadas entre o useMemo
                        e a função normal. Isso ocorre por que cada vez que você troca o tema, por
                        exemplo, o React re-renderiza o componente e a função normal é chamada
                        novamente, enquanto o useMemo só é chamado quando a dependência `query`
                        muda.
                    </HookDescription>
                </Collapsible>
            </HookMeta>
            <div>
                <input
                    value={query || ''}
                    onChange={(e) => setQuery(e.target.value)}
                    className='w-full'
                    placeholder='Faça uma pesquisa de um filme'
                />
                <div className='flex flex-col gap-4 mt-4'>
                    {movies && movies.results.length > 0 ? (
                        <>
                            {movies.results.map((x) => (
                                <Movie key={`${x.Title.toLowerCase()}-${x.Year}`} data={x} />
                            ))}
                            {movies.more > 0 && (
                                <p className='w-full text-center pb-24'>
                                    E mais {movies.more} resultados...
                                </p>
                            )}
                        </>
                    ) : (
                        <p className='w-full text-center pb-24'>Nenhum resultado encontrado.</p>
                    )}
                </div>
            </div>
        </HookTemplate>
    )
}
