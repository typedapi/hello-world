export class Api {
    async hello(name: string): Promise<string> {
        return `Hello, ${name}!`
    }
}