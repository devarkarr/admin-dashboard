import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const authJsonHeaders = () => {
  return {
    Accept: "application/json",
    // Authorization: `Bearer ${useStore.getState().auth.accessToken}`,
  };
};
