import Herosection from "./herosection"
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import DashboardInfo from "./dashboardinfoform"
const index=()=>{
    return(
        <>
                <div className="h-screen md:h-[90vh] w-full bg-cover relative overflow-hidden" style={{backgroundImage:'url(/assets/dashboard/raw.png)'}}>

<Header />
<Herosection image={'/assets/dashboardinfo/vector-info.svg'}  btn2={' bg-[#FFFFFF] hover:bg-zinc-100 !text-black'}/>
</div>
<DashboardInfo />
<Footer />
        </>
    )   
}
export default index