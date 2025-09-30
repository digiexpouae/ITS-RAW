import Image from "next/image"
import gsap from "gsap"
import { useEffect,useRef } from "react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
const section2=()=>{

    const text1 = useRef(null)
    const text2 = useRef(null)
    const text3 = useRef(null)
    const btn = useRef(null)
    const sectionRef=useRef(null)
    const imageref=useRef(null)
    const section2=useRef(null)
    const text=useRef(null)
    
    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger)
    //     if (!sectionRef.current) return
    
    //     // Initial states
    //     gsap.set(text1.current, { yPercent: 100, opacity: 0 })

    //     gsap.set([text3.current, btn.current], { yPercent: -20, opacity: 0 })
    //     gsap.set(imageref.current, { yPercent: 10, opacity: 0 })
    //     gsap.set(sectionRef.current, { scale: 0.4 })
    //     gsap.set(text2.current, { yPercent: 100, opacity: 0 })
    
    //     const tl = gsap.timeline({
    //       scrollTrigger: {
    //         trigger: sectionRef.current,
    //         start:"center center",
    //         end: "+=4000",
    //         pin: true,
    //         scrub: 2,
    //       },
    //     })
    
    //     tl.to(sectionRef.current, { scale: 1, duration: 2 })
    //       .to(text1.current, {
    //         opacity: 1,
    //         yPercent: 0,
    //         duration: 2,
    //         ease: "elastic.out(1.5,0.7)",
    //       })
    //       .to(text2.current, {
    //         opacity: 1,
    //         yPercent: 0,
    //         duration: 2,
    //         ease: "elastic.out(1.5,0.7)",
    //       })
    //       .to(imageref.current, {
    //         opacity: 1,
    //         yPercent: 0,
    //         duration: 2,
    //         ease: "elastic.out(1,0.2)",
    //       })
    //       .to(text3.current, {
    //         opacity: 1,
    //         yPercent: 0,
    //         duration: 2,
    //         ease: "elastic.out(1.4,0.75)",
    //       })
    //       .to(
    //         btn.current,
    //         {
    //           opacity: 1,
    //           yPercent: 0,
    //           duration: 1,
    //           ease: "elastic.out(1,0.75)",
    //         },
    //         "<" // run at same time as previous
    //       )
    //   }, [])
    
    return(<>
        {/* // desktop */}
        <div  className="   h-screen w-full rounded-[30px] hidden md:flex items-center justify-center relative overflow-hidden"  style={{backgroundImage: `url('/assets/home/r-2-1.webp')`, backgroundSize: 'cover', backgroundPosition: 'center'}} ref={sectionRef}>
      
      <div className="w-[90%]  h-[80%] md:h-full flex gap-20 items-center justify-center  rounded-4xl" ref={text}>
        <div className="h-full  flex flex-col gap-10 justify-center  leading-[1]" >
      
        <div> <h2 className=" text-[50px] md:text-[80px]  uppercase" ref={text1}>Get Your </h2>
        <h2 className=" text-[50px] md:text-[70px]  uppercase text-[#EE3A3D] " ref={text2}>Restaurant Noticed</h2>
        <p className="text-[18px] md:text-[20px] leading-[1.5] " ref={text3} >The <span className="font-bold">fastest, easiest and cheapest</span> way for you to create compelling news stories for your restaurant. And, for less than the price of a brunch, we’ll send it to hundreds of media, bloggers and influencers.</p>
        </div> 
      <button className="cursor-pointer w-[35%] transition-all bg-[#EE3A3D] text-white py-4 rounded-lg
border-[#EE3A3D]
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">Place Your Order</button>

        </div>

       
        </div>
        <div className="hidden lg:block  h-full relative">
        <div className=" w-full h-full overflow-hidden" ref={imageref} >
            <Image src="/assets/home/building.svg" alt="section2" className="h-full w-[auto] object-cover object-center "  width={600} height={1000} />
        </div>
        </div>
        <div className="w-full h-[20%] flex items-center justify-center absolute bottom-0 right-0 left-0 z-20"><Image  src={'/assets/home/r-2-3.webp'} width={1200} height={200} className="h-[20%] md:h-auto w-full object-cover" /></div>
        </div> 

        {/* mobile */}
         <div className="h-[100vh] w-full  md:hidden flex items-center justify-center relative overflow-hidden"style={{backgroundImage: `url('/assets/home/r-2-1.webp')`, backgroundSize: 'cover', backgroundPosition: 'center'}} >
      
         <div className="w-[90%] md:w-[80%]  flex gap-20 items-center justify-center  rounded-4xl" >
           <div className="h-full w-[90%] md:w-[80%] flex flex-col gap-6 text-center justify-center  leading-[1]">
          <div> <h2 className=" text-6xl md:text-[80px]  uppercase  ">Get Your </h2>
           <h2 className=" text-6xl md:text-[70px]  uppercase text-[#EE3A3D] ">Restaurant Noticed</h2>
           <p className="text-xl md:text-7xl leading-[1.5] ">The <span className="font-bold">fastest, easiest and cheapest</span> way for you to create compelling news stories for your restaurant. And, for less than the price of a brunch, we’ll send it to hundreds of media, bloggers and influencers.</p>
           </div>
           <button className="cursor-pointer transition-all bg-[#EE3A3D] text-white px-6 py-2 rounded-lg
border-[#EE3A3D]
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">Place Your Order</button>

           </div>
   
          
           </div>
           <div className="hidden lg:block md:w-[45%] h-full relative">
           <div className=" w-full h-[100%] ">
               <Image src="/assets/home/building.svg" alt="section2" className=" h-full object-cover object-top"  width={500} height={1000} />
           </div>
           </div>
           <div className="w-full h-[20%] flex items-center justify-center absolute bottom-0 right-0 left-0 z-20"><Image  src={'/assets/home/r-2-3.webp'} width={1200} height={200} className="h-[20%] md:h-auto w-full object-cover" /></div>
           </div> 
          </>
    )
}
export default section2