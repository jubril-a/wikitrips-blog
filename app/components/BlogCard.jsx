const BlogCard = ({publishedAt, title, short}) => {
  return (
    <div className="first:hidden">
        <div className="aspect-video bg-[#03cdfd] mb-4"></div>
        <span className="self-end text-gray-700">{publishedAt}</span>
        <h2 className="text-xl my-2 font-medium">{title}</h2>
        <p className="line-clamp-2 mb-4">{short}</p>
        <a href="" className="py-2 px-4 text-sm bg-[#03cdfd] inline-block hover:bg-[#397dd6]">READ MORE</a>
    </div>
  )
}

export default BlogCard