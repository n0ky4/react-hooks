import { useTheme } from '../../contexts/ThemeContext'
import Button from '../Button'
import { Collapsible, HookDescription, HookMeta, HookTemplate, HookTitle } from '../HookTemplate'

export default function ContextHook() {
    const { theme, toggleTheme } = useTheme()

    return (
        <HookTemplate id='context'>
            <HookMeta>
                <HookTitle anchor='context'>useContext</HookTitle>
                <HookDescription>
                    É usado para compartilhar uma informação entre componentes sem a necessidade de
                    passá-la em props.
                </HookDescription>
                <Collapsible>
                    <HookDescription>
                        Imagine que você precisa passar uma informação para vários componentes ao
                        mesmo tempo. Com os contexts, você pode compartilhar um dado entre todos os
                        componentes incluídos dentro dos chamados `Providers`.
                    </HookDescription>
                    <HookDescription>
                        No exemplo abaixo, utilizamos um contexto para compartilhar o tema da
                        aplicação, que é acessado através de um hook personalizado chamado
                        `useTheme`.
                    </HookDescription>
                    <HookDescription>
                        A cada alteração do tema, todos os componentes incluídos no Provider são
                        re-renderizados. Tais atualizações podem causar problemas de performance em
                        aplicações mais complexas, por isso é importante utilizar os hooks de{' '}
                        <i>memoização</i>, como o `useMemo` e o `useCallback`.
                    </HookDescription>
                </Collapsible>
            </HookMeta>
            <div>
                <Button className='px-2 py-1' onClick={toggleTheme}>
                    Alterar o tema para {theme === 'dark' ? 'claro' : 'escuro'}
                </Button>
            </div>
        </HookTemplate>
    )
}
