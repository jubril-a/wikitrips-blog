const BlogCard = ({id, publishedAt, title, short, imgUrl}) => {
  return (
    <div>
        <div className="aspect-video bg-[#03cdfd] mb-4 overflow-hidden">
          <img src={imgUrl} alt="" className="object-cover w-full h-full" />
        </div>
        <span className="text-gray-700">{publishedAt}</span>
        <h2 className="text-xl my-2 font-semibold">{title}</h2>
        <p className="line-clamp-2 text-gray-700 mb-4">{short}</p>
        <a href={`/post/?post_id=${id}`} className="py-2 px-4 text-sm text-white bg-gray-600 inline-block hover:bg-[#397dd6]">READ MORE</a>
    </div>
  )
}

export default BlogCard