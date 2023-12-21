import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxios/useAxiossecure";
// import useAuth from "./useAuth";

const useAssignment = () => {
    // const { user } = useAuth()
    const axiossecure = useAxiossecure()
  //tan stack query
  const { refetch, data:assignments=[] } = useQuery({
   
    queryKey: ["assignments"],  // should be unique
    queryFn: async () => {
      
        // console.log(user?.email)
        const res = await axiossecure.get(`/assignments`)
        return res.data
      },
  });
  return [assignments,refetch]
};

export default useAssignment;