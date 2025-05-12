const Header = ({h1, description, imgUrl}) => {
  return (
    <header>
        <h1 className="text-[42px] font-bold leading-[52px]">{h1}</h1>
        <p className="text-[22px] leading-[28px] text-[#6B6B6B] mt-5 tracking-tight">{description}</p>
        <div className="border-b-1 opacity-20  my-10"></div>
        <div className="aspect-video bg-amber-600 overflow-hidden">
          <img src={imgUrl} alt="" />
        </div>
    </header>
  )
}

export default Header