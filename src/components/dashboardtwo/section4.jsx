const section4=()=>{
    return(
        <div className="py-10 max-w-5xl mx-auto px-4 flex flex-col items-center justify-center">
        <h2 className="text-7xl uppercase">Need Some <span className="text-[#EE3A3D]">Help?</span></h2>
        <div className="flex gap-4">

         <button className="mt-8 px-4 py-2 text-sm md:py-3 rounded-lg font-medium cursor-pointer bg-[#EE3A3D] text-white hover:bg-red-500 transition" style={{whiteSpace:'nowrap'}}>
     Check Out FAQ’s
    </button>
          <button className="mt-8 px-4  text-sm  py-2 md:py-3 rounded-lg font-medium cursor-pointer bg-[#EE3A3D] text-white hover:bg-red-500 transition" style={{whiteSpace:'nowrap'}}>
    Walkthrough Guide
    </button>
        </div>
        
        </div>
    )
}       

export default section4