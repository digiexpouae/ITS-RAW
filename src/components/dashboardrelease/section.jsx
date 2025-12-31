import React, { useEffect, useState } from 'react';
import { Calendar, Edit, Eye, Send, Trash2, X } from 'lucide-react';
import Image from 'next/image';
import ENDPOINTS from '@/utils/ENDPOINTS';
import CustomForm from '../dashboardcustom/customform';
import { useApi } from '@/function';
// import { addorUpdateprs,DeleteImage,uploadPrImage,UpdateImage} from '@/function';
// import { useAuth } from '@clerk/nextjs';
import Preview from './preview';
export default function PressReleaseCard({ pr, fetchPr, fetchPrs, DeletePr, sentCredits, sendPressRelease }) {
  const [showPreview, setShowPreview] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editData, setEditData] = useState()
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    date: '',
    location: '',
    content: '', image: ""
  });



  // const {getToken}=useAuth()
  const { addorUpdateprs, DeleteImage, uploadPrImage, UpdateImage } = useApi();
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
  const closeModal = () => {


    setShowEdit(false)
    setFormData({
      title: '',
      subtitle: '',
      date: '',
      location: '',
      content: '', image: ""
    })


  }

  useEffect(() => {
    console.log("editData", editData)


  }, [editData])
  const openEditmodal = async (id) => {

    const response = await fetchPr(id)
    setEditData(response)

    setFormData({


      title: response.title,
      subtitle: response.subtitle,
      date: response.date,
      location: response.location,
      content: response.content, image: response.preview_image_uri

    })

    setShowEdit(true)
  }
  const Delete = async (id) => {
    await DeletePr(id)
  }
  const Update = async (id) => {
    // const token = await getToken();

    // Prepare payload for text fields
    const payload = {
      title: formData.title,
      content: formData.content,
    };

    const UpdatedData = await addorUpdateprs(ENDPOINTS.OTHER.PRS, payload, id);
    console.log("Updated data:", UpdatedData);
    console.log("formdata", formData)
    if (formData.imageFile) {
      const response = await UpdatePrImage(id, formData.imageFile);
      console.log("image upadated", response)
    }

    await fetchPrs(); // Refresh the list
    setShowEdit(false);
  };

  const DeletePrImage = async (id) => {
    // const token =await getToken()
    await DeleteImage(ENDPOINTS.OTHER.PRS, id)


    await fetchPrs()

    setShowEdit(false)


  }
  const UpdatePrImage = async (id, file) => {
    if (!file) return; // no file, do nothing

    // const token = await getToken();
    const formDataObj = new FormData();
    formDataObj.append('image', file); // backend expects 'image'

    const response = await UpdateImage(ENDPOINTS.OTHER.PRS, formDataObj, id);
    console.log("image ", response)

  };


  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto">
        {/* Press Release Card */}
        <div className="p-8 rounded-lg  shadow-lg transition-colors">
          {/* Header */}
          <div className="flex md:flex-row  gap-4 flex-col items-start justify-between mb-6">
            <div className="   md:hidden flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => openEditmodal(pr.id)}
                className="p-2  cursor-pointer rounded-lg transition-colors"
              >
                <Edit className="w-5 h-5 text-[#f19c83]" />
              </button>
              <button
                onClick={() => setShowPreview(true)}
                className="flex items-center cursor-pointer gap-2 md:px-4  px-2 py-2  rounded-lg transition-colors"
              >
                <Eye className="w-5 h-5 text-[#f19c83]" />
                {/* <span className="text-black">Preview</span> */}
              </button>
              <button
                className={`flex items-center gap-2 md:px-4  px-2py-2 rounded-lg transition-colors
    ${!sentCredits ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
  `}
                onClick={() => sentCredits && sendPressRelease(pr.id)}
                disabled={!sentCredits}
              >
                <Send className="w-5 h-5 text-[#f19c83]" />
              </button>
              <button
                onClick={() => Delete(pr.id)}
                className="p-2  rounded-lg transition-colors cursor-pointer"  >
                <Trash2 className="w-5 h-5 text-red-500" />
              </button>
            </div>

            <p className="text-xl font-semibold pr-8">
              {pr.title}
            </p>

            {/* Action Buttons */}
            <div className="  hidden md:flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => openEditmodal(pr.id)}
                className="p-2  cursor-pointer rounded-lg transition-colors"
              >
                <Edit className="w-5 h-5 text-[#f19c83]" />
              </button>
              <button
                onClick={() => setShowPreview(true)}
                className="flex items-center cursor-pointer gap-2 md:px-4  px-2 py-2  rounded-lg transition-colors"
              >
                <Eye className="w-5 h-5 text-[#f19c83]" />
                {/* <span className="text-black">Preview</span> */}
              </button>
              <button
                className={`flex items-center gap-2 md:px-4  px-2py-2 rounded-lg transition-colors
    ${!sentCredits ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
  `}
                onClick={() => sentCredits && sendPressRelease(pr.id)}
                disabled={!sentCredits}
              >
                <Send className="w-5 h-5 text-[#f19c83]" />
              </button>
              <button
                onClick={() => Delete(pr.id)}
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
          <div className="flex md:flex-row flex-col gap-6">
            {/* Restaurant Icon */}
            <div className="flex-shrink-0 w-[200px] h-[100px] flex items-center justify-center rounded">
              {pr.preview_image_uri ? (
                <Image src={pr.preview_image_uri} alt="Restaurant image" width={200} height={100} />
              ) : (
                <div className='text-gray-400'>     Image not available </div>
              )
              }
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
                onClick={() => closeModal()}
                className="p-2 cursor-pointer rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <CustomForm
                pr={editData}
                fetchPrs={fetchPrs}
                onSave={async () => {
                  await fetchPrs();
                  setShowEdit(false);
                }}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  )
}