import { useGoogleLogin } from "@react-oauth/google";

// LOCAL COMPONENTS
import HandleUserRegistration from "./handleUserRegistration";
import axiosInstance from "@/lib/axiosInstance";

const useRegisterWithGoogle = ({
  setExistEmail,
  setEmail,
  refetch,
  mutation,
}) => {
  const handleRegistrationGoogle = HandleUserRegistration({
    setEmail,
    refetch,
    mutation,
    setExistEmail,
  });

  return useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axiosInstance.get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`
      );

      const userData = {
        name: userInfo.data.name,
        email: userInfo.data.email,
        avatar: userInfo.data.picture,
        googleId: userInfo.data.sub,
      };
      console.log("Google User:", userInfo.data, userData);
      await handleRegistrationGoogle(userData);
    },
  });
};
export default useRegisterWithGoogle;
