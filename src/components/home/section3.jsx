import Image from 'next/image'
const section3=()=>{
    const title=<>Why Choose <span className='text-[#EE3A3D]'> ItsRaw.AI? </span></>
    return(
        <>
        {/* {desktop} */}
        <div className="h-screen w-full hidden py-10 gap-2 md:flex flex-col items-center justify-center ">
            <div className="w-[80%] h-[40%]  flex flex-col gap-12 items-center justify-center">
                <div className='h-[50%] w-full flex items-center justify-center'><Image src={'/assets/home/r-3-1.svg'} width={220 } height={220}
               className='object-cover'  /></div>
               <div className='h-[40%] w-full flex flex-col items-center justify-end'  >
                       <h2 className="text-[50px] md:text-[80px] uppercase text-center leading-[0.8] tracking-tight" >{title}</h2>
                       <p className='text-[20px] w-[80%] text-center'>In the time it takes to fry an egg, ItsRaw will automatically create content about your restaurant and send it to the most influential people.</p>
                       </div>

            </div>
            <div className='w-[80%] h-[60%] mt-8 relative flex flex-col md:flex-row  items-center  justify-center'>
        <div className='w-[32%] h-[60%] flex flex-col  items-center justify-center absolute left-0 bottom-0 border-2 border-dashed border-[#EE3A3D] rounded-2xl'>
        <h2 className="text-[40px]  uppercase text-center leading-[0.8] " >Write It!</h2>
<p className='text-center text-[20px] leading-[1] px-4'>
Drop in the raw info about your restaurant and offers, and ItsRaw will generate content in seconds
</p>
<div className='absolute h-[60px] w-full -top-10 left-0 flex items-center justify-center right-0'>
<div className='rounded-full h-full flex items-center justify-center w-[60px] bg-[#EE3A3D] relative'>
    <div className=' h-[70%] w-[70%] flex items-center justify-center'> <Image src={'/assets/home/r-3-2.svg'} width={50} height={50} className='object-cover'/></div> </div></div>
  

        </div>
        <div className='w-[32%] h-[60%] flex flex-col items-center  absolute  bottom-0 right-0 justify-center  border-2 border-dashed border-[#EE3A3D] rounded-2xl'>
        <h2 className="text-[40px]  uppercase text-center leading-[0.8] ">Send It!</h2>
<p className='text-center text-[20px] leading-[1] px-4'>
ItsRaw distributes to the Middle East’s biggest list 
of restaurant media, influencers & food bloggers
</p>
<div className='absolute h-[60px] w-full -top-10 left-0 flex items-center justify-center right-0'>
<div className='rounded-full h-full flex items-center justify-center w-[60px] bg-[#EE3A3D] relative'>
    <div className=' h-[70%] w-[70%] flex items-center justify-center'> <Image src={'/assets/home/r-3-3.svg'} width={50} height={50} className='object-cover '/></div> </div></div>
        </div>
        <div className='w-[32%] h-[60%] flex flex-col items-center  justify-center relative  border-2 border-dashed border-[#EE3A3D] rounded-2xl'>
        <h2 className="text-[40px]  uppercase text-center leading-[0.8] ">Track It!</h2>
<p className='text-center text-[20px] leading-[1] px-4'>
And, we’ll pop it all into a neat little list with all the media links and articles
</p>
<div className='absolute h-[60px] w-full -top-10 left-0 flex items-center justify-center right-0'>
<div className='rounded-full h-full flex items-center justify-center w-[60px] bg-[#EE3A3D] relative'>
    <div className=' h-[70%] w-[70%] flex items-center justify-center'> <Image src={'/assets/home/r-3-5.svg'} width={50} height={50} className='object-cover'/></div> </div></div>
        </div>


            </div>
        </div>
        {/* mobile */}
        <div className=" p-6 w-full md:hidden flex flex-col items-center  ">
            <div className="w-[90%]  mb-4 flex flex-col gap-4 items-center justify-center">
                <div className='h-[20%] w-full flex items-end justify-center'><Image src={'/assets/home/r-3-1.svg'} width={150 } height={90}
               className='object-contain'  /></div>
               <div className='h-[60%] w-full flex flex-col items-center justify-start'  >
                       <h2 className="text-[40px] md:text-[90px] uppercase text-center leading-[0.8] tracking-tight" >{title}</h2>
                       <p className='text-[18px] w-[100%] text-center mb-6'>In the time it takes to fry an egg, ItsRaw will automatically create content about your restaurant and send it to the most influential people.</p>
                       </div>

            </div>
            <div className='w-[80%] gap-[60px] relative flex flex-col   md:flex-row  items-center  justify-center'>
        <div className='w-full p-[20px] h-[80%] flex flex-col  items-center justify-center border-2 border-dashed border-[#EE3A3D] rounded-2xl'>
        <h2 className="text-[40px]  uppercase text-center leading-[0.8] " >Write It!</h2>
<p className='text-center text-[20px] leading-[1] px-4'>
Drop in the raw info about your restaurant and offers, and ItsRaw will generate content in seconds
</p>
<div className='absolute h-[60px] w-full -top-10 left-0 flex items-center justify-center right-0'>
<div className='rounded-full h-full flex items-center justify-center w-[60px] bg-[#EE3A3D] relative'>
    <div className=' h-[70%] w-[70%] flex items-center justify-center'> <Image src={'/assets/home/r-3-2.svg'} width={50} height={50} className='object-cover'/></div> </div></div>
  

        </div>
        <div className='w-full h-[80%] p-[20px] flex flex-col items-center relative  justify-center  border-2 border-dashed border-[#EE3A3D] rounded-2xl'>
        <h2 className="text-[40px]    uppercase text-center leading-[0.8] ">Send It!</h2>
<p className='text-center text-[20px] leading-[1] px-4'>
ItsRaw distributes to the Middle East’s biggest list 
of restaurant media, influencers & food bloggers
</p>
<div className='absolute h-[60px] w-full -top-10 left-0 flex items-center justify-center right-0'>
<div className='rounded-full h-full flex items-center justify-center w-[60px] bg-[#EE3A3D] relative'>
    <div className=' h-[70%] w-[70%] flex items-center justify-center'> <Image src={'/assets/home/r-3-3.svg'} width={50} height={50} className='object-cover '/></div> </div></div>
        </div>
        <div className='w-full h-[80%] p-[20px]  flex flex-col items-center relative  justify-center border-2 border-dashed border-[#EE3A3D] rounded-2xl'>
        <h2 className="text-[40px]  uppercase text-center leading-[0.8] ">Track It!</h2>
<p className='text-center text-[20px] leading-[1] px-4'>
And, we’ll pop it all into a neat little list with all the media links and articles
</p>
<div className='absolute h-[60px] w-full -top-10 left-0 flex items-center justify-center right-0'>
<div className='rounded-full h-full flex items-center justify-center w-[60px] bg-[#EE3A3D] relative'>
    <div className=' h-[70%] w-[70%] flex items-center justify-center'> <Image src={'/assets/home/r-3-5.svg'} width={50} height={50} className='object-cover'/></div> </div></div>
        </div>


            </div>
        </div>
        </>
    ) 
}
export default section3