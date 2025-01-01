const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const log = (msg: string) =>
    console.log(
        `%c[chat]%c ${msg}`,
        'padding:1px;border-radius:2px;background:#03fca9;color:black;font-weight:bold',
        ''
    )

function makeChat() {
    let connected = false

    async function connect(roomId: string) {
        log(`conectando à sala ${roomId}`)
        await sleep(1000)

        connected = true
        log('conectado!')
    }

    function disconnect() {
        if (!connected) return
        connected = false
        log('desconectado!')
    }

    return {
        connect,
        disconnect,
    }
}

const chat = makeChat()

export default chat
