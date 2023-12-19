import { createClient } from "$lib/prismicio"

export async function load({fetch, request, params}){
    const client = createClient({fetch, request})
    const {nieuwsUID} = params
    const nieuws = await client.getByUID('nieuws', nieuwsUID)

    return { nieuws }
}