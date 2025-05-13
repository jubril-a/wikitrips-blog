// 'use client'

// import { createClient } from "next-sanity"
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import Header from "./Header";
// import Body from "./Body";

// const client = createClient({
//     apiVersion: "2025-05-08",
//     dataset: "production",
//     projectId: "8zi7n528",
//     useCdn: false,
// })


// const options = { next: { revalidate: 30 } };

// export default function Blog() {
//     const urlParams = useSearchParams()
//     const postId = urlParams.get("post_id")
//     const [post, setPost] = useState(null)

//     useEffect(() => {
//         const POSTS_QUERY = `*[_type == "post" && _id == "${postId}"][0]{title, short, publishedAt, ...mainImage{...asset-> {url}}, body}`

//         const fetchedPost = async () => {
//             let pst = await client.fetch(POSTS_QUERY, {}, options);

//             setPost(pst)
//         }


//         fetchedPost()

//     }, [postId])

//     return (
//         <div className="max-w-[680px] m-auto mt-9">
//             <Header h1={post.title} description={post.short} imgUrl={post.url}  />
//             <Body content={post.body} />
//         </div>
//     )
// }


'use client'

import { createClient } from "next-sanity"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./Header";
import Body from "./Body";

const client = createClient({
  apiVersion: "2025-05-08",
  dataset: "production",
  projectId: "8zi7n528",
  useCdn: false,
});

export default function Blog() {
  const searchParams = useSearchParams();
  const postId = searchParams.get("post_id");
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!postId) return;

    const fetchPost = async () => {
      const POSTS_QUERY = `*[_type == "post" && _id == "${postId}"][0]{title, short, publishedAt, mainImage{asset->{url}}, body}`;
      const fetchedPost = await client.fetch(POSTS_QUERY);
      setPost(fetchedPost);
    };

    fetchPost();
  }, [postId]);

  if (!post) return <p>Loading post data...</p>;

  return (
    <div className="max-w-[680px] m-auto mt-9">
      <Header
        h1={post.title}
        description={post.short}
        imgUrl={post.mainImage?.asset?.url}
      />
      <Body content={post.body} />
    </div>
  );
}
