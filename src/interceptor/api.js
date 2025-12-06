import {useAuth,} from "@clerk/clerk-react";
import {createClient} from "@/api/client"
import {useEffect} from "react";

const client = createClient({
  baseUrl: import.meta.env.VITE_BACKEND_API_URL ?? 'http://localhost:3000',
});

export default function useApi() {
  const {getToken} = useAuth();

  useEffect(() => {
    const authInterceptor = async (request, _) => {
      request.headers.set('Authorization', `Bearer ${await getToken()}`);
      return request;
    }
// run code before sending request
    client.interceptors.request.use(authInterceptor);
    return () => client.interceptors.request.eject(authInterceptor);
  }, [getToken])

  return {client}
}
