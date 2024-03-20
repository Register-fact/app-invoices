import axios from "axios";
import {API_URL} from "@env"


const InvoiceApi = axios.create({
    baseURL: API_URL,
});

export default InvoiceApi;
