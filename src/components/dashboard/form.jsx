export default function CampaignForm() {
  return (
    <div className="min-h-screen  hidden lg:flex items-center justify-center p-8 my-20">
      <form className="flex gap-4 justify-center mx-auto  max-w-4xl w-full">

        {/* Headline / Subject */}
<div className="flex flex-col gap-4">

        <div className=" flex gap-4 ">
          <div className="flex flex-col gap-4">
          <div className="flex gap-4 justify-between">
        <div className="flex flex-col gap-4">
        <div className="col-span-1 bg-[#FBDFDF] h-[300px]  w-[250px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Headline / Subject</label>
          <input type="text" placeholder="Write" className="border border-gray-300 bg-white rounded-md p-2 h-24 text-sm" />
        </div>
   <div className="col-span-1 bg-[#FBEDDF] p-4 h-[180px]  w-[250px] rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Speaker name</label>
                   <input type="text" placeholder="Write" className="border border-gray-300 bg-white rounded-md p-2 text-sm" />

        </div>
        </div>
         <div className="flex flex-col gap-4">
      
   <div className="col-span-1 bg-[#FBEDDF] p-6 h-[180px] w-[230px]  rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Key highlights for <br />
your story</label>

           
          <select className="border bg-white text-start  border-gray-400 rounded-md flex flex-col items-center justify-center p-2 text-sm text-gray-500">
            <option value="">Formal</option>
          </select>
        </div>
          <div className="col-span-1 bg-[#FBDFDF] h-[300px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Quote for media</label>
          <input type="text" placeholder="Write" className="border border-gray-300 bg-white rounded-md p-2 text-sm" />
        </div>
        </div></div>
        <div className="flex gap-4">
     
        <div className="col-span-1 bg-[#FBDFDF] h-[180px] w-[500px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Speaker Title </label>
          <input type="text" placeholder="Write" className="border border-gray-300 bg-white rounded-md p-2 text-sm" />
        </div>
  



 
       
        </div>
        </div>
           <div className="flex flex-col gap-4">
   <div className="col-span-1 bg-[#FBEDDF] p-6 w-[250px] h-[180px] rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Focus of the <br />
Campaign</label>

           
          <select className="border bg-white text-start  border-gray-400 rounded-md flex flex-col items-center justify-center p-2 text-sm text-gray-500">
            <option value="">Select</option>
          </select>
        </div>
          <div className="col-span-1 bg-[#FBEDDF] w-[250px]  h-[300px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Insert images 
(optional)</label>
          <input type="file" placeholder="Write" className="border border-gray-300 bg-white rounded-md p-2 text-sm" />
        </div>
             
   <div className="col-span-1 bg-[#FBEDDF] p-4 w-[250px]  h-[180px] rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Speaker Role</label>
                    <input type="text" placeholder="Write" className="border border-gray-300 bg-white rounded-md p-2 text-sm" />

        </div>
        </div>
</div>


</div>
          <div className="flex flex-col gap-4">
      
   <div className="col-span-1 bg-[#FBDFDF] p-4 h-[335px] rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Offer Date <br />
If Applicable</label>
          
            <input type="date" className="border border-gray-400 bg-white rounded-md flex flex-col items-center justify-center px-6 py-2 text-sm text-gray-500"/>
          
        </div>
          <div className="col-span-1 bg-[#FBEDDF]  h-[335px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Headline / Subject</label>
            <input type="date" className="border border-gray-400 bg-white rounded-md flex flex-col items-center justify-center px-6 py-2 text-sm text-gray-500"/>
        </div>
        </div>
   

        {/* Focus of the campaign */}
   

        {/* Image upload */}
     

      </form>
    </div>
  );
}
