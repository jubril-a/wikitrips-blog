import { PortableText } from "next-sanity";

const Body = ({content}) => {
  return (
    <section className="my-10 prose lg:prose-xl">
      <PortableText value={content} />
    </section>
  )
}

export default Body