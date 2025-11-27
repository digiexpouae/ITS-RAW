import Image from "next/image"
import gsap from 'gsap'
import { useEffect, useRef } from "react";
const home=()=>{
    const ribbonRef=useRef()
    const shape1=useRef()
    const shape2=useRef()
    const text1=useRef()
    const text2=useRef()  
    const text3=useRef()


    useEffect(() => {
      if (!ribbonRef.current) return;
    
      // Create a gsap.matchMedia instance
      const mm = gsap.matchMedia();
    
      mm.add(
        {
          // Define your breakpoints (CSS-like syntax)
          isDesktop: "(min-width: 1025px)",
          isTablet: "(min-width: 768px) and (max-width: 1024px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          let { isDesktop, isTablet, isMobile } = context.conditions;
    
          const tl = gsap.timeline();
    
          // Ribbon reveal
          tl.fromTo(
            ribbonRef.current,
            { clipPath: "inset(0 100% 0 0)" }, // hidden
            {
              clipPath: "inset(0 0% 0 0)",
              opacity: 1,
              duration: isMobile ? 2 : 4, // shorter animation on mobile
              ease: "power2.inOut",
            }
          );
    
          // Ribbon floating
          gsap.to(ribbonRef.current, {
            y: isMobile ? "-=5" : "-=10", // smaller float on mobile
            duration: 1,
            repeat: -1,
            opacity: 1,
            yoyo: true,
            ease: "power1.inOut",
          });
    
          // Shapes floating
          gsap.to(shape1.current, {
            y: isMobile ? "-=10" : "-=20",
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          });
          gsap.to(shape2.current, {
            y: isMobile ? "-=10" : "-=20",
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          });
    
          // Text reveals
          // tl.fromTo(
          //   text1.current,
          //   { yPercent: -100, opacity: 0 },
          //   { yPercent: 0, opacity: 1, duration: 2, ease: "bounce.out" }
          // )
          //   .fromTo(
          //     text2.current,
          //     { yPercent: -100, opacity: 0 },
          //     { yPercent: 0, opacity: 1, duration: 2, ease: "bounce.out" },
          //     "-=0.3"
          //   )
          //   .fromTo(
          //     text3.current,
          //     { y: "50%", opacity: 0 },
          //     { y: 0, opacity: 1, duration: 1, ease: "sine.out" },
          //     "-=0.4"
          //   );
        }
      );
    
      // Cleanup when component unmounts
      return () => mm.revert();
    }, []);
    
    const title=   <div className="text-animation">
    <span ref={text2} className="block  text-[50px] md:text-[100px] uppercase text-center leading-[0.8] tracking-tighter">
      We’re delighted
    </span>
    <span ref={text3} className="block text-[80px] md:text-[130px]">
      to have you
    </span>
  </div>
 
  
    return(<div className="bg-white h-[90vh] relative  w-full">
<div className="block absolute  lg:top-6 h-full flex lg:items-end lg:justify-end left-0 right-0 bottom-0">
<Image src="/assets/home/Vector.webp" ref={ribbonRef}   alt="section1" width={1900} height={800} className="object-contain"/>
</div>
<div className="absolute w-full flex items-center justify-center h-full ">
<div className="h-full flex absolute top-0  xl:-top-[25%] left-[5%] items-end justify-center w-[25%]">
<div className="  h-[200px] w-[250px]"><Image src={'/assets/home/r-2.webp'} ref={shape1} width={200} height={200}  className="object-cover" /></div>
</div>
    <div className="flex flex-col items-center justify-center">
    <h3 className="text-[#EE3A3D] tracking-tighter uppercase text-2xl md:text-4xl " ref={text1} >Welcome to It’s Raw!</h3>
        <h2 className="text-[50px] md:text-[100px] uppercase text-center leading-[0.8] tracking-tighter ">{title}</h2>
<button className="px-2 md:px-4 py-2 border rounded border-[#EE3A3D] ">AI-Powered Press Release Service</button>
            </div>
</div>
<div className="h-full flex absolute top-[25%] right-0 items-start justify-center w-[25%]">
<div className="  h-[200px] w-[250px]"><Image src={'/assets/home/r-3.webp'} ref={shape2}  width={200} height={200}  className="object-cover" /></div>
</div>


    </div>)
}
export default home