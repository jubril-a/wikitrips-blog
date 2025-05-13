const Header = ({publishedAt, h1, description, imgUrl}) => {
  return (
    <header >
        {/* <span className="text-gray-700 text-right block">{publishedAt}</span> */}
        <h1 className="text-[36px] md:text-[42px] font-bold leading-[52px]">{h1}</h1>
        <p className="text-[18px] md:text-[22px] md:leading-[28px] text-[#6B6B6B] mt-5 tracking-tight font-medium">{description}</p>
        <div className="border-b-1 opacity-20  my-10"></div>
        <div className="aspect-video bg-amber-600 overflow-hidden">
          <img src={imgUrl} alt="" />
        </div>
    </header>
  )
}

export default Header