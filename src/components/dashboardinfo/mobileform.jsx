const mobileform=()=>{
    return(
        <div className="w-full md:hidden  flex flex-col items-center justify-center py-12">
        <div className="max-w-5xl mx-auto">

             <h2 className="text-5xl uppercase mb-4  text-center">Step 1-Core Information</h2>
             <div className="flex gap-4 flex-col items-center justify-center">
<div className="flex flex-col gap-4">
     <div className="col-span-1 bg-[#FBEDDF] w-[300px]  h-[180px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Contact Email
</label>
          <input type="email" placeholder="Example@gmail.com" className="border border-gray-300 bg-white  text-gray-500 rounded-md p-2 text-sm" />
        </div>
             <div className="col-span-1 bg-[#FBDFDF] w-[300px] h-[180px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Phone number
</label>
<div className="flex gap-2 flex-col w-full">
<p className="text-gray-500 text-xs">Restaurant contact phone number</p>
          <input type="text" placeholder="phone no" className="border border-gray-300  text-gray-500 bg-white rounded-md p-2 text-sm" />
        </div></div>
</div>
<div className="flex flex-col gap-4">
     <div className="col-span-1 bg-[#FBEDDF] w-[300px]  h-[180px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Restaurant name*
</label>
          <input type="text" placeholder="Intersect by Lexus" className="border border-gray-300 text-gray-500 bg-white rounded-md p-2 text-sm" />
        </div>
             <div className="col-span-1 bg-[#FBDFDF] w-[300px] h-[180px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Menu URL</label>
          <input type="text" placeholder="https://discoverlexus.com/stories/intersect-by-lexus" className="border border-gray-300 text-gray-500 bg-white rounded-md p-2 text-sm" />
        </div>
</div>
</div>
        </div>
     
        </div>
    )
}
export default mobileform