
import { useEffect } from 'react';
import Index from '../components/dashboard/index'
import { useAuth } from '@clerk/nextjs';
const dashboard=()=>{
     const { getToken } = useAuth();
  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      console.log('Clerk Token:', token);
    };

    fetchToken();
  }, []);

    return(
        <div>
            <Index />
            
             </div>
    )
}
export default dashboard