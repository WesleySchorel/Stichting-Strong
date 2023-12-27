import { createClient } from "$lib/prismicio"

export async function load({fetch, request}){
    const client = createClient({fetch, request})

    const workshops = await client.getAllByType('workshop')

    return { workshops }
}