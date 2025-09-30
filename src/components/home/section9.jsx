// components/Pricing.tsx
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";


function Pricing() {
  const headphones=useRef()
  // useEffect(()=>{
  //   gsap.to(headphones.current, {
  //     yPercent: "-10",
  //     duration: 4,
  //     repeat: -1,
  //     yoyo: true,
  //     ease:'bounce.inOut'
      
  //   });

  // },[])

  return (
    <section className="w-full lg:px-20 py-12 h-[70vh] flex items-center justify-center overflow-hidden">
    <div className="w-[90%]  grid grid-cols-1 md:grid-cols-2 gap-4  relative items-center ">
      
      {/* Right Column - Content */}
      <div className="text-center md:text-left flex flex-col  items-center md:items-start">
    <h2 className="text-7xl leading-[1] md:text-nowrap">
      <span className=" text-black">NOT SURE</span><br/>
      <span className="text-red-500"> WHAT TO ORDER?</span>
    </h2>
    <p className="mt-4 text-gray-600 text-lg">
      Get in touch with our maître d’, 
      who will be at your service.
    </p>
    <button className="mt-8 px-4 py-3 rounded-lg font-medium bg-black text-white hover:bg-black transition">
      Contact Us
    </button>
  </div>
  {/* Left Column - Image */}
  <div className="hidden md:flex justify-center  absolute -bottom-32 right-[0]" ref={headphones}>
        <Image
          src="/assets/home/Group-1410103443.png"
          alt="Don't be an idiot"
          width={350}
          className="object-cover"
          height={350}
        />
      </div>
    </div>
  </section>
  
  );
}
export default Pricing