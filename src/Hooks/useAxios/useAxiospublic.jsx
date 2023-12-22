import axios from "axios";
const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000/',
    // baseURL: 'https://server-ruby-pi.vercel.app/',
    withCredentials: true
})
const useAxiospublic = () => {
    return axiosPublic
};

export default useAxiospublic;