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
    <div className="aspect-[16/6] grid [grid-template-columns:1.75fr_1fr] gap-8 mb-4">
        <div className="bg-[#03cdfd] h-full"></div>
        <div className="h-full py-8">
            <span className="self-end text-gray-700">{publishedAt}</span>
            <h2 className="text-4xl my-4 font-semibold">{post.title}</h2>
            <p>{post.short}</p>
            <a href="" className="py-2 px-4 text-sm bg-[#03cdfd] inline-block mt-8 hover:bg-[#397dd6]">READ MORE</a>     
        </div>    
    </div>
  )
}