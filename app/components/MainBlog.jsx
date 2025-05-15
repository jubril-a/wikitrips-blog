'use client'

import { useEffect, useState } from 'react'
import { createClient } from 'next-sanity'

const client = createClient({
  apiVersion: '2025-05-08',
  dataset: 'production',
  projectId: '8zi7n528',
  useCdn: false,
})

const POSTS_QUERY = `
*[_type == "post"] | order(publishedAt desc)[0] {
  _id,
  publishedAt,
  title,
  short,
  mainImage {
    asset-> {
      url
    }
  }
}
`

export default function MainBlog() {
  const [post, setPost] = useState(null)

  useEffect(() => {
    client.fetch(POSTS_QUERY).then((data) => {
      setPost(data)
    })
  }, [])

  if (!post) {
    return (
      <div className="grid justify-center items-center h-svh">
        <div className="loader"></div>
      </div>
    )
  }

  const publishedAt = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="grid min-[760px]:[grid-template-columns:1.75fr_1fr] gap-4 min-[760px]:gap-8 mb-8">
      <div className="bg-[#03cdfd] max-[760px]:aspect-video overflow-hidden">
        <img src={post.mainImage.asset.url} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="h-full min-[760px]:py-8">
        <span className="text-gray-700">{publishedAt}</span>
        <h2 className="text-4xl my-4 font-semibold">{post.title}</h2>
        <p className="line-clamp-2 text-gray-700">{post.short}</p>
        <a href={`/post?post_id=${post._id}`} className="py-2 px-4 text-sm text-white bg-gray-600 inline-block mt-6 hover:bg-[#397dd6]">
          READ MORE
        </a>
      </div>
    </div>
  )
}
