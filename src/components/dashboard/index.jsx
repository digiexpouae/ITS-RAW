import Header from "@/layout/header-2"
import Footer from "@/layout/footer"
import Form from './form'
import Herosection from "./herosection"
import Mobileform from './mobileform'
import { useState } from "react"
const index=()=>{
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
      // fullWidth: isMobile
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
   const initialFormData = formSections.reduce((acc, section) => {
    acc[section.title] = section.type === "file" ? null : "";
    return acc;
  }, {});
  const  [activeform,Setactiveform]=useState()
  const [loading,setLoading]=useState(false)
  const [formData,setFormData]=useState(initialFormData)
  
  console.log("fomdata:", formData);
  
  const handleChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
  
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
  
    console.log("API-ready FormData:", [...formDataToSend.entries()]);
    
    setLoading(true);
    setFormData(initialFormData);
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  };
    return(
        <>
        <div className="h-screen md:h-[90vh] w-full bg-cover relative overflow-hidden" style={{backgroundImage:'url(/assets/dashboard/raw.png)'}}>
<Header />
<Herosection image={'/assets/dashboard/Layer_1.png'} activeform={activeform} Setactiveform={Setactiveform} />
  </div>
         <Mobileform handleSubmit={handleSubmit} formData={formData} loading={loading} handleChange={handleChange} formSections={formSections}  />
  <Form />
<Footer />
</>
      
    )
}
export default index