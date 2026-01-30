"use client";

import { useEffect, useRef, useState } from 'react';
import LoaderPopup from '../popup'
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useApi } from '@/function'
import ENDPOINTS from '@/utils/ENDPOINTS'
// import { useAuth } from '@clerk/nextjs';
// import { useAxios } from '@/hooks/useAxios';
import toast, { Toaster } from 'react-hot-toast';
import { ulid } from 'ulid';
export default function CampaignForm({ fetchData }) {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null)
  const [imageFile, setImageFile] = useState(null);

  const { generate, addorUpdateprs, UpdateImage, DeleteImage } = useApi();
  // const axiosInstance = useAxios();
  const [formData, setFormData] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('generatePrForm');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return parsed;
        } catch (e) {
          console.error("Error parsing saved form data", e);
        }
      }
    }
    return {
      pressReleaseStyle: "",
      primarySpokesperson: "",
      campaignFocus: "",
      spokespersonName: "",
      designationTitle: "",
      priceRange: "",             // input
      goLiveDate: "",                   // input type date
      duration: "",                      // select
      keyHighlights: "",                // textarea
      preferredQuote: "",
    };
  })
  const router = useRouter()

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
    if (file) {
      setImageFile(file);
    }
  };





  const handleFileClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  useEffect(() => {
    try {
      localStorage.setItem('generatePrForm', JSON.stringify(formData));
    } catch (e) {
      // ignore quota errors
    }
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Required fields
    const requiredFields = [
      "pressReleaseStyle",
      "primarySpokesperson",
      "campaignFocus",
      "spokespersonName",
      "designationTitle",
      "goLiveDate",
      "duration",
      "keyHighlights",
      "preferredQuote",
    ];

    // Check for empty required fields
    const emptyFields = requiredFields.filter(
      (key) => !formData[key] || formData[key].toString().trim() === ""
    );

    if (emptyFields.length > 1) {
      toast.error("Please fill all required fields .");
      return; // Stop submission if too many fields are empty
    }

    try {
      setLoading(true);

      const payload = {
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
          style: formData.pressReleaseStyle,
        },
      };

      const response = await generate(ENDPOINTS.OTHER.GENERATE, payload);
      // ✅ Handle plain string or object responses
      // if (!response || response.error || response === "Out of generations. Credits reset at midnight UTC." || (typeof response !== 'string' && !response.success)) {
      //   let errorMessage = "";

      //   if (typeof response === "string") {
      //     errorMessage = response; // API returned plain string
      //   } else if (response?.error) {
      //     errorMessage = response.error; // API returned error object
      //   } else {
      //     errorMessage = "Failed to generate press release."; // Fallback
      //   }

      //   toast.error(errorMessage);
      //   return; // Stop further execution
      // }
      const id = ulid()
      if (response) {

        const title = response.match(/^# (.*)$/m)?.[1] || `ItsRaw.AI Press Release`;
        const content = response

        // 1. Create JSON payload for initial PR creation
        const payload2 = {
          id: id,
          title: title,
          content: content,
        };

        const res = await addorUpdateprs(ENDPOINTS.OTHER.PRS, payload2, id)
        console.log("res", res)

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
      }
      await new Promise((resolve) => setTimeout(resolve, 5000));

      toast.success("Press release generated and submitted successfully!");
      router.push("/dashboard-dashboard");

    }
    catch (error) {
      console.error(error);

      toast.error(error);

      throw error
    } finally {
      setLoading(false);
    }
  };



  return (<>

    <div className="min-h-screen  hidden lg:flex flex-col  items-center justify-center p-8 my-10">
      {/* <h2 className="text-5xl uppercase mb-4  text-left">Fill In Press Release Details</h2> */}

      <form className="flex flex-col gap-4 justify-center mx-auto  max-w-5xl w-full" >
        <div className="py-8 w-full px-4 flex flex-col gap-2 justify-between h-[180px] bg-[#FBDFDF] rounded-xl">
          <label className="font-medium">Upload Your Image</label>
          <div
            className="bg-white flex justify-between w-full items-center px-2 cursor-pointer  rounded-md font-medium transition-colors duration-200"
            onClick={handleFileClick}
          >
            <div className="rounded-md flex flex-col w-full p-2 cursor-pointer text-sm text-gray-500">
              {imageFile ? imageFile.name : 'Drag & drop or browse here'}
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
                      <select name="pressReleaseStyle"
                        value={formData.pressReleaseStyle}
                        onChange={handleChange} className="border bg-white text-start  border-gray-400 rounded-md flex flex-col items-center justify-center p-2 text-sm text-gray-500">
                        <option value="">Select</option>
                        <option value="formal">Formal</option>
                        <option value="fun">Fun</option>

                      </select>        </div>
                    <div className="col-span-1 bg-[#FBEDDF] p-3 py-8 h-[180px]  w-[250px] rounded-2xl flex flex-col justify-between">
                      <label className="font-medium text-sm mb-1">Primary Spokesperson
                        (If Applicable)</label>
                      <select name="primarySpokesperson"
                        value={formData.primarySpokesperson} onChange={handleChange} className="border bg-white text-start  border-gray-400 rounded-md flex flex-col items-center justify-center p-2 text-sm text-gray-500">
                        <option value="">Select</option>
                        <option value="owner">Owner</option>
                        <option value="general-manager">General Manager</option>
                        <option value="head-chef">Head Chef</option>
                        <option value="marketing-manager">Marketing Manager</option>
                        <option value="fb-director">F&amp;B Director</option>
                        <option value="other">Other</option>

                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">

                    <div className="col-span-1 bg-[#FBEDDF] p-3 py-8 h-[180px] w-[230px]  rounded-2xl flex flex-col justify-between">
                      <label className="font-medium text-sm mb-1">Select the primary focus
                        of the campaign or release*</label>


                      <select value={formData.campaignFocus} name="campaignFocus"
                        onChange={handleChange} className="border bg-white text-start  border-gray-400 rounded-md flex flex-col items-center justify-center p-2 text-sm text-gray-500">

                        <option value="new-chef">New Chef Announcement</option>
                        <option value="collaboration">Collaboration / Guest Chef</option>
                        <option value="new-offer">New Offer / Deal (e.g., Happy Hour, Business Lunch)</option>
                        <option value="seasonal-campaign">Seasonal Campaign (e.g., Ramadan, NYE, Christmas)</option>
                        <option value="special-event">Special Event (e.g., Live DJ, Tasting Menu, Workshop)</option>
                        <option value="venue-redesign">Venue Redesign / Refurbishment</option>
                        <option value="awards">Awards / Recognitions</option>
                        <option value="brand-partnership">Brand Partnership</option>
                        <option value="csr-initiative">CSR Initiative / Sustainability Update</option>
                        <option value="new-opening">New Opening</option>
                        <option value="other">Other</option>

                      </select>
                    </div>
                    <div className="col-span-1 bg-[#FBDFDF] h-[250px] p-3 py-8  rounded-2xl flex flex-col justify-between">
                      <label className="font-medium text-sm mb-1">Name of spokesperson</label>
                      <textarea type="text" name="spokespersonName" value={formData.spokespersonName}
                        onChange={handleChange} placeholder="Enter the name of spokesperson" className="border border-gray-300 resize-none bg-white rounded-md p-2   text-sm" />
                    </div>
                  </div></div>
                <div className="flex gap-4">

                  <div className="col-span-1 bg-[#FBEDDF] h-[180px] w-[500px] p-3 py-8 rounded-2xl flex flex-col justify-between">
                    <label className="font-medium text-sm mb-1">Designation Title of spokesperson </label>
                    <input type="text" name="designationTitle"
                      value={formData.designationTitle} onChange={handleChange} placeholder="Enter the title and designation of spokesperson" className="border border-gray-300 bg-white rounded-md p-2 text-sm" />
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


                    <input type="date" name="goLiveDate" value={formData.goLiveDate} onChange={handleChange} className="border border-gray-300 bg-white rounded-md p-2 text-sm" />
                  </div>
                  <div className="col-span-1 bg-[#FBDFDF]  p-3 py-8 w-[250px] h-[180px] rounded-2xl flex flex-col justify-between">
                    <label className="font-medium text-sm mb-1">Duration
                      (If Applicable)</label>


                    <select name="duration" value={formData.duration} onChange={handleChange} className="border bg-white text-start  border-gray-400 rounded-md flex flex-col items-center justify-center p-2 text-sm text-gray-500">
                      <option value="">Select</option>
                      <option value="one-day">One-day only</option>
                      <option value="week-long">Week-long</option>
                      <option value="month-long">Month-long</option>
                      <option value="ongoing">Ongoing</option>
                      <option value="seasonal">Seasonal (e.g., Summer, Ramadan)</option>          </select>        </div>
                </div>
                <div className="col-span-1 bg-[#FBEDDF] w-[500px]  h-[250px]  p-3 py-8 rounded-2xl flex flex-col justify-between">
                  <label className="font-medium text-sm mb-1">Key highlights / Selling points (Max 3 bullet points)*</label>
                  <textarea type="text" name="keyHighlights" value={formData.keyHighlights} onChange={handleChange} placeholder="Enter upto 3 key highlights or selling points" className="border border-gray-300 resize-none bg-white rounded-md p-2 h-[120px] text-sm" />
                </div>


              </div>

            </div>
            <div className="flex flex-col gap-4">


              <div className="col-span-1 bg-[#FBDFDF] h-[180px] w-[500px]  p-3 py-8 rounded-2xl flex flex-col justify-between">
                <label className="font-medium text-sm mb-1">Preferred quote for Press (if any)  </label>
                <textarea type="text" name="preferredQuote" value={formData.preferredQuote} onChange={handleChange} placeholder="Enter the title and designation of spokesperson" className="border border-gray-300 bg-white rounded-md p-2 resize-none h-[70px] text-sm" />
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
        <Toaster position="bottom-right" />
      </form>


    </div>
    <LoaderPopup isOpen={loading} />

    {/* ================= MOBILE FORM ================= */}
    <div className="min-h-screen lg:hidden block px-4 py-6 my-20">
      <form className="flex flex-col gap-4">

        {/* Upload Image */}
        <div className="bg-[#FBDFDF] p-4 rounded-xl flex flex-col gap-2">
          <label className="font-medium text-sm mb-2">Upload Image</label>
          <div
            className="bg-white p-3 rounded-md text-sm text-gray-500 cursor-pointer"
            onClick={handleFileClick}
          >
            {imageFile ? imageFile.name : "Tap to upload image"}
            <input
              type="file"
              ref={inputRef}
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>

        {/* Press Release Style */}
        <div className="bg-[#FBDFDF] p-4 rounded-xl">
          <label className="text-sm font-medium mb-2 block">
            Press Release Style
          </label>
          <select
            name="pressReleaseStyle"
            value={formData.pressReleaseStyle}
            onChange={handleChange}
            className="w-full border bg-white border-gray-400 rounded-md p-2 text-sm"
          >
            <option value="">Select</option>
            <option value="formal">Formal</option>
            <option value="fun">Fun</option>
          </select>
        </div>
        {/* Campaign Focus */}
        <div className="bg-[#FBEDDF] p-4 rounded-xl">
          <label className="text-sm font-medium mb-2 block">
            Select the primary focus of the campaign or release*
          </label>
          <select
            name="campaignFocus"
            value={formData.campaignFocus}
            onChange={handleChange}
            className="w-full border bg-white border-gray-400 rounded-md p-2 text-sm"
          >
            <option value="">Select</option>
            <option value="new-chef">New Chef Announcement</option>
            <option value="collaboration">Collaboration / Guest Chef</option>
            <option value="new-offer">New Offer / Deal</option>
            <option value="seasonal-campaign">Seasonal Campaign</option>
            <option value="special-event">Special Event</option>
            <option value="venue-redesign">Venue Redesign</option>
            <option value="awards">Awards</option>
            <option value="brand-partnership">Brand Partnership</option>
            <option value="csr-initiative">CSR Initiative</option>
            <option value="new-opening">New Opening</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* Go Live Date */}
        <div className="bg-[#FBEDDF] p-4 rounded-xl">
          <label className="text-sm font-medium mb-2 block">
            Go-Live Date / Event / Offer Date*
          </label>
          <input
            type="date"
            name="goLiveDate"
            value={formData.goLiveDate}
            onChange={handleChange}
            className="w-full border bg-white border-gray-300 rounded-md p-2 text-sm"
          />
        </div>

        {/* Duration */}
        <div className="bg-[#FBDFDF] p-4 rounded-xl">
          <label className="text-sm font-medium mb-2 block">
            Duration (If Applicable)

          </label>
          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full border bg-white border-gray-400 rounded-md p-2 text-sm"
          >
            <option value="">Select</option>
            <option value="one-day">One Day</option>
            <option value="week-long">Week Long</option>
            <option value="month-long">Month Long</option>
            <option value="ongoing">Ongoing</option>
            <option value="seasonal">Seasonal</option>
          </select>
        </div>
        {/* Primary Spokesperson */}
        <div className="bg-[#FBEDDF] p-4 rounded-xl">
          <label className="text-sm font-medium mb-2 block">
            Primary Spokesperson (If Applicable)
          </label>
          <select
            name="primarySpokesperson"
            value={formData.primarySpokesperson}
            onChange={handleChange}
            className="w-full border bg-white border-gray-400 rounded-md p-2 text-sm"
          >
            <option value="">Select</option>
            <option value="owner">Owner</option>
            <option value="general-manager">General Manager</option>
            <option value="head-chef">Head Chef</option>
            <option value="marketing-manager">Marketing Manager</option>
            <option value="fb-director">F&B Director</option>
            <option value="other">Other</option>
          </select>
        </div>



        {/* Spokesperson Name */}
        <div className="bg-[#FBDFDF] p-4 rounded-xl">
          <label className="text-sm font-medium mb-2 block">
            Name of spokesperson
          </label>
          <input
            type="text"
            name="spokespersonName"
            value={formData.spokespersonName}
            onChange={handleChange}
            className="w-full border bg-white border-gray-300 rounded-md p-2 text-sm"
          />
        </div>



        {/* Key Highlights */}
        <div className="bg-[#FBEDDF] p-4 rounded-xl">
          <label className="text-sm font-medium mb-2 block">
            Key highlights / Selling points (Max 3 bullet points)*
          </label>
          <textarea
            name="keyHighlights"
            value={formData.keyHighlights}
            onChange={handleChange}
            rows={4}
            className="w-full border bg-white border-gray-300 rounded-md p-2 text-sm resize-none"
          />
        </div>

        {/* Designation */}
        <div className="bg-[#FBEDDF] p-4 rounded-xl">
          <label className="text-sm font-medium mb-2 block">
            Designation Title of spokesperson
          </label>
          <input
            type="text"
            name="designationTitle"
            value={formData.designationTitle}
            onChange={handleChange}
            className="w-full border bg-white border-gray-300 rounded-md p-2 text-sm"
          />
        </div>


        {/* Preferred Quote */}
        <div className="bg-[#FBDFDF] p-4 rounded-xl">
          <label className="text-sm font-medium mb-2 block">
            Preferred quote for Press (if any)
          </label>
          <textarea
            name="preferredQuote"
            value={formData.preferredQuote}
            onChange={handleChange}
            rows={3}
            className="w-full border bg-white border-gray-300 rounded-md p-2 text-sm resize-none"
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="mt-4 bg-[#EE3A3D] text-white py-3 rounded-lg font-medium"
        >
          Generate
        </button>

        <Toaster position="bottom-right" />
      </form>
    </div>

  </>)
}
