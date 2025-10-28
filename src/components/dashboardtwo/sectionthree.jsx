import Image from "next/image"
const section=()=>{
  const tips = [
  {
    id: 1,
    title: "Make It memorable",
    description: "Catchy dishes and creative events make a buzz"
  },
  {
    id: 2,
    title: "Time it right",
    description: "Send during working hours + drive interest arround seasonal moments"
  },
  {
    id: 3,
    title: "Create reasons to care",
    description: "Provide offers, discounts and incentives"
  },
  
];

  
    return(
        <div className="h-screen md:h-[90vh]   w-full  " >
<div className="bg-cover max-w-5xl  mx-auto my-40  relative overflow-hidden h-[90%] md:h-[80%] rounded-2xl " style={{backgroundImage:'url(/assets/dashboard/raw.png)'}}>
   <div className="absolute left-10 h-full flex flex-col  justify-center ">  

<h2 className="text-5xl uppercase">Top Tips For <span className="text-[#EE3A3D]">Great Results</span></h2>

  <div className="grid grid-cols-1 py-6   gap-6">
          {tips.map((tip, index) => (
            <div 
              key={tip.id} 
              className="   "
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#EE3A3D] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-3xl uppercase font-medium mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
</div>
<div className="absolute right-0 bottom-0 w-[35%] h-full hidden lg:flex items-end justify-end"> 
  <div className="relative w-full" style={{ aspectRatio: '3 / 4' }}>

<Image src={"/assets/home/Frame 163.svg"} fill className="object-cover h-full w-full" />


</div>



</div>
   </div>
   
        </div>
    )
}
export default section