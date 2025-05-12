import { PortableText } from "next-sanity";

const Body = ({content}) => {
  return (
    <section className="my-10">
      <PortableText value={content} />
    </section>
  )
}

export default Body