import { useState, useRef, useEffect } from 'react';
import Popup from '../popup';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useApi } from '@/function';
import ENDPOINTS from '@/utils/ENDPOINTS';
import { ulid } from 'ulid';
import toast, { Toaster } from 'react-hot-toast';
import { X } from 'lucide-react';

const CustomForm = ({ pr, onSave, fetchPrs }) => {
  const isNew = !pr;
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { addorUpdateprs, UpdateImage, DeleteImage } = useApi();

  useEffect(() => {
    console.log("pr", pr)
  }, [pr])

  // Initialize states from props or localStorage
  const [title, setTitle] = useState(() => {
    if (isNew) {
      if (typeof window !== 'undefined') {
        return localStorage.getItem('customPrTitle') || "";
      }
      return "";
    }
    return pr?.title || "";
  });

  const [content, setContent] = useState(() => {
    if (isNew) {
      if (typeof window !== 'undefined') {
        return localStorage.getItem('customPrContent') || "";
      }
      return "";
    }
    return pr?.content || "";
  });

  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(pr?.image_uri || null);
  const [imagePreview, setImagePreview] = useState(null);

  const inputRef = useRef(null);

  // Sync state with pr prop updates
  useEffect(() => {
    if (pr) {
      setTitle(pr.title || "");
      setContent(pr.content || "");
      setImageUrl(pr.image_uri || null);
    }
  }, [pr]);

  // Persist draft to localStorage (always, even in edit mode as requested)
  useEffect(() => {
    try {
      localStorage.setItem('customPrTitle', title);
    } catch { /* empty */ }
  }, [title]);

  useEffect(() => {
    try {
      localStorage.setItem('customPrContent', content);
    } catch { /* empty */ }
  }, [content]);

  const handleFileClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setImageUrl(null); // Clear existing URL if new file selected
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Please fill in both title and content.");
      return;
    }

    try {
      setLoading(true);
      const id = pr?.id || ulid();

      // 1. Create JSON payload for initial PR creation
      const payload2 = {
        id: id,
        title: title,
        content: content,
      };

      const res = await addorUpdateprs(ENDPOINTS.OTHER.PRS, payload2, id);
      console.log("res", res);

      // 2. Handle Image: If file exists update it, otherwise delete any existing/default image
      if (imageFile) {
        const imagePayload = new FormData();
        imagePayload.append('image', imageFile);
        const uploadRes = await UpdateImage(ENDPOINTS.OTHER.PRS, imagePayload, id);
        console.log("Image upload res", uploadRes);
      } else {
        const deleteRes = await DeleteImage(ENDPOINTS.OTHER.PRS, id);
        console.log("Image delete res", deleteRes);
      }

      // Success handling: Clear draft from localStorage
      try {
        localStorage.removeItem('customPrTitle');
        localStorage.removeItem('customPrContent');
      } catch { /* empty */ }

      // Simulate processing/delay as in AI form
      await new Promise((resolve) => setTimeout(resolve, 5000));

      toast.success("Press release submitted successfully!");

      if (onSave) {
        onSave();
      } else {
        router.push("/dashboard-dashboard");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error saving press release.");
    } finally {
      setLoading(false);
    }
  };

  const handleClearCancel = () => {
    if (isNew) {
      setTitle("");
      setContent("");
      setImageFile(null);
      setImagePreview(null);
      setImageUrl(null);
      try {
        localStorage.removeItem('customPrTitle');
        localStorage.removeItem('customPrContent');
      } catch { /* ignore */ }
    } else {
      if (onSave) onSave();
    }
  };
  const deleteImage = async () => {

    const deleteRes = await DeleteImage(ENDPOINTS.OTHER.PRS, pr.id);
    console.log("Image delete res", deleteRes);
    setImageFile(null);
    setImagePreview(null);
    setImageUrl(null);
    fetchPrs()
  }



  return (
    <div className="py-18 w-full">
      <Toaster position="bottom-right" />
      <div className="max-w-5xl mx-auto px-4 md:px-0 flex flex-col items-center gap-3 justify-between">
        {/* File Upload / Image Preview */}
        <div className={`md:py-8 p-4 w-full md:px-4 flex flex-col ${!isNew ? "bg-white" : "bg-[#FBDFDF]"} h-auto min-h-[120px] md:min-h-[180px] justify-between rounded-xl`}>
          <label className="font-medium">Upload Your Image</label>

          {(!isNew && imagePreview) && (
            <div className='relative w-full h-full'>
              <div className='absolute -top-10 right-4 translate-x-[50%] h-[25px] flex items-center justify-center w-[25px] bg-black  rounded z-10 cursor-pointer'><X className="text-white" onClick={() => deleteImage()} /></div>

              <div className="relative w-full h-48 mb-2 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src={imagePreview || imageUrl}
                  alt="Preview"
                  fill
                  className="object-contain bg-white"
                />
              </div>
            </div>
          )}

          <div
            className={`bg-white flex ${!isNew ? " border border-gray-300 " : ""}  w-full items-center px-2 cursor-pointer text-white rounded-md font-medium transition-colors duration-200`}
            onClick={handleFileClick}
          >
            <div className="rounded-md flex flex-col  w-full p-2 cursor-pointer text-sm text-gray-500">
              {imageFile ? imageFile.name : (imageUrl ? "Change existing image" : 'Click arrow to browse')}
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

        {/* Press Release Title */}
        <div className={`md:py-8 w-full p-4 md:px-4 flex flex-col justify-between h-[120px] md:h-[180px] gap-2 ${!isNew ? "bg-white" : "bg-[#FBEDDF]"} rounded-xl`}>
          <label className="font-medium">Press Release Title</label>
          <input
            type="text"
            placeholder="Enter a title for your press release"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 bg-white rounded-md p-2 h-14 text-sm focus:outline-none"
          />
        </div>

        {/* Press Release Content */}
        <div className={`md:py-8 w-full md:px-4 flex flex-col p-4 h-[400px] gap-2 ${!isNew ? "bg-white" : "bg-[#FBEDDF]"}  rounded-xl`}>
          <label className="font-medium">Write your press release here</label>
          <textarea
            placeholder="Write your press release here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border border-gray-300 bg-white rounded-md p-2 h-[80%] text-sm focus:outline-none resize-none"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-row items-center justify-between w-full gap-4">
          <button
            type="button"
            onClick={handleClearCancel}
            className="px-6 py-2 bg-white border border-gray-300 text-black w-32 rounded hover:bg-gray-100 cursor-pointer"
          >
            {isNew ? 'Clear' : 'Cancel'}
          </button>

          <button
            onClick={handleSubmit}
            disabled={!content.trim() || loading}
            className="px-6 py-2 bg-[#EE3A3D] flex-1 text-white rounded hover:bg-red-500 cursor-pointer disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? 'Saving...' : (pr ? 'Update Draft' : 'Save as Draft')}
          </button>
        </div>
      </div>

      <Popup isOpen={loading} />

    </div>
  );
};

export default CustomForm;
