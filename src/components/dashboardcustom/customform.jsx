import { useState, useRef } from 'react';
import Popup from '../popup';
import Image from 'next/image';
import { useRouter } from 'next/router';
const CustomForm = () => {
  const [loading, setLoading] = useState(false);

  // Single object to hold all form values
const router= useRouter()
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    file: null,
  });
  const inputRef = useRef(null);

  const handleFileClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
 
    const form = new FormData();
    form.append('title', formData.title);
    form.append('content', formData.content);
    if (formData.file) form.append('file', formData.file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: form,
      });

      if (!res.ok) throw new Error('Failed to send form data');

      // Optional: handle backend response
      const data = await res.json();
      console.log('Response:', data);

      // ✅ Reset all form fields at once
  
    } catch (err) {
      console.error(err);
    } finally {
          setFormData({
    title: '',
    content: '',
    file: null,
  });
    setTimeout(() => {
     setLoading(false);
   }, 5000);
       router.push("/dashboard-dashboard");


    }
  };

  return (
    <div className="py-18 w-full">
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto px-4 md:px-0 flex flex-col items-center gap-3 justify-between"
      >
        {/* File Upload */}
        <div className="md:py-8 p-4 w-full md:px-4 flex flex-col gap-2 bg-[#FBDFDF] h-[120px]  md:h-[180px] justify-between rounded-xl">
          <label className="font-medium">Upload Your Image</label>
          <div
            className="bg-white flex justify-between w-full items-center px-2 cursor-pointer text-white rounded-md font-medium transition-colors duration-200"
            onClick={handleFileClick}
          >
            <div className="rounded-md flex flex-col w-full p-2 cursor-pointer text-sm text-gray-500">
              {formData.file ? formData.file.name : 'Click arrow to browse'}
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
        <div className="md:py-8 w-full p-4 md:px-4 flex flex-col justify-between h-[120px] md:h-[180px] gap-2 bg-[#FBEDDF] rounded-xl">
          <label className="font-medium">Press Release Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter a title for your press release"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 bg-white rounded-md p-2 h-14 text-sm focus:outline-none"
          />
        </div>

        {/* Press Release Content */}
        <div className="md:py-8 w-full md:px-4 flex flex-col  justify-between p-4 h-[220px] md:h-[350px] gap-2 bg-[#FBDFDF] rounded-xl">
          <label className="font-medium">Write your press release here</label>
          <textarea
            name="content"
            placeholder="Write"
            value={formData.content}
            onChange={handleChange}
            className="border border-gray-300 bg-white rounded-md p-2 h-[70%] text-sm focus:outline-none resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center w-full">
          <button
            type="submit"
            className="px-6 py-2 bg-[#EE3A3D] w-full text-white rounded hover:bg-red-500 cursor-pointer"
          >
            Generate
          </button>
        </div>
      </form>

      <Popup isOpen={loading} />
    </div>
  );
};

export default CustomForm;


// const CustomForm = ({ pr }) => {
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const { getToken } = useAuth();

//   // Initialize state from localStorage if available
//   const [formData, setFormData] = useState({
//     title: '',
//     content: '',
//     file: null,
//     imagePreview: null
//   });

//   const inputRef = useRef(null);

//   // Load drafts on mount
//   useEffect(() => {
//     const savedTitle = localStorage.getItem('customPrTitle');
//     const savedContent = localStorage.getItem('customPrContent');

//     if (savedTitle || savedContent) {
//       setFormData(prev => ({
//         ...prev,
//         title: savedTitle || '',
//         content: savedContent || ''
//       }));
//     }
//   }, []);

//   // Save drafts when changed
//   useEffect(() => {
//     localStorage.setItem('customPrTitle', formData.title);
//   }, [formData.title]);

//   useEffect(() => {
//     localStorage.setItem('customPrContent', formData.content);
//   }, [formData.content]);

//   const handleFileClick = () => {
//     if (inputRef.current) inputRef.current.click();
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       setFormData((prev) => ({
//         ...prev,
//         file: file,
//         imagePreview: URL.createObjectURL(file)
//       }));
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleClear = () => {
//     setFormData({
//       title: '',
//       content: '',
//       file: null,
//       imagePreview: null
//     });
//     localStorage.removeItem('customPrTitle');
//     localStorage.removeItem('customPrContent');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.title || !formData.content) {
//       toast.error("Please fill in title and content");
//       return;
//     }

//     setLoading(true);

//     try {
//       const token = await getToken();
//       const id = ulid();

//       // 1. Create PR via JSON
//       const payload = {
//         id: id,
//         title: formData.title,
//         content: formData.content,
//       };

//       await addorUpdateprs(ENDPOINTS.OTHER.PRS, payload, id, token);

//       // 2. Handle Image
//       if (formData.file) {
//         const imagePayload = new FormData();
//         imagePayload.append('image', formData.file);
//         await UpdateImage(ENDPOINTS.OTHER.PRS, imagePayload, id, token);
//       } else {
//         // Ensure clean state if no image
//         await DeleteImage(ENDPOINTS.OTHER.PRS, id, token);
//       }

//       // Clear drafts on success
//       localStorage.removeItem('customPrTitle');
//       localStorage.removeItem('customPrContent');

//       toast.success("Press release saved!");

//       // Delay for UX
//       setTimeout(() => {
//         setLoading(false);
//         router.push("/dashboard-dashboard");
//       }, 2000);

//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to save press release");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="py-18 w-full">
//       <Toaster position="bottom-right" />
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-5xl mx-auto px-4 md:px-0 flex flex-col items-center gap-3 justify-between"
//       >
//         {/* File Upload */}
//         <div className="md:py-8 p-4 w-full md:px-4 flex flex-col gap-2 bg-[#FBDFDF] h-[120px] md:h-[180px] justify-between rounded-xl">
//           <label className="font-medium">Upload Your Image</label>
//           <div
//             className="bg-white flex justify-between w-full items-center px-2 cursor-pointer text-white rounded-md font-medium transition-colors duration-200"
//             onClick={handleFileClick}
//           >
//             <div className="rounded-md flex flex-col w-full p-2 cursor-pointer text-sm text-gray-500">
//               {formData.file ? formData.file.name : 'Click arrow to browse'}
//               <input
//                 type="file"
//                 ref={inputRef}
//                 className="hidden"
//                 onChange={handleFileChange}
//               />
//             </div>
//             <div className="h-[15px] w-[15px] relative">
//               <Image
//                 src={'/assets/dashboard/arrow.svg'}
//                 alt="arrow"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Press Release Title */}
//         <div className="md:py-8 w-full p-4 md:px-4 flex flex-col justify-between h-[120px] md:h-[180px] gap-2 bg-[#FBEDDF] rounded-xl">
//           <label className="font-medium">Press Release Title</label>
//           <input
//             type="text"
//             name="title"
//             placeholder="Enter a title for your press release"
//             value={formData.title}
//             onChange={handleChange}
//             className="border border-gray-300 bg-white rounded-md p-2 h-14 text-sm focus:outline-none"
//           />
//         </div>

//         {/* Press Release Content */}
//         <div className="md:py-8 w-full md:px-4 flex flex-col justify-between p-4 h-[220px] md:h-[350px] gap-2 bg-[#FBDFDF] rounded-xl">
//           <label className="font-medium">Write your press release here</label>
//           <textarea
//             name="content"
//             placeholder="Write"
//             value={formData.content}
//             onChange={handleChange}
//             className="border border-gray-300 bg-white rounded-md p-2 h-[70%] text-sm focus:outline-none resize-none"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="flex gap-4 justify-center w-full">
//           <button
//             type="button"
//             onClick={handleClear}
//             className="px-6 py-2 bg-gray-200 text-black w-32 rounded hover:bg-gray-300 cursor-pointer"
//           >
//             Clear
//           </button>
//           <button
//             type="submit"
//             className="px-6 py-2 bg-[#EE3A3D] text-white w-full md:w-auto flex-1 rounded hover:bg-red-500 cursor-pointer"
//           >
//             Generate
//           </button>
//         </div>
//       </form>

//       <Popup isOpen={loading} />
//     </div>
//   );
// };

// export default CustomForm;
