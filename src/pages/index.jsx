
import Header from "@/layout/header-2"
import Section1 from '../components/home/section1'
import Section2 from '../components/home/section2'
import Section3 from "@/components/home/section3"
import Section4 from '../components/home/section4'
import Section5 from '../components/home/section5'
import Section6 from '../components/home/section6'
import Section7 from '../components/home/section7'
import Section8 from '../components/home/section8'
import Section9 from '../components/home/section9'
import Footer from "@/layout/footer"
import Index from "../components/dashboardtwo/index"
import { SignedIn } from "@clerk/nextjs"
const Home = () => {
  return (<div className="relative
  ">
    {!SignedIn ?
      (<>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />

        <Footer />
      </>) : (<>

        <Index />
      </>
      )}
  </div>)
}
export default Home