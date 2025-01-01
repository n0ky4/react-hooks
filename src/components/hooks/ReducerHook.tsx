import { useCallback, useReducer, useState } from 'react'
import Button from '../Button'
import { Collapsible, HookDescription, HookMeta, HookTemplate, HookTitle } from '../HookTemplate'

interface Todo {
    id: string
    title: string
    done: boolean
}

const initialTodos: Todo[] = [
    {
        id: '752765cc-829c-4c38-9383-c89957dde123',
        title: 'Fazer carinho no gato',
        done: true,
    },
    {
        id: '3da78faa-19d7-4420-81c8-643446635c7e',
        title: 'Fazer as compras',
        done: false,
    },
    {
        id: '2d63b4d4-2174-4850-ab30-466f2e875009',
        title: 'Lavar a louça',
        done: false,
    },
]

type TodoAction =
    | {
          type: 'remove'
          id: string
      }
    | {
          type: 'add'
          id: string
          title: string
      }
    | {
          type: 'change'
          todo: Todo
      }

export default function ReducerHook() {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos)
    const [title, setTitle] = useState<string>('')

    const addTodo = useCallback((title: string) => {
        if (!title.trim().length) return
        dispatch({
            type: 'add',
            id: crypto.randomUUID(),
            title: title.trim(),
        })
        setTitle('')
    }, [])

    const removeTodo = useCallback((id: string) => {
        dispatch({
            type: 'remove',
            id,
        })
    }, [])

    const changeTodo = useCallback((todo: Todo) => {
        dispatch({
            type: 'change',
            todo,
        })
    }, [])

    function todoReducer(todos: Todo[], action: TodoAction): Todo[] {
        switch (action.type) {
            case 'add':
                return [
                    ...todos,
                    {
                        id: action.id,
                        title: action.title,
                        done: false,
                    },
                ]
            case 'change':
                return todos.map((x) => {
                    if (x.id === action.todo.id) return action.todo
                    return x
                })
            case 'remove':
                return todos.filter((x) => x.id !== action.id)
            default:
                throw new Error('Unknown action')
        }
    }

    return (
        <HookTemplate id='reducer'>
            <HookMeta>
                <HookTitle anchor='reducer'>useReducer</HookTitle>
                <HookDescription>
                    É semelhante ao useState, mas recebe um reducer, que é uma forma mais organizada
                    de realizar múltiplas alterações em um estado. É recomendado para estados mais
                    complexos, ou quando há a constante necessidade de manutener o código, pois o
                    reducer centraliza todas as alterações em um único lugar, facilitando a
                    visualização do código.
                </HookDescription>
                <Collapsible>
                    <HookDescription>
                        No exemplo abaixo, utilizamos o useReducer para adicionar, remover e alterar
                        tarefas de uma lista.
                    </HookDescription>
                </Collapsible>
            </HookMeta>
            <div>
                <div className='flex items-center gap-2'>
                    <input
                        className='w-full'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        placeholder='Adicione uma tarefa'
                    />
                    <Button onClick={() => addTodo(title)} className='p-1'>
                        Adicionar
                    </Button>
                </div>
                <div className='flex flex-col gap-2 mt-2'>
                    {todos.length === 0 && (
                        <p className='py-2 w-full text-center'>Nenhuma tarefa adicionada.</p>
                    )}

                    {todos.map((x) => (
                        <div
                            key={x.id}
                            className='text-sm flex items-center justify-between w-full p-1 border rounded dark:border-zinc-700 border-zinc-400'
                        >
                            <div className='flex items-center gap-1'>
                                <input
                                    type='checkbox'
                                    checked={x.done}
                                    onChange={(e) => {
                                        changeTodo({
                                            id: x.id,
                                            title: x.title,
                                            done: e.target.checked,
                                        })
                                    }}
                                    aria-label={`Marcar tarefa ${x.title} como ${
                                        x.done ? 'não feita' : 'feita'
                                    }`}
                                />
                                <span>{x.title}</span>
                            </div>
                            <div>
                                <Button
                                    onClick={() => {
                                        removeTodo(x.id)
                                    }}
                                >
                                    Deletar
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </HookTemplate>
    )
}
