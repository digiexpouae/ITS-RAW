import Header from "@/layout/header"
import Footer from "@/layout/footer"
import Form from './form'
import Herosection from "./herosection"
import Mobileform from './mobileform'
const index=()=>{
    return(
        <>
        <div className="h-screen md:h-[90vh] w-full bg-cover relative overflow-hidden" style={{backgroundImage:'url(/assets/dashboard/raw.png)'}}>
<Header />
<Herosection />
  </div>
  <Mobileform />
  <Form />
<Footer />
</>
      
    )
}
export default index