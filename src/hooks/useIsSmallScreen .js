import { useMediaQuery } from "@mui/material";

 const useIsSmallScreen = (query = "(max-width:600px)") => {
  return useMediaQuery(query);
};
export default useIsSmallScreen