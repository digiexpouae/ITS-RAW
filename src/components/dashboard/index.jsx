import Header from "@/layout/header"
import Footer from "@/layout/footer"
import Form from './form'
import Herosection from "./herosection"
import Mobileform from './mobileform'
const index=()=>{
    return(
        <>
        <div className="h-screen w-full bg-cover" style={{backgroundImage:'url(/assets/dashboard/raw.png)'}}>
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