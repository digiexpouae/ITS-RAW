import Header from "@/layout/header-2"
import Herosection from "./herosection"
import Sectionthree from "./sectionthree"
import Footer from '../../layout/footer'
import Section4 from "./section4"
import Section5 from '../../components/home/section5'

const index = () => {
    return (
        <>
            <div className="h-auto md:h-screen w-full bg-cover" style={{ backgroundImage: 'url(/assets/dashboard/raw.png)' }}>
                <Header />
                <Herosection />

            </div>


            {/* <Sectionthree /> */}
            <Section5 className={'!py-40'} />
            <Section4 />
            <Footer />
        </>
    )
}
export default index