import { WebSocketServer } from "typedapi-server-ws"
import { buildMap } from "typedapi-server"
import { reflection } from "./apiReflection"
import { Api } from "./Api"

new WebSocketServer({
    apiMap: buildMap(reflection, new Api),
    port: 8090
})