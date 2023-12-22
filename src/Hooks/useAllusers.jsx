import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "./useAxios/useAxiospublic";


const useAllusers = () => {
    // const { user } = useAuth()
    const axiosPublic = useAxiospublic()
  //tan stack query
  const { refetch, data:users=[] } = useQuery({
   
    queryKey: ["users"],  // should be unique
    queryFn: async () => {
      
        // console.log(user?.email)
        const res = await axiosPublic.get(`/users`)
        return res.data
      },
  });
  return [users,refetch]
};

export default useAllusers;