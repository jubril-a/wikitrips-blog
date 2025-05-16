'use client'

import { useState } from "react"
import Image from "next/image"

const LinkBox = ({href, img, head, desc}) => {
    return (
        <a href={href} className="sm:px-4 py-2 sm:py-3 flex items-center gap-3 sm:hover:bg-white rounded-xl">
            <img src={img} alt="" width={32} height={32} />
            <p>
                <span className="font-medium">{head}</span><br />
                <span className="max-[420px]:hidden text-sm text-gray-500">{desc}</span>
            </p>
        </a>
    )
}

const Navbar = () => {
  const [isVisible, setVisible] = useState(false)
  const [isExpanded, setExpanded] = useState(false)

  return (
    <nav className="fixed z-999 top-0 w-full bg-white">
        <p className="text-[15px] text-center px-2 py-2.5 bg-black text-white">Need Travel Assistance? <a href="https://www.wikitripstnt.com/session.html" className="text-[#acff1c] hover:underline">Book a session today! -&gt;</a></p>
        <div className="border-b-1 border-gray-200">
            <div className="flex items-center justify-between flex-wrap px-4 py-3 max-w-[1152px] mx-auto">
                <Image src="/logo.png" alt="wikitrips logo" width={144} height={42.02} />
                <button className="sm:hidden cursor-pointer">
                    <Image src={isVisible ? "/close.png" : "/hamburger.png"} alt="" width={24} height={24} onClick={() => setVisible(!isVisible)} />
                </button>
                <div className={"sm:flex sm:gap-4 " + `${isVisible ? "grid w-full p-6" : "hidden"}`}>
                    <a href="https://www.wikitripstnt.com/" className="font-medium hover:text-primary max-sm:px-2 max-sm:py-4 max-sm:border-b-1 max-sm:border-gray-200">Home</a>
                    <a href="" onClick={(e) => {setExpanded(!isExpanded);e.preventDefault()}} className="font-medium hover:text-primary max-sm:px-2 max-sm:py-4 max-sm:border-b-1 max-sm:border-gray-200 flex gap-2 items-center">
                        <span>Services</span>
                        <Image src="/caret.png" width={12} height={12} alt="" />
                    </a>
                    {/* services dropdown */}
                    {isExpanded &&
                        <div className="sm:absolute sm:top-[120px] sm:right-4 sm:flex bg-[#eee] sm:items-start py-6 sm:py-8 sm:rounded-xl sm:min-w-[640px]">
                            <div className="px-6 sm:px-8 sm:border-r-1 sm:border-gray-300">
                                <LinkBox head="Visa" desc="Hassle-free visa services" href="https://www.wikitripstnt.com/visa.html" img="/passport.png" />
                                <LinkBox head="Tours" desc="Discover exciting destinations" href="https://www.wikitripstnt.com/tour.html" img="/tour.png" />
                                <LinkBox head="Flight" desc="Find and book flights effortlessly" href="https://www.wikitripstnt.com/flights.html" img="/plane.png" />
                                <LinkBox head="Study" desc="Guidance for studying overseas" href="https://www.wikitripstnt.com/study.html" img="/study.png"/>
                            </div>
                            <div className="grid px-6 sm:px-8 py-4 gap-4">
                                <span className="text-sm font-medium">Other Services</span>
                                <a href="https://www.wikitripstnt.com/evisa.html" className="text-sm text-gray-500 hover:text-primary">eVisa Assistance</a>
                                <a href="" className="text-sm text-gray-500 hover:text-primary">Appointment Booking</a>
                                <a href="" className="text-sm text-gray-500 hover:text-primary">Hotel Booking</a>
                                <a href="" className="text-sm text-gray-500 hover:text-primary">Travel Health Insurance</a>
                                <a href="" className="text-sm text-gray-500 hover:text-primary">International Passport</a>
                            </div>
                        </div>
                    }
                    <a href="https://blog.wikitripstnt.com/" className="font-medium hover:text-primary max-sm:px-2 max-sm:py-4 max-sm:border-b-1 max-sm:border-gray-200">Blog</a>
                    <a href="https://www.wikitripstnt.com/contact.html" className="font-medium hover:text-primary max-sm:px-2 max-sm:py-4">Contact</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar