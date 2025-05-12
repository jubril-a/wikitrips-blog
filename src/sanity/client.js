import { createClient } from "next-sanity"

export const client = createClient({
    apiVersion: "2025-05-08",
    dataset: "production",
    projectId: "8zi7n528",
    useCdn: false,
})