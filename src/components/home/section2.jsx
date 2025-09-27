import Image from "next/image"
const section2=()=>{
    return(<>
        {/* // desktop */}
        <div className="h-screen w-full rounded-[30px] hidden md:flex items-center justify-center relative overflow-hidden" style={{backgroundImage: `url('/assets/home/r-2-1.webp')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      
      <div className="w-[90%] md:w-[80%] h-[80%] md:h-full flex gap-20 items-center justify-center  rounded-4xl">
        <div className="h-full w-[90%] md:w-[80%] flex flex-col  justify-center  leading-[1]">
        <h2 className=" text-[50px] md:text-[80px]  uppercase  ">Get Your </h2>
        <h2 className=" text-[50px] md:text-[70px]  uppercase text-[#EE3A3D] ">Restaurant Noticed</h2>
        <p className="text-[18px] md:text-[20px] leading-[1.5] ">The <span className="font-bold">fastest, easiest and cheapest</span> way for you to create compelling news stories for your restaurant. And, for less than the price of a brunch, we’ll send it to hundreds of media, bloggers and influencers.</p>
        <button className="bg-[#EE3A3D]  text-sm py-2 px-2 md:w-[30%] text-white mt-10 md:px-2 md:py-2 rounded-md font-medium transition-colors duration-200">Place Your Order</button>

        </div>

       
        </div>
        <div className="hidden lg:block md:w-[45%] h-full relative">
        <div className=" w-full h-[100%] ">
            <Image src="/assets/home/building.svg" alt="section2" className=" h-full object-cover object-top"  width={500} height={1000} />
        </div>
        </div>
        <div className="w-full h-[20%] flex items-center justify-center absolute bottom-0 right-0 left-0 z-20"><Image  src={'/assets/home/r-2-3.webp'} width={1200} height={200} className="h-[20%] md:h-auto w-full object-cover" /></div>
        </div> 

        {/* mobile */}
         <div className="h-[100vh] w-full  md:hidden flex items-center justify-center relative overflow-hidden"style={{backgroundImage: `url('/assets/home/r-2-1.webp')`, backgroundSize: 'cover', backgroundPosition: 'center'}} >
      
         <div className="w-[90%] md:w-[80%]  flex gap-20 items-center justify-center  rounded-4xl" >
           <div className="h-full w-[90%] md:w-[80%] flex flex-col text-center justify-center  leading-[1]">
           <h2 className=" text-6xl md:text-[80px]  uppercase  ">Get Your </h2>
           <h2 className=" text-6xl md:text-[70px]  uppercase text-[#EE3A3D] ">Restaurant Noticed</h2>
           <p className="text-xl md:text-7xl leading-[1.5] ">The <span className="font-bold">fastest, easiest and cheapest</span> way for you to create compelling news stories for your restaurant. And, for less than the price of a brunch, we’ll send it to hundreds of media, bloggers and influencers.</p>
           <button className="bg-[#EE3A3D]  text-sm py-2 px-2 md:w-[30%] text-white mt-4 md:px-2 md:py-2 rounded-md font-medium transition-colors duration-200">Place Your Order</button>
   
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