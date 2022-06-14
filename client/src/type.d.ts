interface IClient {
    id: string,
    name: string,
    email: string,
    phone: string
}

interface IClients {
    clients: IClient[]
}

type ClientRowProps = {
    client: IClient,
    idx: number
}