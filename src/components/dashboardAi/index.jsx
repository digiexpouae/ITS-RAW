
import Header from '../../layout/header-2'
import Footer from '../../layout/footer'
import Herosection from '../dashboard/herosection'
import Mobileform from '../dashboard/mobileform'
import Form from './form'
import Customform from '../dashboardcustom/customform'

import { useState } from 'react'


const dashboardAi = ({ fetchData }) => {
  const formSections = [
    {
      title: "Upload Your Image",
      type: "file",
      // options: ["Select", "Brand Awareness", "Product Launch", "Event"],
      bgColor: "bg-[#FBDFDF]",
      height: "h-[120px]",
      fullWidth: true
    },
    {
      title: "Press Release Style",
      type: "select",
      options: ["Select", "Formal", "Fun"],
      bgColor: "bg-[#FBDFDF]",
      height: "h-[120px] md:h-[300px]",
      fullWidth: true
    },
    {
      title: "Select the primary focus of the campaign or release*",
      type: "select",
      options: ["New Chef Announcement", "Collaboration / Guest Chef", "New Offer / Deal", "Seasonal Campaign", "Special Event", "Venue Redesign / Refurbishment", "Awards / Recognitions", "Brand Partnership", "CSR Initiative / Sustainability Update", "New Opening", "Other"],
      bgColor: "bg-[#FBDFDF]",
      height: "h-[120px] md:h-[300px]"
    },
    {
      title: "Go-Live Date / Event / Offer Date*",
      type: "date",
      bgColor: "bg-[#FBEDDF]",
      height: "h-[120px] md:h-[300px]"
    },

    {
      title: "Duration (If Applicable)",
      type: "select",
      options: ["Select", "One-day only", "Week-long", "Month-long", "Ongoing", "Seasonal"],
      bgColor: "bg-[#FBEDDF]",
      height: "h-[120px] md:h-[180px]"
    },
    {
      title: "Primary Spokesperson (If Applicable)",
      type: "select",
      options: ["Select", "Owner", "General Manager", "Head Chef", "Marketing Manager", "F&B Director", "Other"], bgColor: "bg-[#FBEDDF]",
      height: "h-[120px] md:h-[180px]"
    },
    {
      title: "Name of spokesperson",
      type: "text",
      placeholder: "Enter the name of spokesperson",
      bgColor: "bg-[#FBEDDF]",
      height: "h-[120px] md:h-[180px]"
    },
    {
      title: "Key highlights / Selling points (Max 3 bullet points)*",
      type: "text",
      placeholder: "Enter upto 3 key highlights or selling points",
      bgColor: "bg-[#FBDFDF]",
      height: "h-[120px] md:h-[180px]",
      //   fullWidth: isMobile
    },
    {
      title: "Designation Title of spokesperson",
      type: "text",
      placeholder: "Enter the title and designation of spokesperson",
      bgColor: "bg-[#FBEDDF]",
      height: "h-[120px] md:h-[180px]"
    },





    {
      title: "Preferred quote for Press (if any) ",
      type: "text",
      placeholder: "Enter a quote from the spokesperson Enter a quote from the spokesperson for the press release the press release",
      bgColor: "bg-[#FBDFDF]",
      height: "h-[120px] md:h-[180px]"
    }
  ]
  const initialFormData = formSections.reduce((acc, section) => {
    acc[section.title] = section.type === "file" ? null : "";
    return acc;
  }, {});
  const [activeForm, setActiveform] = useState("ai")
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState(initialFormData)

  console.log("fomdata:", formData);

  const handleChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <>
      <div className="h-auto md:h-[90vh] w-full bg-cover overflow-hidden" style={{ backgroundImage: 'url(/assets/dashboard/raw.png)' }}>

        <Header />
        <Herosection image={'/assets/dashboardcustom/vector-2.svg'} activeForm={activeForm} setActiveform={setActiveform} btn2={' bg-[#FFFFFF] hover:bg-zinc-100 !text-black'} />


      </div>
      {activeForm === "ai" && (
        <>  <Form fetchData={fetchData} />
          {/* <Mobileform formData={formData} loading={loading} handleChange={handleChange} formSections={formSections} dashboardAi={true} /> */}
        </>
      )}


      {activeForm === "custom" && (
        <Customform />
      )}

      <Footer />
    </>
  )
}
export default dashboardAi