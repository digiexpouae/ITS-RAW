import React, { useEffect, useState } from 'react';
import { Calendar, Edit, Eye, Send, Trash2, X } from 'lucide-react';
import Image from 'next/image';
import ENDPOINTS from '@/utils/ENDPOINTS';
import { addorUpdateprs } from '@/function';
import { useAuth } from '@clerk/nextjs';
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
  }, [showEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



const openEditmodal= async (id)=>{ 

await fetchPr(id)

if(editData){
setFormData({


     title: editData.title,
    subtitle: editData.subtitle,
    date: editData.date,
    location: editData.location,
    content:editData.content ,image:editData.preview_image_uri

})
}


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
                <Edit className="w-5 h-5 text-gray-400" />
              </button>
              <button 
                onClick={() => setShowPreview(true)}
                className="flex items-center cursor-pointer gap-2 px-4 py-2  rounded-lg transition-colors"
              >
                <Eye className="w-5 h-5 text-gray-400 " />
                <span className="text-gray-400">Preview</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors">
                <Send className="w-5 h-5 text-gray-400" />
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
        <div className="fixed inset-0 backdrop-blur-xs  flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* Preview Content */}
            <div className="p-12 text-center">
              {/* Chef Icon */}
              <div className="flex justify-center mb-8">
                {/* <svg
                  className="w-48 h-48"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="100" cy="50" rx="40" ry="20" stroke="#EF4444" strokeWidth="4" fill="none" />
                  <path d="M60 50 L60 90 C60 95 65 100 70 100 L130 100 C135 100 140 95 140 90 L140 50" stroke="#EF4444" strokeWidth="4" fill="none" />
                  <circle cx="100" cy="120" r="35" stroke="#EF4444" strokeWidth="4" fill="none" />
                  <circle cx="90" cy="115" r="3" fill="black" />
                  <circle cx="110" cy="115" r="3" fill="black" />
                  <path d="M 90 128 Q 100 135 110 128" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <line x1="70" y1="45" x2="75" y2="40" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <line x1="72.5" y1="42.5" x2="72.5" y2="42.5" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <line x1="130" y1="45" x2="125" y2="40" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <line x1="127.5" y1="42.5" x2="127.5" y2="42.5" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 70 155 Q 60 140 50 130" stroke="#EF4444" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <path d="M 130 155 Q 140 140 150 130" stroke="#EF4444" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <rect x="42" y="122" width="4" height="20" fill="black" transform="rotate(-45 44 132)" />
                  <ellipse cx="48" cy="126" rx="6" ry="4" fill="#EF4444" transform="rotate(-45 48 126)" />
                </svg> */}
<Image src={pr.image_uri}   width={400} height={400} />


              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold text-black mb-6">
                {pr.title}
              </h1>

              {/* Subtitle */}
          

              {/* Content */}
              <div className="text-gray-800 space-y-4 leading-relaxed">
                {pr.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-sm">
                    {paragraph}
                  </p>))}
<p>{pr.content }</p>
                  </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEdit && (
        <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[95vh] overflow-y-auto relative shadow-md">
            {/* Header */}
            <div className="  px-6 py-4 flex items-center justify-between z-10">
              <p className="text-xl text-black font-semibold ">Edit your press release</p>
              <button
                onClick={() => setShowEdit(false)}
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Left Column - Chef Image */}
                <div className=" rounded-lg p-8 flex items-center justify-center">
               <Image src={formData.image}  width={600} height={400}/>
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
                  onClick={() => setShowEdit(false)}
                  className="px-6 py-2  cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => Update(editData.id)}
                  className="px-6 py-2 bg-red-600 hover:bg-red-500 cursor-pointer text-white rounded-lg transition-colors"
                > 
Update Draft                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}