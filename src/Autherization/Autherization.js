import axios from "axios";

const token = localStorage.getItem("token");
const companyId =  localStorage.getItem("companyId")
// 13.126.229.168:4445
const api = axios.create({
  baseURL: 'https://ems-app1.onrender.com', 
  headers: {
    'Authorization': `Bearer ${token}`, 
    'Content-Type': 'application/json',
    "x-access-token": token,
    'x-company-id': companyId  

  },
});

export default api; 
