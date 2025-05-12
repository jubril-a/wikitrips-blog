import { client } from "../src/sanity/client";
import Hero from "./components/Hero";
import MainBlog from "./components/MainBlog";
import BlogContainer from "./components/BlogContainer";
import Session from "./components/Session";
import Footer from "./components/Footer";

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

  return (
    <>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 sm:px-16 py-16">
        <MainBlog />
        <BlogContainer />
      </section>
      <Session />
      <Footer />
    </>
  );
}
