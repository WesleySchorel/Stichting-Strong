import { createClient } from "$lib/prismicio"

export async function load({fetch, request}){
    const client = createClient({fetch, request})

    const nieuws = await client.getAllByType('nieuws')

    return { nieuws }
}