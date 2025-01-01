import { HookDescription, HookMeta, HookTemplate, HookTitle } from '../HookTemplate'

export default function CallbackHook() {
    return (
        <HookTemplate id='callback'>
            <HookMeta>
                <HookTitle anchor='callback'>useCallback</HookTitle>
                <HookDescription>
                    É semelhante ao useMemo, mas é utilizado para <i>memoizar</i> funções. Ele é
                    útil para evitar que funções sejam recriadas a cada renderização.
                </HookDescription>

                <HookDescription>
                    Isso é útil quando a função é passada como propriedade para componentes filhos,
                    pois evita que o componente filho seja recriado desnecessariamente.
                </HookDescription>

                <HookDescription>
                    Assim como o useMemo, seu uso é recomendado apenas quando necessário, pois a
                    otimização prematura pode causar problemas de legibilidade e manutenção, além de
                    adicionar uma camada de complexidade desnecessária.
                </HookDescription>
            </HookMeta>
        </HookTemplate>
    )
}
