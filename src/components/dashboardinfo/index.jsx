import Herosection from "./herosection"
import Header from '../../layout/header-2'
import Footer from '../../layout/footer'
import DashboardInfo from "./dashboardinfoform"
import ENDPOINTS from "@/utils/ENDPOINTS"
import api from "@/api/axiosinterceptor"
import { useEffect, useState } from "react"
import { useApi } from "@/function"
const index = () => {




    const [data, setData] = useState(null)
    const { GET_RESTAURANT_DATA } = useApi()



    const fetchdata = async () => {
        const response = await GET_RESTAURANT_DATA(
            ENDPOINTS.OTHER.RESTAURANT
        );

        // Server error / auth error
        if (response === null) {
            setData([]);
            console.log("Something went wrong while fetching restaurant");
            return;
        }

        // No restaurant exists yet
        if (response.length === 0) {
            setData([]);
            console.log("No restaurant data found – show empty form");
            return;
        }

        // Restaurant exists
        setData(response);
        console.log("fetch restaurant", response);
    };


    useEffect(() => {

        fetchdata()



    }, [])





    return (
        <>
            <div className="h-screen md:h-[90vh] w-full bg-cover relative overflow-hidden" style={{ backgroundImage: 'url(/assets/dashboard/raw.png)' }}>

                <Header />
                <Herosection image={'/assets/dashboardinfo/vector-info.svg'} btn2={' bg-[#FFFFFF] hover:bg-zinc-100 !text-black'} />
            </div>
            <DashboardInfo fetch={data} />
            <Footer />
        </>
    )
}
export default index