import { useState } from 'react'
import Business from './business.jsx'
import StepTwo from './step-2.jsx'
import Image from 'next/image'
const formtwo=({formData, handleChange})=>{
  return(
        <div className="max-w-5xl mx-auto py-6">
       <p className="text-xl  mb-2 font-medium text-center md:text-left">Digital Accounts Links</p> 
<div className="flex md:flex-row flex-col gap-4 mb-4 items-center justify-center ">

<div className="flex flex-col gap-4">   
  <div className="col-span-1 bg-[#FBEDDF] h-[300px] w-[310px] md:w-[250px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Website</label>
            <input type="text" 
                 name="website"
              value={formData.website || ''}
              onChange={handleChange}
            placeholder="https" className="border border-gray-300  text-gray-500 bg-white rounded-md p-2 text-sm" />
      </div>
          
                <div className="col-span-1 bg-[#FBDFDF] h-[200px] w-[310px]  md:w-[250px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">TikTok</label>
              <input
                   name="tiktok"
              value={formData.tiktok || ''}
              onChange={handleChange}
               type="text" placeholder="https" className="border border-gray-300  text-gray-500 bg-white rounded-md p-2 text-sm" />
      </div>
          </div>
<div className="flex flex-col gap-4">  
   <div className="col-span-1 bg-[#FBDFDF] h-[200px] w-[310px] md:w-[250px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">WhatsApp Business</label>
            <input   name="whatsapp"
              value={formData.whatsapp || ''}
              onChange={handleChange} type="text" placeholder="https" className="border border-gray-300  text-gray-500 bg-white rounded-md p-2 text-sm" />
     </div>
                <div className="col-span-1 bg-[#FBEDDF] h-[300px] w-[310px]  md:w-[250px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Youtube</label>
            <input type="text"
              name="youtube"
              value={formData.youtube || ''}
              onChange={handleChange}
            placeholder="https" className="border border-gray-300  text-gray-500 bg-white rounded-md p-2 text-sm" />
     </div>
          </div>
<div className="flex flex-col gap-4">   
      <div className="col-span-1 bg-[#FBEDDF] h-[300px] w-[310px] md:w-[250px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Instagram</label>
            <input type="text"
               name="instagram"
              value={formData.instagram || ''}
              onChange={handleChange}
            placeholder="https" className="border border-gray-300  text-gray-500 bg-white rounded-md p-2 text-sm" />
    </div>
                <div className="col-span-1 bg-[#FBDFDF] h-[200px] w-[310px]  md:w-[250px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Linkedin</label>
            <input type="text"
               name="linkedin"
              value={formData.linkedin || ''}
              onChange={handleChange}
            placeholder="https" className="border border-gray-300  text-gray-500 bg-white rounded-md p-2 text-sm" />
     </div>
          </div>
          <div className="flex flex-col gap-4">   
      <div className="col-span-1 bg-[#FBDFDF] h-[200px] w-[310px]  md:w-[250px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Facebook</label>
            <input type="text"
              name="facebook"
              value={formData.facebook || ''}
              onChange={handleChange}
            placeholder="https" className="border border-gray-300  text-gray-500 bg-white rounded-md p-2 text-sm" />
    </div>
                <div className="col-span-1 bg-[#FBEDDF] h-[300px] w-[310px]  md:w-[250px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Website</label>
            <input type="text"
              name="website2"
              value={formData.website2 || ''}
              onChange={handleChange}
            placeholder="https" className="border border-gray-300  text-gray-500 bg-white rounded-md p-2 text-sm" />
     </div>
          </div>
          

</div>


<div className="flex gap-4 flex-col items-center justify-center md:flex-row mb-4">
     <div className="col-span-1 bg-[#FBEDDF]  w-[310px] md:w-1/2  h-[180px] p-4 rounded-2xl flex flex-col justify-between">
     <div>
          <label className="font-medium text-sm mb-4">Booking Reservation Link
</label>
<p className='text-[10px] text-[#9B9B9B]'>Enter link to booking page on your website, Seven Rooms or any other booking platform your
restaurant uses. Leave blank if N/A.</p></div>
          <input type="text"
            name="bookingLink"
            value={formData.bookingLink || ''}
            onChange={handleChange}
           placeholder="https" className="border border-gray-300 bg-white  text-gray-500 rounded-md p-2 text-sm" />
        </div>
             <div className="col-span-1 bg-[#FBDFDF]  w-[310px] md:w-1/2 h-[180px] p-4 rounded-2xl flex flex-col justify-between">
         <div>
          <label className="font-medium text-sm mb-1">Location
</label>
<p className="text-gray-500 text-[10px]">Enter Google Map/Business link (if you have more than one branch, input your main/flagship location)</p>

</div>
<div className="flex gap-2 flex-col w-full">
          <input type="text"
           name="location"
            value={formData.location || ''}
            onChange={handleChange}
          placeholder="https://discoverlexus.com/stories/intersect-by-lexus" className="border border-gray-300  text-gray-500 bg-white rounded-md p-2 text-sm" />
        </div></div>
</div>
<div className=" flex gap-4 flex-col md:flex-row items-center justify-center  mb-4 "> 
<div className="flex flex-col h-[400px] gap-4  w-[310px] md:w-1/2">  
   <div className="col-span-1 bg-[#FBDFDF]  h-1/2 w-full p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Select Emirate*</label>
  <select
      name="emirate"
      value={formData.emirate || ''}
      onChange={handleChange}
      className="border border-gray-300 text-gray-500 bg-white rounded-md p-2 text-sm"
    >
      <option value="">Select Emirate</option>
      <option value="Dubai">Dubai</option>
      <option value="Abu Dhabi">Abu Dhabi</option>
      <option value="Sharjah">Sharjah</option>
      <option value="Ajman">Ajman</option>
      <option value="Fujairah">Fujairah</option>
      <option value="Ras Al Khaimah">Ras Al Khaimah</option>
      <option value="Umm Al Quwain">Umm Al Quwain</option>
    </select>     </div>
                <div className="col-span-1 bg-[#FBEDDF] h-1/2    w-full p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Dubai Area</label>
   <select
      name="dubaiArea"
      value={formData.dubaiArea || ''}
      onChange={handleChange}
      className="border border-gray-300 text-gray-500 bg-white rounded-md p-2 text-sm"
    >
      <option value="">Select Area</option>
      <option value="Downtown Dubai">Downtown Dubai</option>
      <option value="Jumeirah">Jumeirah</option>
      <option value="Business Bay">Business Bay</option>
      <option value="Marina">Marina</option>
      <option value="Palm Jumeirah">Palm Jumeirah</option>
      <option value="Deira">Deira</option>
      <option value="Al Barsha">Al Barsha</option>
    </select>     </div>
          </div>
            <div className="col-span-1 bg-[#FBEDDF]  md:h-[400px]   w-[310px] md:w-1/2 p-6 rounded-2xl flex flex-col justify-between">
     <Business />

     </div>
     
             
          </div>
      
        
        </div>
    )
}
export default formtwo