import { useAxios } from "./hooks/useAxios";
import ENDPOINTS from "./utils/ENDPOINTS";
import { useUser } from "@clerk/nextjs";



export const useApi = () => {
    const api = useAxios();
    const { isSignedIn } = useUser()
    // console.log("useApi api instance:", api);

    const addorUpdateprs = async (enpoints, data, id) => {
        if (!isSignedIn) return;
        try {
            const response = await api.put(`${enpoints}/${id}`, data)
            if (response.data) {
                console.log("prs added", response.data)
                return response.data
            }
        }
        catch (error) {
            console.error("Error:", error);
        }
    }

    const DeleteImage = async (enpoints, id) => {
        try {
            const response = await api.delete(`${enpoints}/${id}/image`)
            if (response.data) {
                console.log("prs deleted", response.data)
                return response.data
            }
        }
        catch (error) {
            console.error("Error:", error);
        }
    }

    const uploadPrImage = async (enpoints, id) => {
        try {
            // NOTE: Original code had api.delete here? Checking original logic:
            // "const response = await api.delete..." in uploadPrImage? 
            // That seems wrong in original file but preserving behavior unless it was a bug fix request.
            // Wait, looking at original file content from step 22:
            // export async function uploadPrImage(enpoints, id, token) { ... await api.delete ... }
            // This looks like a copy-paste error in the original code, but I will keep it consistent or fix if obvious. 
            // Given the name 'uploadPrImage', it should probably be a PUT/POST. 
            // However, to be safe and avoid breaking unknown logic, I will replicate strict behavior or ask.
            // Actually, I'll assume standard REST: delete image might be what it did? 
            // But there is also DeleteImage function.
            // Let's look at `UpdateImage` (put).
            // `uploadPrImage` is seemingly unused or broken in original. I will stick to exact transcription.

            const response = await api.delete(`${enpoints}/${id}/image`)
            if (response.data) {
                console.log("prs deleted", response.data)
                return response.data
            }
        }
        catch (error) {
            console.error("Error:", error);
        }
    }

    const Preview = async (enpoints, id) => {
        try {
            const response = await api.get(`${enpoints}/${id}/preview`)
            if (response.data) {
                console.log("prs preview", response.data)
                return response.data
            }
        }
        catch (error) {
            console.error("Error:", error);
        }
    }

    const getPrs = async (enpoints) => {


        try {
            const response = await api.get(`${enpoints}`)
            if (response.data) {
                console.log("prs get", response.data)
                return response.data
            }
        }
        catch (error) {
            console.error("Error:", error);
        }
    }

    const GETDATA = async (enpoints) => {
        if (!isSignedIn) return;
        try {
            const response = await api.get(`${enpoints}`)
            if (response.data) {
                console.log(" GENERATE CREDITS", response.data)
                return response.data
            }
        }
        catch (error) {
            console.error("Error:", error);
        }
    }

    const UpdateImage = async (endpionts, data, id) => {
        try {
            const response = await api.put(`${endpionts}/${id}/image`, data)
            return response.data
        }
        catch (error) {
            console.log("Error:", error)
        }
    }

    const fetchbyId = async (enpoints, id) => {

        try {
            const response = await api.get(`${enpoints}/${id}`)
            if (response.data) {
                console.log("prs get", response.data)
                return response.data
            }
        }
        catch (error) {
            console.error("Error:", error);
        }
    }

    const Delete = async (enpoints, id) => {
        try {
            const response = await api.delete(`${enpoints}/${id}`)
            if (response.data) {
                console.log("prs get", response.data)
                return response.data
            }
        }
        catch (error) {
            console.error("Error:", error);
        }
    }

    const generate = async (enpoints, data) => {
        if (!isSignedIn) return;
        try {
            const response = await api.post(`${enpoints}`, data)
            if (response.data) {
                console.log("prs added", response.data)
                return response.data
            }
        }
        catch (error) {
            console.error("Error:", error);
            // Re-throw or handle? Original caught and logged.
            // form.jsx tries to catch errors from generate. 
            // If I catch here and don't rethrow, form.jsx won't see error?
            // Original `function.js` line 183 caught and logged. 
            // form.jsx line 177 catches error.
            // If `generate` returns undefined (because of catch), form.jsx checks `if (response)`.
            // So behavior is preserved.
        }
    }



    const sendPr = async (enpoints, id) => {
        try {
            const response = await api.post(`${enpoints}/${id}`)
            if (response) {
                console.log("pr send ", response)
                return response
            }
        }
        catch (error) {
            console.error("Error:", error);

        }
    }
    return {
        addorUpdateprs,
        DeleteImage,
        uploadPrImage,
        Preview,
        getPrs,
        GETDATA,
        UpdateImage,
        fetchbyId,
        Delete,
        sendPr,
        generate
    };
};
