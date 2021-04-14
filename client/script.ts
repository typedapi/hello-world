// Required for parcel
// see https://flaviocopes.com/parcel-regeneratorruntime-not-defined/
import 'regenerator-runtime/runtime'
// Import TypedAPI libraries
import { WebSocketTransport } from "typedapi-client-browser-ws"
// Import api factory
import { createClient } from "./apiReflection"

window.onload = function() {

    const statusSpan = document.getElementById("status")!
    const responseSpan = document.getElementById("response")!
    const textInput = document.getElementById("text")! as HTMLInputElement
    const sendButton = document.getElementById("send")! as HTMLButtonElement

    const transport = new WebSocketTransport({
        url: "ws://localhost:8090",
        logging: true
    })
    
    const api = createClient({ transport })
    
    transport.connectionStatusChanged.subscribe(async (status) => {
        statusSpan.innerHTML = status
    })

    sendButton.addEventListener("click", async () => {

        sendButton.disabled = true
        
        try {

            if(transport.getConnectionStatus() !== "connected") {
                alert("Not connected")
                transport.tryReconnect()
                sendButton.disabled = false
                return        
            }

            const text = textInput.value    

            // call api method    
            const response = await api.hello(text)

            responseSpan.innerHTML = response

        } catch(err) {
            console.error(err)
        }

        sendButton.disabled = false

    })
}