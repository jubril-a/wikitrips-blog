import BlogCard from "./BlogCard"
import { createClient } from 'next-sanity'

const client = createClient({
  apiVersion: '2025-05-08',
  dataset: 'production',
  projectId: '8zi7n528',
  useCdn: false,
})


const POSTS_QUERY = `
*[_type == "post"] | order(publishedAt desc) {
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

function readableDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

const options = { next: { revalidate: 30 } };

export default async function BlogContainer() {
    const post = await client.fetch(POSTS_QUERY, {}, options);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {post.slice(1).map((post) =>  (
            <BlogCard
                key={post._id}
                id={post._id}
                publishedAt={readableDate(post.publishedAt)}
                title={post.title}
                short={post.short}
                imgUrl={post.mainImage.asset.url}
            />
            )
        )}
    </div>
  )
}
