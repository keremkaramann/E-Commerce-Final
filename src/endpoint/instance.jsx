import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com/",
    headers: {
      Authorization: `${token}`,
    },
  });
};
export let API = axiosWithAuth();
