import Header from "@/layout/header-2"
import Herosection from "../dashboard/herosection"
import Footer from '../../layout/footer'
import Customform from './customform'
const index=()=>{
    
    return(
    <>
               <div className="h-auto md:h-[90vh] w-full bg-cover overflow-hidden" style={{backgroundImage:'url(/assets/dashboard/raw.png)'}}>
<Header />
<Herosection image={'/assets/dashboardcustom/vector-2.svg'}  btn2={' bg-[#FFFFFF] hover:bg-zinc-100 !text-black'}/>

        </div>
        <Customform />

<Footer />
</>
    )
}   
export default index