import { useState, useEffect } from 'react';
import Popup from '../popup'
export default function CampaignForm({ formSections, loading, dashboardAi, handleSubmit, handleChange, formData }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const renderInput = (field,) => {

    switch (field.type) {

      case 'select':
        return (
          <select
            className={`w-full border bg-white border-gray-400 rounded-md p-2 text-sm text-gray-500 ${field.height === 'h-[335px]' ? 'h-[calc(100%-2rem)]' : 'h-10'}`}
            value={formData[field.title] || ""}

            onChange={(e) => handleChange(field.title, e.target.value)}>
            {field.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'date':
        console.log("FIELD TITLEtwo:", field.title);
        return (
          <input
            value={formData[field.title] || ""}
            onChange={(e) => handleChange(field.title, e.target.value)}
            type="date"

            className={`w-full border border-gray-400 bg-white rounded-md p-2 text-sm text-gray-500 ${field.height === 'h-[335px]' ? 'h-[calc(100%-2rem)]' : 'h-10'}`}
          />
        );
      case 'file':
        return (
          // <div className={`w-full border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center ${field.height === 'h-[335px]' ? 'h-[calc(100%-2rem)]' : 'h-full'}`}>
          //   <span className="text-gray-500 text-sm">Click to upload or drag and drop</span>
          // </div>
          <input

            onChange={(e) => handleChange(field.title, e.target.files[0])}
            type="file"
            className={`w-full border border-gray-400 bg-white rounded-md p-2 text-sm text-gray-500 ${field.height === 'h-[335px]' ? 'h-[calc(100%-2rem)]' : 'h-10'}`}
          />
        );
      default:
        return (
          <input
            type={field.type}
            onChange={(e) => handleChange(field.title, e.target.value)}

            value={formData[field.title] || ""}
            placeholder={field.placeholder}
            className={`w-full border border-gray-300 bg-white rounded-md p-2 text-sm ${field.height === 'h-[335px]' ? 'h-[calc(100%-2rem)]' : 'h-10'}`}
          />
        );
    }
  };

  return (
    <div className="min-h-screen lg:hidden block  py-8 px-4 md:px-8 my-20">
      {/* <h2 className="text-5xl uppercase mb-4  text-left">Fill In Press Release Details</h2> */}

      <form className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {formSections.map((section, index) => (
            <div
              key={index}
              className={`${section.bgColor} p-4 rounded-2xl flex flex-col justify-between ${section.height} ${section.fullWidth ? 'md:col-span-2' : ''}`}
            >
              <label className="font-medium text-sm mb-2">
                {section.title.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < section.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </label>
              {renderInput(section)}
            </div>
          ))}
        </div>
        {dashboardAi && (<>
          <div className="flex justify-center w-full mt-8">
            <button className="px-6 py-2 bg-[#EE3A3D] w-full text-white rounded hover:bg-red-500 cursor-pointer" onClick={handleSubmit}>
              Generate
            </button>
          </div>

          <Popup isOpen={loading} />
        </>
        )}

      </form>

    </div>
  );
}