import Header from "@/layout/header-2"
import Footer from "@/layout/footer"
import Herosection from "./herosection"
import AnalyticsSection from "./analytics"
import { useEffect, useState } from "react"
const index = ({ data, fetchPr, editData, DeletePr, fetchPrs }) => {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
                if (data) {
                        setLoading(false); // stop loading once data is available
                }
        }, [data]);


        if (loading) {
                return (
                        <div className="flex items-center justify-center h-screen w-full">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
                        </div>
                );
        }

        return (

                <>
                        <div className="h-auto md:h-[90vh] w-full bg-cover" style={{ backgroundImage: 'url(/assets/dashboard/raw.png)' }}>
                                <Header />
                                <Herosection image={'/assets/dashboardrelease/stats.png'} btn2={' bg-[#FFFFFF] hover:bg-zinc-100 !text-black'} />
                        </div>

                        <AnalyticsSection data={data} fetchPrs={fetchPrs} DeletePr={DeletePr} fetchPr={fetchPr} editData={editData} />

                        <Footer />
                </>
        )


}
export default index