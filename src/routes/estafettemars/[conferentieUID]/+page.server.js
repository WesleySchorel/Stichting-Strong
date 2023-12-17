import { createClient } from "$lib/prismicio"

export async function load({fetch, request, params}){
    const client = createClient({fetch, request})
    const {conferentieUID} = params
    const conferentie = await client.getByUID('conferentie', conferentieUID)

    return { conferentie }
}