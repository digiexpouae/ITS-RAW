
import { useRef, useState } from 'react';
import LoaderPopup from '../popup'
  import Image from 'next/image';
import { useRouter } from "next/navigation";
import {generate} from '@/function'
import ENDPOINTS from '@/utils/ENDPOINTS'
import { useAuth } from '@clerk/nextjs';
export default function CampaignForm({fetchData}) {
      const [loading, setLoading] = useState(false);
      const inputRef=useRef()
   
const {getToken}=useAuth()

 const [formData, setFormData] = useState({
  file: null,                       // uploaded image
  pressReleaseStyle: "",            // select: Formal / Fun
  primarySpokesperson: "",          // select: Owner / GM / etc.
  campaignFocus: "",                // select: primary focus
  spokespersonName: "",             // textarea
  designationTitle: "",
  priceRange:"",             // input
  goLiveDate: "",                   // input type date
  duration: "",                      // select
  keyHighlights: "",                // textarea
  preferredQuote: "",               // textarea
});
  const router=useRouter()

  // ⭐ Handle text/select/date changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  // ⭐ Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      file,
    }));
 
  };





        const handleFileClick = () => {
    if (inputRef.current) inputRef.current.click();
  };
  //   const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);


  //   const form = new FormData();
  //   Object.entries(formData).forEach(([key, value]) => {
  //     if (value) form.append(key, value);
  //   });

  //   // Simulating API delay
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  //      router.push("/dashboard-dashboard");
  // };

const handleSubmit = async (e) => {


  e.preventDefault();
  const token=await getToken()
  const payload={
 
          restaurantInfo: fetchData,
          pressReleaseDetails: {
            primaryFocus: formData.campaignFocus,
            goLiveDate: formData.goLiveDate,
            duration: formData.duration,
            keyHighlights: formData.keyHighlights,
            priceRange: formData.priceRange,
            bookingRequired: formData.bookingRequired,
            primarySpokesperson: formData.primarySpokesperson,
            spokespersonName: formData.spokespersonName,
            spokespersonTitle: formData.designationTitle,
            spokespersonQuote: formData.preferredQuote,
            style: formData.pressReleaseStyle
        }
}

try{
  const reponse=await generate(ENDPOINTS.OTHER.GENERATE,payload,token)

  console.log("response",reponse)

  
  setLoading(true);
  setTimeout(() => {
    setLoading(false)
  }, 5000)
// setFormData({
//   file: null,                       // uploaded image
//   pressReleaseStyle: "",            // select: Formal / Fun
//   primarySpokesperson: "",          // select: Owner / GM / etc.
//   campaignFocus: "",                // select: primary focus
//   spokespersonName: "",             // textarea
//   designationTitle: "",
//   priceRange:"",             // input
//   goLiveDate: "",                   // input type date
//   duration: "",                      // select
//   keyHighlights: "",                // textarea
//   preferredQuote: "",               // textarea
// })



}



 catch (error) {
    console.log("error",error)
}

}



























  return (<>

    <div className="min-h-screen  hidden lg:flex flex-col  items-center justify-center p-8 my-10">
             {/* <h2 className="text-5xl uppercase mb-4  text-left">Fill In Press Release Details</h2> */}

      <form className="flex flex-col gap-4 justify-center mx-auto  max-w-5xl w-full" type="submit">
  <div className="py-8 w-full px-4 flex flex-col gap-2 justify-between h-[180px] bg-[#FBDFDF] rounded-xl">
            <label className="font-medium">Upload Your Image</label>
            <div
              className="bg-white flex justify-between w-full items-center px-2 cursor-pointer text-white rounded-md font-medium transition-colors duration-200"
              onClick={handleFileClick}
            >
              <div className="rounded-md flex flex-col w-full p-2 cursor-pointer text-sm text-gray-500">
                {formData.file ? formData.file.name : 'Drag & drop or browse here'}
                <input
                  type="file"
                  ref={inputRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <div className="h-[15px] w-[15px] relative">
                <Image
                  src={'/assets/dashboard/arrow.svg'}
                  alt="arrow"
                  fill


                  className="object-cover"
                />
              </div>
            </div>
          </div>
        {/* Headline / Subject */}
        <div className="flex items-center justify-center gap-4">
<div className="flex flex-col gap-4">
       {/* File Upload */}
        

        <div className=" flex gap-4 ">
          <div className="flex flex-col gap-4">
          <div className="flex gap-4 justify-between">
        <div className="flex flex-col gap-4">
        <div className="col-span-1 bg-[#FBDFDF] h-[250px]  w-[250px] p-3 py-8 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Press Release Style</label>
  <select   name="pressReleaseStyle"
  value={formData.pressReleaseStyle}
                          onChange={handleChange}  className="border bg-white text-start  border-gray-400 rounded-md flex flex-col items-center justify-center p-2 text-sm text-gray-500">
            <option value="">Select</option>
          <option value="">Formal</option>
          <option value="">Fun</option>

          </select>        </div>
   <div className="col-span-1 bg-[#FBEDDF] p-3 py-8 h-[180px]  w-[250px] rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Primary Spokesperson
(If Applicable)</label>
 <select    name="primarySpokesperson"
                value={formData.primarySpokesperson}          onChange={handleChange} className="border bg-white text-start  border-gray-400 rounded-md flex flex-col items-center justify-center p-2 text-sm text-gray-500">
<option value="">Owner</option>
<option value="">General Manager</option>
<option value="">Head Chef</option>
<option value="">Marketing Manager</option>
<option value="">F&amp;B Director</option>
<option value="">Other</option>

          </select> 
        </div>
        </div>
         <div className="flex flex-col gap-4">
      
   <div className="col-span-1 bg-[#FBEDDF] p-3 py-8 h-[180px] w-[230px]  rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Select the primary focus
of the campaign or release*</label>

           
          <select     value={formData.campaignFocus}  name="campaignFocus"
                          onChange={handleChange} className="border bg-white text-start  border-gray-400 rounded-md flex flex-col items-center justify-center p-2 text-sm text-gray-500">

            <option value="">New Opening</option>
<option value="">New Menu / Seasonal Menu</option>
<option value="">New Chef Announcement</option>
<option value="">Collaboration / Guest Chef</option>
<option value="">New Offer / Deal (e.g., Happy Hour, Business Lunch)</option>
<option value="">Seasonal Campaign (e.g., Ramadan, NYE, Christmas)</option>
<option value="">Special Event (e.g., Live DJ, Tasting Menu, Workshop)</option>
<option value="">Venue Redesign / Refurbishment</option>
<option value="">Awards / Recognitions</option>
<option value="">Brand Partnership</option>
<option value="">CSR Initiative / Sustainability Update</option>
<option value="">Other</option>
          </select>
        </div>
          <div className="col-span-1 bg-[#FBDFDF] h-[250px] p-3 py-8  rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Name of spokesperson</label>
          <textarea type="text"   name="spokespersonName" value={formData.spokespersonName}
                          onChange={handleChange} placeholder="Enter the name of spokesperson" className="border border-gray-300 resize-none bg-white rounded-md p-2   text-sm" />
        </div>
        </div></div>
        <div className="flex gap-4">
     
        <div className="col-span-1 bg-[#FBEDDF] h-[180px] w-[500px] p-3 py-8 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Designation Title of spokesperson </label>
          <input type="text"  name="designationTitle"
                        onChange={handleChange} placeholder="Enter the title and designation of spokesperson" className="border border-gray-300 bg-white rounded-md p-2 text-sm" />
        </div>
  



 
       
        </div>
        </div>
         
</div>


</div>
<div className="flex flex-col gap-4">
<div className="flex gap-4">
  <div className="flex flex-col gap-4">
    <div className="w-[500px] flex gap-4"> 
   <div className="col-span-1 bg-[#FBEDDF]  p-3 py-8 w-[250px] h-[180px] rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Go-Live Date / Event / 
Offer Date*</label>

           
       <input type="date" className="border border-gray-300 bg-white rounded-md p-2 text-sm" />
        </div>
           <div className="col-span-1 bg-[#FBDFDF]  p-3 py-8 w-[250px] h-[180px] rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Duration
(If Applicable)</label>

           
  <select       name="duration"
                          onChange={handleChange} className="border bg-white text-start  border-gray-400 rounded-md flex flex-col items-center justify-center p-2 text-sm text-gray-500">
<option value="">One-day only</option>
<option value="">Week-long</option>
<option value="">Month-long</option>
<option value="">Ongoing</option>
<option value="">Seasonal (e.g., Summer, Ramadan)</option>          </select>        </div>
        </div>
          <div className="col-span-1 bg-[#FBEDDF] w-[500px]  h-[250px]  p-3 py-8 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Key highlights / Selling points (Max 3 bullet points)*</label>
          <textarea type="text" placeholder="Enter upto 3 key highlights or selling points" className="border border-gray-300 resize-none bg-white rounded-md p-2 h-[120px] text-sm" />
        </div>
             

        </div>
       
</div>
   <div className="flex flex-col gap-4">
      

        <div className="col-span-1 bg-[#FBDFDF] h-[180px] w-[500px]  p-3 py-8 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Preferred quote for Press (if any)  </label>
          <textarea type="text" placeholder="Enter the title and designation of spokesperson" className="border border-gray-300 bg-white rounded-md p-2 resize-none h-[70px] text-sm" />
        </div>
          {/* <div className="col-span-1 bg-[#FBEDDF]  h-[335px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Headline / Subject</label>
            <input type="date" className="border border-gray-400 bg-white rounded-md flex flex-col items-center justify-center px-6 py-2 text-sm text-gray-500"/>
        </div> */}
        
        </div>
        {/* Focus of the campaign */}
  </div> 
  </div>

        {/* Image upload */}
               <div className="flex justify-center w-full">
        <button className="px-6 py-2 bg-[#EE3A3D] w-full text-white rounded hover:bg-red-500 cursor-pointer" onClick={handleSubmit} >
 Generate
        </button>
      </div>
      </form>


    </div>
                 <LoaderPopup isOpen={loading} />         
  </>)
}
