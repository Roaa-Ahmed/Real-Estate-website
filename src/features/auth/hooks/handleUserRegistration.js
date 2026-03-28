// EXTERNAL COMPONENTS
import { enqueueSnackbar } from "notistack";
import { flushSync } from "react-dom";
import { useCallback } from "react";

// LOCAL COMPONENTS
import normalizeError from "@/utils/normalizeError";

const HandleUserRegistration = ({
  setEmail,
  refetch,
  mutation,
  setExistEmail,
}) => {
  return useCallback(
    async (values, formData) => {
      try {
        flushSync(() => {
          setEmail(values.email);
        });
        const { data, isSuccess } = await refetch({
          queryKey: ["checkEmail", values.email],
        });

        if (isSuccess && data.data?.length > 0) {
          formData ? setExistEmail(true) : setExistEmail(false);

          enqueueSnackbar("Email already exists", { variant: "info" });
          return;
        }
        await mutation.mutateAsync(values);
        formData && setExistEmail(false);

        formData?.reset();
      } catch (error) {
        throw normalizeError(error);
      }
    },
    [refetch, mutation, setEmail, setExistEmail]
  );
};
export default HandleUserRegistration;
