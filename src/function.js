import api from "./api/axiosinterceptor";
import ENDPOINTS from "./utils/ENDPOINTS";
import { ulid } from "ulid";



export async function addorUpdateprs(enpoints, data, id, token) {

    try {
        const response = await api.put({
            url: `${enpoints}/${id}`,
            data: data, token: token
        })
        if (response) {
            console.log("prs added", response)
            return response
        }
    }
    catch (error) {
        console.error("Error:", error);
    }

}

export async function DeleteImage(enpoints, id, token) {
    try {

        const response = await api.delete({
            url: `${enpoints}/${id}/image`,
            token: token
        })
        if (response) {
            console.log("prs deleted", response)
            return response
        }
    }
    catch (error) {
        console.error("Error:", error);
    }

}
export async function uploadPrImage(enpoints, id, token) {
    try {
        const response = await api.delete({
            url: `${enpoints}/${id}/image`,
        })
        if (response) {
            console.log("prs deleted", response)
            return response
        }
    }
    catch (error) {
        console.error("Error:", error);
    }

}


export async function Preview(enpoints, id, token) {
    try {
        const response = await api.get({
            url: `${enpoints}/${id}/preview`,
            token: token
        })
        if (response) {
            console.log("prs preview", response)
            return response
        }
    }
    catch (error) {
        console.error("Error:", error);
    }

}


export async function getPrs(enpoints, token) {
    try {
        const response = await api.get({
            url: `${enpoints}`,
            token: token
        })
        if (response) {
            console.log("prs get", response)
            return response
        }
    }
    catch (error) {
        console.error("Error:", error);
    }

}


export async function GETDATA(enpoints, token) {
    try {
        const response = await api.get({
            url: `${enpoints}`,
            token: token
        })
        if (response) {
            console.log(" GENERATE CREDITS", response)
            return response
        }
    }
    catch (error) {
        console.error("Error:", error);
    }

}


export async function UpdateImage(endpionts, data, id, token) {
    try {
        const response = await api.put({
            url: `${endpionts}/${id}/image`,
            data: data,
            token: token
        })
        return response
    }
    catch {
        console.log("Error:")
    }
}





export async function fetchbyId(enpoints, id, token) {
    try {
        const response = await api.get({
            url: `${enpoints}/${id}`,
            token: token
        })
        if (response) {
            console.log("prs get", response)
            return response
        }
    }
    catch (error) {
        console.error("Error:", error);
    }

}







export async function Delete(enpoints, id, token) {
    try {
        const response = await api.delete({
            url: `${enpoints}/${id}`,
            token: token
        })
        if (response) {
            console.log("prs get", response)
            return response
        }
    }
    catch (error) {
        console.error("Error:", error);
    }

}
// export async function generate(enpoints,data)
export async function generate(enpoints, data, token) {

    try {
        const response = await api.post({
            url: `${enpoints}`,
            data: data, token: token
        })
        if (response) {
            console.log("prs added", response)
            return response
        }
    }
    catch (error) {
        console.error("Error:", error);
    }

}



