import axios from "axios";

const token = localStorage.getItem("token");
const companyId =  localStorage.getItem("companyId")

const api = axios.create({
  baseURL: 'https://ems-app1.onrender.com', 
  headers: {
    'Authorization': `Bearer ${token}`, 
    'Content-Type': 'application/json',
    'x-company-id': companyId, // Add the 'x-company-id' header here
  },
});

export default api; j
