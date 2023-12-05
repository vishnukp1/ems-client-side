import axios from "axios";

const token = localStorage.getItem("token");
const companyId =  localStorage.getItem("companyId")

const api = axios.create({
  baseURL: 'https://13.126.229.168:4445', 
  headers: {
    'Authorization': `Bearer ${token}`, 
    'Content-Type': 'application/json',
    'x-company-id': companyId, 
  },
});

export default api; 
