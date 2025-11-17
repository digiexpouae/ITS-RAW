import Image from 'next/image'
import Formtwo from './form-two'
import { useState } from 'react'
import StepTwo from './step-2'
import Mobileform from './mobileform'
const dashboardinfoform=()=>{
      const [formData, setFormData] = useState({
    email: '',
    phone: '',
    restaurantName: '',
    menuUrl: '',
 website: '',
  tiktok: '',
  whatsapp: '',
  youtube: '',
  instagram: '',
  linkedin: '',
  facebook: '',
  website2: '',
  bookingLink: '',
  location: '',
  emirate: '',
  dubaiArea: '',
cuisines:'',
coverage:'',
bestDishes :'',
description:'',
traits:'',


  })

  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};
  // Send data to API
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/your-endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      const data = await response.json()
      console.log('Success:', data)
      // Optionally go to next page
      setCurrentPage(true)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }


const [currentPage,setCurrentPage]=useState(false)
     return(
          <div className='py-12'>
       {!currentPage ?(
          
          <div><div className="w-full hidden md:flex flex-col items-center justify-center ">
        <div className="max-w-5xl mx-auto">

             <h2 className="text-5xl uppercase mb-4  text-center">Step 1-Core Information</h2>
             <div className="flex gap-4 flex-col">
<div className="flex gap-4">
     <div className="col-span-1 bg-[#FBEDDF] w-[500px]  h-[180px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Contact Email
</label>
          <input type="email" name='email' value={formData.email} placeholder="Example@gmail.com" className="border border-gray-300 bg-white  text-gray-500 rounded-md p-2 text-sm" />
        </div>
             <div className="col-span-1 bg-[#FBDFDF] w-[500px] h-[180px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Phone number
</label>
<div className="flex gap-2 flex-col w-full">
<p className="text-gray-500 text-xs">Restaurant contact phone number</p>
          <input type="text" name='phone' value={formData.phone} placeholder="phone no" onChange={handleChange} className="border border-gray-300  text-gray-500 bg-white rounded-md p-2 text-sm" />
        </div></div>
</div>
<div className="flex gap-4">
     <div className="col-span-1 bg-[#FBEDDF] w-[500px]  h-[180px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Restaurant name*
</label>
          <input name='restaurantName' type="text" value={formData.restaurantName} onChange={handleChange} placeholder="Intersect by Lexus" className="border border-gray-300 text-gray-500 bg-white rounded-md p-2 text-sm" />
        </div>
             <div className="col-span-1 bg-[#FBDFDF] w-[500px] h-[180px] p-4 rounded-2xl flex flex-col justify-between">
          <label className="font-medium text-sm mb-1">Menu URL</label>
          <input
          name='menuUrl' type="text" value={formData.menuUrl} onChange={handleChange} placeholder="https://discoverlexus.com/stories/intersect-by-lexus" className="border border-gray-300 text-gray-500 bg-white rounded-md p-2 text-sm" />
        </div>
</div>
</div>
        </div>
        <Formtwo formData={formData} handleChange={handleChange}/>
     
        </div>
        <div className='block md:hidden '>
          <Mobileform />
        <Formtwo formData={formData} handleChange={handleChange}/>
                  </div>

     </div>
     
     ):(<StepTwo formData={formData} handleChange={handleChange}/>)}
               <div className='flex gap-4 w-full items-center justify-center'>
<button className='bg-[#EE3A3D] hover:bg-red-300 cursor-pointer flex gap-2 items-center text-white px-4 py-2 rounded-md'

onClick={()=>setCurrentPage(false)}>
<Image src={'/assets/Vector.svg'} width={5} height={8} />
    Page1
</button>
<button className='bg-[#EE3A3D] hover:bg-red-300 cursor-pointer flex gap-2 items-center text-white px-4 py-2 rounded-md'

onClick={()=>setCurrentPage(true)}>
    Page2
    <Image src={'/assets/Vector-2.svg'} width={5} height={8} />

</button>


        </div>
        </div>
    )
}
export default dashboardinfoform