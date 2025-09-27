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
        if (ribbonRef.current) {
          gsap.fromTo(
            ribbonRef.current,
          
        
                { clipPath: "inset(0 100% 0 0)" }, // fully hidden
                { clipPath: "inset(0 0% 0 0)", duration: 4, ease: "power2.inOut" } // fully revealed
          )
          gsap.to(ribbonRef.current, {
            y: "-=10",           // move up by 10px
            duration: 1,
            repeat: -1,           // infinite
            yoyo: true,           // alternate direction
            ease: "power1.inOut",
          });
        
         
          gsap.to(shape1.current, {
            y: "-=20",           // move up by 10px
            duration: 1.5,
            repeat: -1,           // infinite
            yoyo: true,           // alternate direction
            ease: "power1.inOut",
          });
          gsap.to(shape2.current, {
            y: "-=20",           // move up by 10px
            duration: 1.5,
            repeat: -1,           // infinite
            yoyo: true,           // alternate direction
            ease: "power1.inOut",
          });
          
        }
      }, []);
    const title=<><span ref={text2}>We’re delighted <br /></span> <span className="text-[80px] md:text-[130px]" ref={text3}> to have you</span></>
    return(<div className="bg-white h-[90vh] relative  w-full">
<div className="hidden md:block absolute  top-[40%] lg:top-0 left-0 right-0 bottom-0">
<Image src="/assets/home/Vector.webp" ref={ribbonRef}   alt="section1" width={1400} height={400} className=" object-contain"/>
</div>
<div className="absolute w-full flex items-center justify-center h-full ">
<div className="h-full flex absolute top-0  xl:-top-[25%] left-[5%] items-end justify-center w-[25%]">
<div className="  h-[200px] w-[250px]"><Image src={'/assets/home/r-2.webp'} ref={shape1} width={200} height={200}  className="object-cover" /></div>
</div>
    <div className="flex flex-col items-center justify-center">
    <h3 className="text-[#EE3A3D] tracking-tighter uppercase text-2xl md:text-4xl" ref={text1}>Welcome to It’s Raw!</h3>
        <h2 className="text-[50px] md:text-[100px] uppercase text-center leading-[0.8] tracking-tighter">{title}</h2>
<button className="px-2 md:px-4 py-2 border rounded border-[#EE3A3D] ">AI-Powered Press Release Service</button>
            </div>
</div>
<div className="h-full flex absolute top-[25%] right-0 items-start justify-center w-[25%]">
<div className="  h-[200px] w-[250px]"><Image src={'/assets/home/r-3.webp'} ref={shape2}  width={200} height={200}  className="object-cover" /></div>
</div>


    </div>)
}
export default home