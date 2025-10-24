
import Image from "next/image"
const herosection=()=>{
    return(
        <div className="h-[85%] w-full ">

<div className=" max-w-5xl mx-auto relative overflow-hidden flex lg:flex-row flex-col justify-between h-full ">
    <div className="h-[40%] lg:h-full w-full px-4 lg:px-0 lg:w-1/2 flex flex-col justify-center">
<h2 className="text-5xl md:text-7xl uppercase font-bold">



Create your
<br />
<span className="text-[#EE3A3D]">
press Release</span>
</h2>
<div className="flex gap-4">

    <button className="bg-[#EE3A3D] hover:bg-zinc-100 cursor-pointer  text-white px-2 md:px-4 py-2 rounded-md font-medium transition-colors duration-200">
         Ai Generate
            </button>
            <button className="bg-[#EE3A3D] hover:bg-zinc-100 cursor-pointer  text-white px-2 md:px-4 py-2 rounded-md font-medium transition-colors duration-200">
      Write Custom
            </button>
</div>

<div className="flex gap-4 lg:flex-row flex-col md:items-center pt-4 font-semibold whitespace-nowrap">
    <p>Press Release Details</p>
<div className="bg-white flex gap-4  cursor-pointer  items-center px-4 text-white rounded-md font-medium transition-colors duration-200">
<div className="borderborder-gray-400 rounded-md flex flex-col md:items-center md:justify-center p-2 text-sm text-gray-500">
            <p>Drag & drop or browse here</p>
            <input type="file" className="hidden" />
          </div>          
        <div className="h-[15px] w-[15px] relative"><Image src={'/assets/dashboard/arrow.svg'} fill className="object-cover" /></div>  
          
          
            </div>

</div>

</div>
<div className=" h-[60%]  w-full  lg:w-1/2 lg:h-full flex items-center justify-center  ">
<div className="w-full h-full flex items-center items-end md:justify-center justify-end ">
<div className=" md:h-[450px] relative h-full w-full lg:w-full md:w-[65%] "><Image src={'/assets/dashboard/Layer_1.png'} fill className="object-cover" /></div>
</div></div>

</div>


        </div>
    )
}
export default herosection