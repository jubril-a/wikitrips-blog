'use client'

import { createClient } from "next-sanity"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Header from "./Header"
import Body from "./Body"

const client = createClient({
  apiVersion: "2025-05-08",
  dataset: "production",
  projectId: "8zi7n528",
  useCdn: false,
})

function readableDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function GetnDisplayPost() {
  const searchParams = useSearchParams()
  const postId = searchParams.get("post_id")
  const [post, setPost] = useState(null)

  useEffect(() => {
    if (!postId) return

    const POSTS_QUERY = `*[_type == "post" && _id == "${postId}"][0]{title, short, publishedAt, mainImage{asset->{url}}, body}`
    
    client.fetch(POSTS_QUERY)
      .then(fetchedPost => {
        setPost(fetchedPost)
      })
      .catch(err => {
        console.error("Error fetching post:", err)
      })
  }, [postId])

  if (!post) {
    return (
      <div className="grid justify-center items-center h-svh">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <div className="max-w-[680px] mx-auto mt-15 px-4">
      <Header
        publishedAt={readableDate(post.publishedAt)}
        h1={post.title}
        description={post.short}
        imgUrl={post.mainImage?.asset?.url}
      />
      <Body content={post.body} />
    </div>
  )
}

export default function Blog() {
  return (
    <div>
      <GetnDisplayPost />
    </div>
  )
}
