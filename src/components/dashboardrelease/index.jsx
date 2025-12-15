import Header from "@/layout/header-2"
import Footer from "@/layout/footer"
import Herosection from "./herosection"
import AnalyticsSection from "./analytics"
const index=({data,fetchPr,editData,DeletePr,fetchPrs})=>{
return(

    <>
               <div className="h-auto md:h-[90vh] w-full bg-cover" style={{backgroundImage:'url(/assets/dashboard/raw.png)'}}>
<Header />
<Herosection image={'/assets/dashboardrelease/stats.png'}  btn2={' bg-[#FFFFFF] hover:bg-zinc-100 !text-black'} />
        </div>

        <AnalyticsSection data={data} fetchPrs={fetchPrs} DeletePr={DeletePr} fetchPr={fetchPr} editData={editData} />
    
<Footer />
</>
)


}
export default index