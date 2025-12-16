import React, { useEffect, useState } from 'react';
import { Calendar, Edit, Eye, Send, Trash2, X } from 'lucide-react';
import Image from 'next/image';
import ENDPOINTS from '@/utils/ENDPOINTS';
import { addorUpdateprs,DeleteImage,uploadPrImage} from '@/function';
import { useAuth } from '@clerk/nextjs';
import Preview  from './preview';
export default function PressReleaseCard({pr,editData,fetchPr,fetchPrs,DeletePr}) {
  const [showPreview, setShowPreview] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    date: '',
    location: '',
    content:'' ,image:""
  });

  const {getToken}=useAuth()
   useEffect(() => {
    if (showEdit) {
      document.body.style.overflow = "hidden"; // Lock body scroll
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showEdit])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
const closeModal=()=>{


   setShowEdit(false)
   setFormData({  title: '',
    subtitle: '',
    date: '',
    location: '',
    content:'' ,image:""})


}


const openEditmodal= async (id)=>{ 

const response=await fetchPr(id)
setFormData({


     title: response.title,
    subtitle: response.subtitle,
    date: response.date,
    location: response.location,
    content:response.content ,image:response.preview_image_uri

})

setShowEdit(true)
}
const Delete= async(id)=>{
await DeletePr(id)
}
const Update= async (id)=>{

const payload={
  title:formData.title,
  content:formData.content,
}

const token=await getToken()
const Updateddata=await addorUpdateprs(ENDPOINTS.OTHER.PRS,payload,id,token)
console.log("Updated data"+ Updateddata)

await fetchPrs()

setShowEdit(false)

}

const DeletePrImage= async(id)=>{
const token =await getToken()
  await DeleteImage(ENDPOINTS.OTHER.PRS,id,token)


  await fetchPrs()
  
setShowEdit(false)


}
const UpdateImage = async (id)=>{
  const token =await getToken()
const response= await uploadPrImage(ENDPOINTS.OTHER.PRS,id,token)
}


  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto">
        {/* Press Release Card */}
        <div className="p-8 rounded-lg  shadow-lg transition-colors">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <p className="text-xl font-semibold pr-8">
              {pr.title}
            </p>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button 
                onClick={() => openEditmodal(pr.id)}
                className="p-2  cursor-pointer rounded-lg transition-colors"
              >
                <Edit className="w-5 h-5 text-[#f19c83]" />
              </button>
              <button 
                onClick={() => setShowPreview(true)}
                className="flex items-center cursor-pointer gap-2 px-4 py-2  rounded-lg transition-colors"
              >
                <Eye className="w-5 h-5 text-[#f19c83]" />
                {/* <span className="text-black">Preview</span> */}
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors">
                <Send className="w-5 h-5 text-[#f19c83]" />
                <span className="text-gray-400">Send (Insufficient Send Credits)</span>
              </button>
              <button 
              onClick={()=>Delete(pr.id)}
              className="p-2  rounded-lg transition-colors cursor-pointer"  >
                <Trash2 className="w-5 h-5 text-red-500" />
              </button>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-gray-400 mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{pr.updated}</span>
          </div>

          {/* Content with Icon */}
          <div className="flex gap-6">
            {/* Restaurant Icon */}
            <div className="flex-shrink-0">
             <Image src={pr.preview_image_uri} width={200} height={100} />
            </div>

            {/* Press Release Text */}
            <div className="flex-1">
              <p className=" leading-relaxed  line-clamp-3">
                <span className="">#</span> {pr.content} 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
       <Preview open={showPreview} setShowPreview={setShowPreview} pressReleaseId={pr.id} />
  
      )}

      {/* Edit Modal */}
      {showEdit && (
        <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[95vh] overflow-y-auto relative shadow-md">
            {/* Header */}
            <div className="  px-6 py-4 flex items-center justify-between z-10">
              <p className="text-xl text-black font-semibold ">Edit your press release</p>
              <button
                onClick={() =>closeModal()}
                className="p-2 cursor-pointer rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Left Column - Chef Image */}
                <div className="relative rounded-lg p-8 flex items-center justify-center">
                     {formData.image?(
                     <>
                      <button 
                onClick={() =>DeletePrImage(pr.id) }
                className="flex absolute top-0  right-20  cursor-pointer gap-2 px-4 py-2  rounded-lg transition-colors"
              >
                <X className="w-5 h-5  text-black" />
                {/* <span className="text-black">Preview</span> */}
              </button>
               <Image src={formData.image}  width={400} height={400}/>

                   </> ):(
    <label
      htmlFor="image-upload"
      className="flex flex-col items-center justify-center w-full h-60 cursor-pointer rounded-lg bg-gray-50 hover:bg-gray-100 transition"
    >
      {/* <Upload className="w-10 h-10 text-gray-400 mb-2" /> */}
      <p className="text-sm text-gray-600">
        <span className="font-semibold">Click to upload</span> or drag and drop
      </p>
      <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>

      <input
        id="image-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;

          const imageUrl = URL.createObjectURL(file);
          setFormData((prev) => ({
            ...prev,
            image: imageUrl,
            imageFile: file, // keep original file if needed
          }));
        }}
      />
    </label>)}
                </div>

                {/* Right Column - Form Fields */}
               
              </div>

              {/* Full Width Content */}
              <div className="mt-6 space-y-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Press Release Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full  border border-zinc-700 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-zinc-500"
                    />
                  </div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  # Content
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows={12}
                  className="w-full resize-none border border-zinc-700 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-zinc-500  text-sm"
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() =>closeModal()}
                  className="px-6 py-2  cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => Update(pr.id)}
                  className="px-6 py-2 bg-red-600 hover:bg-red-500 cursor-pointer text-white rounded-lg transition-colors"
                > 
Update Draft             

   </button>
              </div>
            </div>
          </div>
        </div>
      )}



    </div>
  )}