import Image from "next/image"
import gsap from "gsap"
import { useEffect,useRef } from "react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Slider from "./slider"
import Mobileslider from './mobileslider'
const section2=()=>{

    const text1 = useRef(null)
    const text2 = useRef(null)
    const text3 = useRef(null)
    const btn = useRef(null)
    const sectionRef=useRef(null)
    const imageref=useRef(null)
    const section2=useRef(null)
    const text=useRef(null)

    return (
      <>
        {/* desktop */}
        <div
          className="h-screen w-full rounded-[30px] hidden md:flex items-center justify-center relative overflow-hidden"
          style={{
            backgroundImage: `url('/assets/home/r-2-1.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          ref={sectionRef}
        >
          <div className="w-[90%] md:w-[80%] pl-14 h-[80%] md:h-full flex gap-20 items-center justify-center rounded-4xl">
            <div className="h-full w-[90%] md:w-[80%] flex flex-col gap-10 justify-center leading-[1]">
              <div>
                <h2
                  className="text-[50px] md:text-[80px] uppercase"
                  ref={text1}
                >
                  Get Your
                </h2>
                <h2
                  className="text-[50px] md:text-[70px] uppercase text-[#EE3A3D]"
                  ref={text2}
                >
                  Restaurant Noticed
                </h2>
                <p
                  className="text-[18px] md:text-[20px] leading-[1.5]"
                  ref={text3}
                >
                  The <span className="font-bold">fastest, easiest and cheapest</span> way for you
                  to create compelling news stories for your restaurant. And, for less than the
                  price of a brunch, we’ll send it to hundreds of media, bloggers and influencers.
                </p>
              </div>
              <button
                ref={btn}
                className="cursor-pointer w-[35%] transition-all bg-[#EE3A3D] text-white py-3 rounded-lg
                border-[#EE3A3D]
                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                Place Your Order
              </button>
            </div>
          </div>
  
          {/* right image */}
          <div className="hidden lg:block md:w-[45%] h-full relative">
            <div className="w-full h-full" ref={imageref}>
              <Image
                src="/assets/home/building.svg"
                alt="section2"
                className="h-full object-cover object-top"
                width={500}
                height={1000}
              />
            </div>
          </div>
  
          {/* logos slider */}
          <div className="w-[300%] my-4 marquee h-[15%] flex items-center overflow-hidden absolute bottom-0 right-0 left-0 z-20">
{/* <div class="marquee">
  <div class="marquee__inner flex items-center justify-center">
    <div class="marquee__group flex items-center justify-center">
    <span className="h-18 w-42 flex items-center justify-center"><Image src={'/assets/home/L-2.svg'} width={200} height={80} className="  object-cover"/></span>

      <span className="h-18 w-42 flex items-center justify-center"><Image src={'/assets/home/L-6.svg'} width={200} height={80} className=" object-cover"/></span>
      <span className="h-18 w-30 flex items-center justify-center"><Image src={'/assets/home/L-5.svg'} width={120} height={84} className=" object-cover"/></span>
      <span className="h-18 w-42 flex items-center justify-center"><Image src={'/assets/home/L-4.svg'} width={200} height={80} className=" object-cover"/></span>
      <span className="h-18 w-42 flex items-center justify-center"><Image src={'/assets/home/L-3.svg'} width={200} height={80} className=" object-cover"/></span>
      <span className="h-18 w-30 flex items-center justify-center"><Image src={'/assets/home/L-5.svg'} width={120} height={84} className=" object-cover"/></span>
    </div>

    <div class="marquee__group flex items-center justify-center">
      <span className="h-18 w-42 flex items-center justify-center"><Image src={'/assets/home/L-2.svg'} width={200} height={80} className="  object-cover"/></span>
      <span className="h-18 w-42 flex items-center justify-center"><Image src={'/assets/home/L-1.svg'} width={120} height={60} className="  object-cover"/></span>
      <span className="h-18 w-42 flex items-center justify-center"><Image src={'/assets/home/L-6.svg'} width={200} height={80} className="  object-cover"/></span>
      <span className="h-18 w-30 flex items-center justify-center"><Image src={'/assets/home/L-5.svg'} width={120} height={84} className="  object-cover"/></span>
    </div>
  </div>
</div> */}
<Slider />

</div>

        </div>
  
        {/* mobile */}
        <div
          className="h-screen w-full md:hidden flex items-center justify-center relative overflow-hidden"
          style={{
            backgroundImage: `url('/assets/home/r-2-1.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-[90%] md:w-[80%] flex gap-20 items-center justify-center rounded-4xl">
            <div className="h-full w-[90%] md:w-[80%] flex flex-col gap-6 text-center justify-center leading-[1]">
              <div>
                <h2 className="text-6xl uppercase">Get Your</h2>
                <h2 className="text-6xl uppercase text-[#EE3A3D]">Restaurant Noticed</h2>
                <p className="text-xl leading-[1.5]">
                  The <span className="font-bold">fastest, easiest and cheapest</span> way for you to create
                  compelling news stories for your restaurant. And, for less than the price of a
                  brunch, we’ll send it to hundreds of media, bloggers and influencers.
                </p>
              </div>
              <button className="cursor-pointer transition-all bg-[#EE3A3D] text-white px-6 py-2 rounded-lg
                border-[#EE3A3D]
                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                Place Your Order
              </button>
            </div>
          </div>
          <div className="w-[300%] my-10 marquee  flex items-center overflow-hidden absolute bottom-0 right-0 left-0 z-20">
{/* <div class="marquee">
  <div class="marquee__inner flex items-center justify-center">
    <div class="marquee__group flex items-center
    ">
      <span className="h-18 w-42 flex items-center justify-center"><Image src={'/assets/home/L-6.svg'} width={200} height={80} className=" object-cover"/></span>
      <span className="h-18 w-30 flex items-center justify-center"><Image src={'/assets/home/L-5.svg'} width={80} height={60} className=" object-cover"/></span>
      <span className="h-18 w-42 flex items-center justify-center"><Image src={'/assets/home/L-4.svg'} width={200} height={80} className=" object-cover"/></span>
      <span className="h-18 w-42 flex items-center justify-center"><Image src={'/assets/home/L-3.svg'} width={200} height={80} className=" object-cover"/></span>
    </div>

    <div class="marquee__group flex items-center">
      <span className="h-18 w-42 flex items-center justify-center"><Image src={'/assets/home/L-2.svg'} width={200} height={80} className="  object-cover"/></span>
      <span className="h-18 w-42 flex items-center justify-center"><Image src={'/assets/home/L-1.svg'} width={120} height={60} className="  object-cover"/></span>
      <span className="h-18 w-42 flex items-center justify-center"><Image src={'/assets/home/L-6.svg'} width={200} height={80} className="  object-cover"/></span>
      <span className="h-18 w-30 flex items-center justify-center"><Image src={'/assets/home/L-5.svg'} width={200} height={80} className="  object-cover"/></span>
    </div>
  </div>
</div> */}
<Mobileslider />
</div>

        </div>
      </>
    )
  }
export default section2