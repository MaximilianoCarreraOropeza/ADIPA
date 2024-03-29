import axios from "axios";

const ApiManager = axios.create({ 
    baseURL: "http://192.168.0.10:8080/adipa/",
    responseType: "json",
    withCredentials: true,
});

export default ApiManager;