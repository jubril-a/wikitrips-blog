// import { PortableText } from "next-sanity";
import PostContent from "./PostContent"

const Body = ({content}) => {
  return (
    <section className="my-10 prose lg:prose-xl">
      {/* <PortableText value={content} /> */}
        <PostContent body={content} />
    </section>
  )
}

export default Body