// Generated file. Do not modify it.
import { getApiCreator, Event, ParametricEvent } from "typedapi-client"
import { ApiObjectReflection } from "typedapi-core"
export interface Api {
    hello(name: string): Promise<string>
}
const reflection: ApiObjectReflection = {
    "methods": {
        "hello": {
            "params": [
                {
                    "type": "string"
                }
            ],
            "return": {
                "type": "string"
            }
        }
    }
}
export const createClient = getApiCreator<Api>(reflection)
