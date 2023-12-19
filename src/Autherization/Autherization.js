import axios from "axios";

const token = localStorage.getItem("token");
const companyId =  localStorage.getItem("companyId")
// 13.126.229.168:4445
const api = axios.create({
  baseURL: 'http://localhost:4444', 
  headers: {
    'Authorization': `Bearer ${token}`, 
    'Content-Type': 'application/json',
    'x-company-id': companyId, 
  },
});

export default api; 
