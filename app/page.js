import { client } from "../src/sanity/client";
import { PortableText } from "next-sanity";
import Hero from "./components/Hero";
import MainBlog from "./components/MainBlog";
import BlogContainer from "./components/BlogContainer";

const POSTS_QUERY = `
*[_type == "post"][0]{
    _id,
    publishedAt,
    title,
    short,
    ...mainImage{...asset-> {url}},
    body,
}
`

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const post = await client.fetch(POSTS_QUERY, {}, options);

  return (
    <>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 sm:px-16 py-8">
        <MainBlog />
        <BlogContainer />
      </section>
    </>
  );
}
