"use client";
import { useState, useEffect } from 'react';

export default function CampaignForm() {
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

  const formSections = [
    {
      title: "Headline / Subject",
      type: "text",
      placeholder: "Write",
      bgColor: "bg-[#FBDFDF]",
      height: "h-[180px] md:h-[300px]",
      fullWidth: true
    },
    {
      title: "Speaker name",
      type: "text",
      placeholder: "Write",
      bgColor: "bg-[#FBEDDF]",
      height: "h-[120px] md:h-[180px]"
    },
    {
      title: "Key highlights for your story",
      type: "select",
      options: ["Formal", "Informal", "Professional"],
      bgColor: "bg-[#FBEDDF]",
      height: "h-[120px] md:h-[180px]"
    },
    {
      title: "Quote for media",
      type: "text",
      placeholder: "Write",
      bgColor: "bg-[#FBDFDF]",
      height: "h-[180px] md:h-[300px]"
    },
    {
      title: "Focus of the Campaign",
      type: "select",
      options: ["Select", "Brand Awareness", "Product Launch", "Event"],
      bgColor: "bg-[#FBEDDF]",
      height: "h-[120px] md:h-[180px]"
    },
    {
      title: "Insert images (optional)",
      type: "file",
      bgColor: "bg-[#FBEDDF]",
      height: "h-[180px] md:h-[300px]"
    },
    {
      title: "Speaker Title",
      type: "text",
      placeholder: "Write",
      bgColor: "bg-[#FBDFDF]",
      height: "h-[120px] md:h-[180px]",
      fullWidth: isMobile
    },
    {
      title: "Speaker Role",
      type: "text",
      placeholder: "Write",
      bgColor: "bg-[#FBEDDF]",
      height: "h-[120px] md:h-[180px]"
    },
    {
      title: "Offer Date If Applicable",
      type: "date",
      bgColor: "bg-[#FBDFDF]",
      height: "h-[120px] md:h-[335px]"
    }
  ];

  const renderInput = (field) => {
    switch(field.type) {
      case 'select':
        return (
          <select 
            className={`w-full border bg-white border-gray-400 rounded-md p-2 text-sm text-gray-500 ${field.height === 'h-[335px]' ? 'h-[calc(100%-2rem)]' : 'h-10'}`}
          >
            {field.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'date':
        return (
          <input 
            type="date" 
            className={`w-full border border-gray-400 bg-white rounded-md p-2 text-sm text-gray-500 ${field.height === 'h-[335px]' ? 'h-[calc(100%-2rem)]' : 'h-10'}`}
          />
        );
      case 'file':
        return (
          <div className={`w-full border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center ${field.height === 'h-[335px]' ? 'h-[calc(100%-2rem)]' : 'h-full'}`}>
            <span className="text-gray-500 text-sm">Click to upload or drag and drop</span>
          </div>
        );
      default:
        return (
          <input 
            type={field.type} 
            placeholder={field.placeholder}
            className={`w-full border border-gray-300 bg-white rounded-md p-2 text-sm ${field.height === 'h-[335px]' ? 'h-[calc(100%-2rem)]' : 'h-10'}`}
          />
        );
    }
  };

  return (
    <div className="min-h-screen lg:hidden block  py-8 px-4 md:px-8 my-20">
      <form className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {formSections.map((section, index) => (
            <div 
              key={index}
              className={`${section.bgColor} p-4 rounded-2xl flex flex-col ${section.height} ${section.fullWidth ? 'md:col-span-2' : ''}`}
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
      </form>
    </div>
  );
}