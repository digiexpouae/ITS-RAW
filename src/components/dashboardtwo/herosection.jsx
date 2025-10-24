import Image from "next/image"
import Sectiontwo from './sectiontwo' 
const herosection=()=>{
    return(
        <div className="w-full h-full flex flex-col items-center justify-center">

            <div className="h-[50px] w-[200px]  flex items-center justify-center"><Image src={'/assets/dashboardtwo/pan.svg'} width={120} height={100} className="object-cover" /></div>
            <h2 className="text-4xl uppercase text-[#EE3A3D]">  It’s Raw – Home</h2>
            <h3 className="text-5xl md:text-7xl uppercase text-center">Send your restaurant stories <br /> to the media who matter</h3>
               <Sectiontwo />
                 </div>

    )
}               
export default herosection