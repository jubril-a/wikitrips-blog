import { client } from "../../src/sanity/client";

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

const options = { next: { revalidate: 30 } };

export default async function MainBlog() {
    const post = await client.fetch(POSTS_QUERY, {}, options);

    const publishedAt = new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

  return (
    <div className="grid [grid-template-columns:1.75fr_1fr] gap-8 mb-4">
        <div className="bg-[#03cdfd] aspect-video overflow-hidden">
          <img src={post.mainImage.asset.url} alt="" /> 
        </div>
        <div className="h-full py-8">
            <span className="text-gray-700">{publishedAt}</span>
            <h2 className="text-4xl my-4 font-semibold">{post.title}</h2>
            <p className="line-clamp-2 text-gray-700">{post.short}</p>
            <a href={`/post?post_id=${post._id}`} className="py-2 px-4 text-sm text-white bg-gray-600 inline-block mt-8 hover:bg-[#397dd6]">READ MORE</a>     
        </div>    
    </div>
  )
}