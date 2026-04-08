// LOCAL COMPONENTS
import axiosInstance from "@/lib/axiosInstance";
import normalizeError from "@/utils/normalizeError";

const registerUser = async (userData) => {
  try {
    const res = await axiosInstance.post("/auth", userData);

    return res.data;
  } catch (error) {
    throw normalizeError(error);
  }
};
export default registerUser;
