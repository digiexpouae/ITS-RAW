import Index from '../components/dashboardAi/index'
import { AuthWrapper } from '../auth/auth'
import { useEffect, useState } from 'react'
import ENDPOINTS from '@/utils/ENDPOINTS'
import { useApi } from "@/function"
const dashboard = () => {
    const [fetchData, setfetchData] = useState(null)

    const { GETDATA } = useApi()

    const fetchdata = async () => {

        const response = await GETDATA(ENDPOINTS.OTHER.RESTAURANT)
        setfetchData(response)
        console.log("res")
    }
    useEffect(() => {
        fetchdata()
    }, [])





    return (
        <>
            <AuthWrapper>
                <Index fetchData={fetchData} />
            </AuthWrapper>
        </>
    )
}
export default dashboard