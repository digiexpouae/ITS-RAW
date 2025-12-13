import Index from '../components/dashboardinfo/index'
import {AuthWrapper} from '../auth/auth'

const DashboardInfo=()=>{
    return(
        <>   
        <AuthWrapper> 
        <Index />
        </AuthWrapper>  
        </>
    )
}
export default DashboardInfo