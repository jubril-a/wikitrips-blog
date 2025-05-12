'use client'

import { createClient } from "next-sanity"
import { useSearchParams } from "next/navigation";
import Header from "./Header";
import Body from "./Body";

const client = createClient({
    apiVersion: "2025-05-08",
    dataset: "production",
    projectId: "8zi7n528",
    useCdn: false,
})


const options = { next: { revalidate: 30 } };

export default async function Blog() {

    const urlParams = useSearchParams()
    const postId = urlParams.get("post_id")

    const POSTS_QUERY = `*[_type == "post" && _id == "${postId}"][0]{title, short, publishedAt, ...mainImage{...asset-> {url}}, body}`
   
    const post = await client.fetch(POSTS_QUERY, {}, options);

    return (
        <div className="max-w-[680px] m-auto mt-9">
            <Header h1={post.title} description={post.short} imgUrl={post.url}  />
            <Body content={post.body} />
        </div>
    )
}

