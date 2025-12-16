
import { useEffect, useState } from 'react'
import Dashboard from '../components/dashboardrelease/index'
import { getPrs ,fetchbyId,Delete} from '@/function'
import { useAuth } from '@clerk/nextjs'
import ENDPOINTS from '@/utils/ENDPOINTS'
const dashboardrelease=()=>{
 const {getToken}=useAuth()
 const [data, setData] = useState(null)
 const [editData, seteditData] = useState(null)
  const fetchPrs= async ()=>{

const token= await getToken()

const response = await getPrs(ENDPOINTS.OTHER.PRS,token)
const res= response
console.log("Response",res)
setData(response)

}


const fetchPr= async (id)=>{

  const token= await getToken()

const response=await fetchbyId(ENDPOINTS.OTHER.PRS,id,token)
const res=response
return res
console.log("edit data",res)
seteditData(res)
}

const DeletePr= async(id)=>{
  const token= await getToken()

const response = await Delete(ENDPOINTS.OTHER.PRS,id,token)
const res= response
console.log("Pr deleted",res)
await fetchPrs()

}





useEffect(()=>{
fetchPrs()

},[])



    return(
      <Dashboard DeletePr={DeletePr} data={data} fetchPr={fetchPr} fetchPrs={fetchPrs} editData={editData}/>
    )
}
export default dashboardrelease