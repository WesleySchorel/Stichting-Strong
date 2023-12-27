import { createClient } from "$lib/prismicio"

export async function load({fetch, request, params}){
    const client = createClient({fetch, request})
    const {workshopUID} = params
    const workshop = await client.getByUID('workshop', workshopUID)

    return { workshop }
}