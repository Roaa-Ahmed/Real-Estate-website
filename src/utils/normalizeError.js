const normalizeError=(error)=> {
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }

  if (typeof error?.response?.data === "string") {
    return error.response.data;
  }

  if (error.message === "Network Error") {
    return "Network error. Please try again.";
  }

  return "Something went wrong. Please try again.";
}
export default normalizeError