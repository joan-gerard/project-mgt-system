interface IClient {
    id: string,
    name: string,
    email: string,
    phone: string
}

type ClientRowProps = {
    client: IClient,
    idx: number
}