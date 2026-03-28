
import { useQuery } from "@tanstack/react-query";

// LOCAL COMPONENTS
import axiosInstance from "@/lib/axiosInstance";

const checkEmailRequest = async ({email}) => {
  const res = await axiosInstance.get("/auth", { params: { email }});
    // const res = await axiosInstance.get(api, { params: { email }});


  return res;
};

const useCheckEmail = (email) => {
  const checkEmail=useQuery({
    queryKey: ["checkEmail", email],
    queryFn: ({signal}) => checkEmailRequest({email:email,signal}),
    enabled: false, 
    retry: false, 
  });
  return checkEmail
};

export default useCheckEmail;
