'use client'

import { useState } from "react"
import Image from "next/image"

const LinkBox = ({href, img, head, desc}) => {
    return (
        <a href={href} className="p-4 flex items-center gap-3">
            <img src={img} alt="" width={32} height={32} />
            <p>
                <span className="">{head}</span><br />
                <span className="text-sm text-gray-500">{desc}</span>
            </p>
        </a>
    )
}

const Navbar = () => {
  const [isVisible, setVisible] = useState(false)

  return (
    <nav className="fixed z-999 top-0 w-full bg-white">
        <p className="text-[15px] text-center px-2 py-2.5 bg-black text-white">Need Travel Assistance? <a href="" className="text-[#acff1c] hover:underline">Book a session today! -&gt;</a></p>
        <div className="border-b-1 border-gray-200">
            <div className="flex items-center justify-between flex-wrap px-4 py-3 max-w-[1152px] mx-auto">
                <Image src="/logo.png" alt="wikitrips logo" width={144} height={42.02} />
                <button className="sm:hidden cursor-pointer">
                    <Image src={isVisible ? "/close.png" : "/hamburger.png"} alt="" width={24} height={24} onClick={() => setVisible(!isVisible)} />
                </button>
                <div className={"sm:flex sm:gap-4 " + `${isVisible ? "grid w-full p-6" : "hidden"}`}>
                    <a href="" className="font-medium hover:text-primary max-sm-px-2 max-sm-py-4 max-sm-border-b-1 max-sm-border-gray-200">Home</a>
                    <a href="" className="font-medium hover:text-primary max-sm-px-2 max-sm-py-4 max-sm-border-b-1 max-sm-border-gray-200 flex gap-1.5 items-center">
                        <span>Services</span>
                        <Image src="/caret.png" width={12} height={12} alt="" />
                    </a>
                    <a href="" className="font-medium hover:text-primary max-sm-px-2 max-sm-py-4 max-sm-border-b-1 max-sm-border-gray-200">Blog</a>
                    <a href="" className="font-medium hover:text-primary max-sm-px-2 max-sm-py-4">Contact</a>
                    {/* <div className="absolute top-[120px] flex bg-white items-start p-8 rounded-xl min-w-[640px]">
                        <div className="px-8">
                            <LinkBox head="Visa" desc="Hassle-free visa services" href="" img="/passport.png" />
                            <LinkBox head="Tours" desc="Discover exciting destinations" href="" img="/tour.png" />
                            <LinkBox head="" desc="" href="" img="" />
                            <LinkBox head="" desc="" href="" img=""/>
                            <a href="" className="p-4 flex items-center gap-3">
                                <img src="/plane.png" alt="" width={32} height={32} />
                                <p>
                                    <span className="">Flight</span><br />
                                    <span className="text-sm text-gray-500">Find and book flights effortlessly</span>
                                </p>
                            </a>
                            <a href="" className="p-4 flex items-center gap-3">
                                <img src="/study.png" alt="" width={32} height={32} />
                                <p>
                                    <span className="">Study</span><br />
                                    <span className="text-sm text-gray-500">Guidance for studying overseas</span>
                                </p>
                            </a>
                        </div>
                        <div className="grid px-8 py-4 gap-4">
                            <span className="text-sm">Other Services</span>
                            <a href="" className="text-sm text-gray-500">Appointment Booking</a>
                            <a href="" className="text-sm text-gray-500">eVisa Assistance</a>
                            <a href="" className="text-sm text-gray-500">Hotel Booking</a>
                            <a href="" className="text-sm text-gray-500">Travel Health Insurance</a>
                            <a href="" className="text-sm text-gray-500">International Passport</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar