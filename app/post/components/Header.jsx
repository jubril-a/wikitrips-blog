const Header = ({h1, description, imgUrl}) => {
  return (
    <header>
        <h1 className="text-3xl md:text-[42px] font-semibold min-[680px]:leading-[52px] leading-[40px]">{h1}</h1>
        <p className="text-[18px] md:text-[22px] md:leading-[28px] text-[#6B6B6B] mt-5 tracking-tight font-medium">{description}</p>
        <div className="border-b-1 opacity-20  my-10"></div>
        <div className="overflow-hidden">
          <img src={imgUrl} alt="" />
        </div>
    </header>
  )
}

export default Header