
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
import { useUser } from "@clerk/nextjs"
const Home = () => {


  const { isSignedIn, isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    )
  }

  return (<div className="relative
  ">


    {!isSignedIn ?
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