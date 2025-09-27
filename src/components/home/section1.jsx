import Image from "next/image"
const home=()=>{
    const title=<>We’re delighted <br /> <span className="text-[80px] md:text-[130px]"> to have you</span></>
    return(<div className="bg-white h-[90vh] relative  w-full">
<div className="hidden md:block absolute  top-[40%] lg:top-0 left-0 right-0 bottom-0">
<Image src="/assets/home/Vector.webp"    alt="section1" width={1400} height={400} className=" object-contain"/>
</div>
<div className="absolute w-full flex items-center justify-center h-full ">
<div className="h-full flex absolute top-0 xl:-top-[25%] left-[5%] items-end justify-center w-[25%]">
<div className="  h-[200px] w-[250px]"><Image src={'/assets/home/r-2.webp'} width={200} height={200}  className="object-cover" /></div>
</div>
    <div className="flex flex-col items-center justify-center">
    <h3 className="text-[#EE3A3D] tracking-tighter uppercase text-2xl md:text-4xl">Welcome to It’s Raw!</h3>
        <h2 className="text-[50px] md:text-[100px] uppercase text-center leading-[0.8] tracking-tighter" >{title}</h2>
<button className="px-2 md:px-4 py-2 border rounded border-[#EE3A3D] ">AI-Powered Press Release Service</button>
            </div>
</div>
<div className="h-full flex absolute top-[25%] right-0 items-start justify-center w-[25%]">
<div className="  h-[200px] w-[250px]"><Image src={'/assets/home/r-3.webp'} width={200} height={200}  className="object-cover" /></div>
</div>


    </div>)
}
export default home