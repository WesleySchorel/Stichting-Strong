import { createClient } from "$lib/prismicio"

export async function load({fetch, request}){
    const client = createClient({fetch, request})

    const estafettemars = await client.getAllByType('conferentie')

    return { estafettemars }
}