import axios from "axios";

const token = localStorage.getItem("token");
const companyId =  localStorage.getItem("companyId")

const api = axios.create({
  baseURL: 'http://localhost:4444', 
  headers: {
    'Authorization': `Bearer ${token}`, 
    'Content-Type': 'application/json',
    'x-company-id': companyId, // Add the 'x-company-id' header here
  },
});

export default api;
