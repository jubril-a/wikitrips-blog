import PostContent from "./PostContent"

const Body = ({content}) => {
  return (
    <section className="my-10 prose lg:prose-xl">
        <PostContent body={content} />
    </section>
  )
}

export default Body