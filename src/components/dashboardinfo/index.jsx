import Herosection from "./herosection"
import Header from '../../layout/header-2'
import Footer from '../../layout/footer'
import DashboardInfo from "./dashboardinfoform"
import ENDPOINTS from "@/utils/ENDPOINTS"
import api from "@/api/axiosinterceptor"
import { useEffect,useState } from "react"
import { useAuth } from "@clerk/nextjs"
const index=()=>{




     const {getToken}= useAuth()
const [data, setData] = useState(null)

const fetchdata= async ()=> {
   
        const token=await getToken()
    const response=await api.get({url:ENDPOINTS.OTHER.RESTAURANT,token})
    setData(response)
    console.log("res")
}



useEffect(()=>{

fetchdata()


    
},[])





    return(
        <>
                <div className="h-screen md:h-[90vh] w-full bg-cover relative overflow-hidden" style={{backgroundImage:'url(/assets/dashboard/raw.png)'}}>

<Header />
<Herosection image={'/assets/dashboardinfo/vector-info.svg'}  btn2={' bg-[#FFFFFF] hover:bg-zinc-100 !text-black'}/>
</div>
<DashboardInfo fetch={data} />
<Footer />
        </>
    )   
}
export default index