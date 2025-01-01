import { useState } from 'react'
import Button from '../Button'
import Chat from '../Chat'
import Cursor from '../Cursor'
import { Collapsible, HookDescription, HookMeta, HookTemplate, HookTitle } from '../HookTemplate'

export default function EffectHook() {
    const [cursorEnabled, setCursorEnabled] = useState(false)

    const toggleCursor = () => setCursorEnabled(!cursorEnabled)

    return (
        <>
            <Cursor show={cursorEnabled} />
            <HookTemplate id='effect'>
                <HookMeta>
                    <HookTitle anchor='effect'>useEffect</HookTitle>
                    <HookDescription>
                        É utilizado para sincronizar algum componente com um sistema externo, isto
                        é, fora do escopo do React, como o consumo de APIs, event handlers,
                        manipulação de DOM via JavaScript nativo, e outros.
                    </HookDescription>
                    <HookDescription>
                        O useEffect também recebe uma função de limpeza (cleanup), que é executada
                        quando o componente é desmontado. É útil para remover event listeners,
                        subscriptions, timeouts, e outras tarefas que precisam ser limpas quando o
                        componente não é mais utilizado.
                    </HookDescription>
                    <Collapsible>
                        <HookDescription>
                            No primeiro exemplo, o useEffect é utilizado para adicionar um event
                            listener global para capturar o movimento do mouse, assim, podemos
                            definir a posição do cursor em um state e utilizá-lo no nosso cursor
                            customizado.
                        </HookDescription>
                        <HookDescription>
                            Já no segundo exemplo, o useEffect é utilizado para entrar em uma sala
                            de chat fictícia (simulada por um setTimeout). Ao alterar o id da sala,
                            o useEffect é executado novamente, simulando a conexão e desconexão
                            entre salas de chat.
                        </HookDescription>
                    </Collapsible>
                </HookMeta>
                <div className='flex flex-col gap-4'>
                    <div>
                        <Button onClick={toggleCursor}>
                            {cursorEnabled ? 'Desativar' : 'Ativar'} cursor
                        </Button>
                    </div>
                    <Chat />
                </div>
            </HookTemplate>
        </>
    )
}
