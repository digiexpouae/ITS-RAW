
const customform=()=>{
    return(
        <div className="py-18  w-full  ">

<div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-6 justify-between">
    <div className="py-8 w-full px-4 flex flex-col gap-12 bg-[#FBEDDF] rounded-xl">
<label htmlFor="" className="font-medium">Press Release Title</label>
<input type="text" placeholder="Enter a title for your press release" className="border border-gray-300 bg-white rounded-md p-2 h-14 text-sm" />


    </div>
            <div className="py-8 w-full px-4 flex flex-col gap-12 bg-[#FBDFDF] rounded-xl">
<label htmlFor="" className="font-medium">Write your press release here</label>
<textarea type="text" placeholder="Write" className="border border-gray-300 bg-white rounded-md p-2 h-64 text-sm resize-none" />

    </div>
    
    </div>            
        </div>
    )
}   
export default customform