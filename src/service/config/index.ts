import axios from "axios";
import { getCookies } from "../../utils/cocies";

const http = axios.create({
    baseURL: "http://store.go-clothes.uz:5555/v1"
})


http.interceptors.request.use((config) => {
    const token = getCookies("token")
    if (token) {
        config.headers["Authorization"] = token
    }
    return config
})

export default http