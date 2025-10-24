import Header from "@/layout/header"
import Herosection from "./herosection"
import Sectionthree from "./sectionthree"
import Footer from '../../layout/footer'
import Section4 from "./section4"
const index=()=>{
    return(
    <>
               <div className="h-auto md:h-screen w-full bg-cover" style={{backgroundImage:'url(/assets/dashboard/raw.png)'}}>
<Header />
<Herosection />

        </div>
        <Sectionthree />
        <Section4 />
<Footer />
</>
    )
}   
export default index