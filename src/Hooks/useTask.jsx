import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "./useAxios/useAxiospublic";
// import useAuth from "./useAuth";

const useTask = () => {
    // const { user } = useAuth()
    const axiospublic = useAxiospublic()
  //tan stack query
  const { refetch, data:tasks=[] } = useQuery({
   
    queryKey: ["tasks"],  // should be unique
    queryFn: async () => {
      
        // console.log(user?.email)
        const res = await axiospublic.get(`/assignments`)
        // console.log(res.data)
        return res.data
      },
  });
  return [tasks,refetch]
};

export default useTask;