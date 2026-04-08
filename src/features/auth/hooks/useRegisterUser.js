import { useMutation } from "@tanstack/react-query";
// import registerUser from "../api/registerUser";
import { useSnackbar } from "notistack";

// LOCAL COMPONENTS
import normalizeError from "@/utils/normalizeError";
import { registerUser } from "@/features/auth";

const useRegisterUser = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      enqueueSnackbar(" User registered!", { variant: "success" });
    },
    onError: (error) =>
      enqueueSnackbar(normalizeError(error), { variant: "error" }),
  });
};
export default useRegisterUser;
