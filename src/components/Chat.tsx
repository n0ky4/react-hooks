import { LoaderCircle } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import chat from '../util/chat'
import Button from './Button'

const rooms = ['Minecraft', 'Terraria', 'Stardew Valley']

export default function Chat() {
    const [roomId, setRoomId] = useState<string | null>(null)

    const loadingRef = useRef(false)
    const [loading, setLoading] = useState(false)

    const [showChat, setShowChat] = useState(false)

    const disconnect = useCallback(() => {
        chat.disconnect()
        setShowChat(false)
        setLoading(false)
        loadingRef.current = false
    }, [])

    useEffect(() => {
        if (loadingRef.current) return

        if (!roomId) {
            disconnect()
            return
        }

        loadingRef.current = true
        setLoading(true)

        chat.connect(roomId).then(() => {
            setShowChat(true)

            loadingRef.current = false
            setLoading(false)
        })

        return () => {
            disconnect()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roomId])

    const changeRoom = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (loadingRef.current) return
        setRoomId(e.target.value || null)
    }

    return (
        <div className='col-span-2'>
            <div>
                <label htmlFor='room-selector' className='text-xs dark:text-zinc-400 text-zinc-600'>
                    Selecione uma sala de chat
                </label>
                <div className='flex items-center gap-2'>
                    <select
                        id='room-selector'
                        className={twMerge(
                            'w-full p-1 border rounded transition-colors',
                            'dark:bg-zinc-800 dark:border-zinc-700 dark:text-white'
                        )}
                        onChange={changeRoom}
                        value={roomId || ''}
                        disabled={loading}
                    >
                        <option value=''>Selecione uma sala</option>
                        {rooms.map((room) => (
                            <option key={room} value={room}>
                                {room}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {loading && (
                <div className='flex items-center gap-1 dark:text-zinc-400 text-zinc-600 text-xs mt-4'>
                    <LoaderCircle className='animate-spin' size={16} />
                    <p className=''>Conectando...</p>
                </div>
            )}

            {showChat && (
                <div className='mt-4'>
                    <div>
                        <div className='mb-2'>
                            <h2 className='text-lg dark:text-zinc-400 text-zinc-600'>Chat</h2>
                            <p className='text-xs dark:text-zinc-400 text-zinc-600'>
                                Você está conectado à sala {roomId}.
                            </p>
                        </div>
                        <Button onClick={() => setRoomId(null)}>Desconectar</Button>
                    </div>
                </div>
            )}
        </div>
    )
}
