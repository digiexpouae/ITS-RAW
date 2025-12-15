import Index from '../components/dashboardAi/index'
import {AuthWrapper} from '../auth/auth'
import { useEffect, useState } from 'react'
import { useAuth } from '@clerk/nextjs'
import api from '@/api/axiosinterceptor'
import ENDPOINTS from '@/utils/ENDPOINTS'
const dashboard=()=>{
const [fetchData, setfetchData] = useState(null)
const {getToken}=useAuth()


const fetchdata= async ()=> {
   
        const token=await getToken()
    const response=await api.get({url:ENDPOINTS.OTHER.RESTAURANT,token})
   setfetchData(response)
    console.log("res")
}
useEffect(()=>{
    fetchdata()
},[])




    return(
        <>
        <AuthWrapper>
        <Index fetchData={fetchData} />
        </AuthWrapper>
        </>
    )
}
export default dashboard