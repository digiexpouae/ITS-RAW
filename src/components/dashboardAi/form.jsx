export default function CampaignForm() {
  return (<>

    <div className="min-h-screen  hidden lg:flex flex-col  items-center justify-center p-8 my-10">
             {/* <h2 className="text-5xl uppercase mb-4  text-left">Fill In Press Release Details</h2> */}

      <form className="flex gap-4 justify-center mx-auto  max-w-4xl w-full">

        {/* Headline / Subject */}
<div className="flex flex-col gap-4">

        <div className=" flex gap-4 ">
          <div className="flex flex-col gap-4">
          <div className="flex gap-4 justify-between">
        <div className="flex flex-col gap-4">
        <div className="col-span-1 bg-[#FBDFDF] h-[300px]  w-[250px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Press Release Style</label>
  <select className="border bg-white text-start  border-gray-400 rounded-md flex flex-col items-center justify-center p-2 text-sm text-gray-500">
            <option value="">Select</option>
          </select>        </div>
   <div className="col-span-1 bg-[#FBEDDF] p-4 h-[180px]  w-[250px] rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Primary Spokesperson
(If Applicable)</label>
 <select className="border bg-white text-start  border-gray-400 rounded-md flex flex-col items-center justify-center p-2 text-sm text-gray-500">
            <option value="">Select</option>
          </select> 
        </div>
        </div>
         <div className="flex flex-col gap-4">
      
   <div className="col-span-1 bg-[#FBEDDF] p-6 h-[180px] w-[230px]  rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Select the primary focus
of the campaign or release*</label>

           
          <select className="border bg-white text-start  border-gray-400 rounded-md flex flex-col items-center justify-center p-2 text-sm text-gray-500">
            <option value="">Select primary focus</option>
          </select>
        </div>
          <div className="col-span-1 bg-[#FBDFDF] h-[300px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Name of spokesperson</label>
          <input type="text" placeholder="Enter the name of spokesperson" className="border border-gray-300 bg-white rounded-md p-2 h-14 text-sm" />
        </div>
        </div></div>
        <div className="flex gap-4">
     
        <div className="col-span-1 bg-[#FBEDDF] h-[180px] w-[500px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Designation Title of spokesperson </label>
          <input type="text" placeholder="Enter the title and designation of spokesperson" className="border border-gray-300 bg-white rounded-md p-2 text-sm" />
        </div>
  



 
       
        </div>
        </div>
         
</div>


</div>
<div className="flex flex-col gap-4">
<div className="flex gap-4">
  <div className="flex flex-col gap-4">
    <div className="w-[500px] flex gap-4"> 
   <div className="col-span-1 bg-[#FBEDDF] p-6 w-[250px] h-[180px] rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Go-Live Date / Event / 
Offer Date*</label>

           
       <input type="date" className="border border-gray-300 bg-white rounded-md p-2 text-sm" />
        </div>
           <div className="col-span-1 bg-[#FBDFDF] p-6 w-[250px] h-[180px] rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Duration
(If Applicable)</label>

           
       <input type="date" className="border border-gray-300 bg-white rounded-md p-2 text-sm" />
        </div>
        </div>
          <div className="col-span-1 bg-[#FBEDDF] w-[500px]  h-[300px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Key highlights / Selling points (Max 3 bullet points)*</label>
          <input type="file" placeholder="Write" className="border border-gray-300 bg-white rounded-md p-2 text-sm" />
        </div>
             

        </div>
       
</div>
   <div className="flex flex-col gap-4">
      

        <div className="col-span-1 bg-[#FBDFDF] h-[180px] w-[500px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Preferred quote for Press (if any)  </label>
          <input type="text" placeholder="Enter the title and designation of spokesperson" className="border border-gray-300 bg-white rounded-md p-2 text-sm" />
        </div>
          {/* <div className="col-span-1 bg-[#FBEDDF]  h-[335px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Headline / Subject</label>
            <input type="date" className="border border-gray-400 bg-white rounded-md flex flex-col items-center justify-center px-6 py-2 text-sm text-gray-500"/>
        </div> */}
        
        </div>
        {/* Focus of the campaign */}
  </div> 

        {/* Image upload */}
     

      </form>
    </div>
  </>);
}
