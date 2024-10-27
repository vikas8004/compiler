import axios from "axios"
import { LANGUAGE_VERSIONS } from "./constants"
const baseUrl = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
})
export const executeCode = async (language, sourceCode) => {
    const res = await baseUrl.post("/execute", {
        language,
        version: LANGUAGE_VERSIONS[language],
        files: [{
            content: sourceCode
        }]
    })
    return res.data;
}