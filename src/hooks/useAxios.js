import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useMemo } from "react";

export const useAxios = () => {
    const { getToken } = useAuth();

    const axiosInstance = useMemo(() => {
        const instance = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
            timeout: 600000,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        });

        // console.log("Axios instance created:", instance);

        instance.interceptors.request.use(async (config) => {
            const token = await getToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            // IMPORTANT: only set JSON header if NOT FormData
            if (config.data instanceof FormData) {
                // Let Axios handle multipart boundary
                delete config.headers["Content-Type"];
            } else {
                config.headers["Content-Type"] = "application/json";
            }

            return config;
        });
        console.log("Axios instance configured with interceptor.");
        return instance;
    }, [getToken]);

    // console.log("useAxios returning:", axiosInstance);
    // 
    // console.log("Axios instance", axiosInstance)
    return axiosInstance;
};
