import { toast } from "react-toastify";
import { API } from "../../endpoint/instance";

export const USER_ACT = "USER";

export const user = (id) => ({
  type: USER_ACT,
  payload: id,
});

export const handleLogin = (data, history) => (dispatch) => {
  API.post("/login", data)
    .then((res) => {
      dispatch(user(res.data));
      const token = res.data.token;
      localStorage.setItem("token", token);
      history.push("/");
      toast.success(`Welcome ${res.data.name}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    })
    .catch((err) => {
      console.log("Login Error Msg:", err);
      toast.error("Register First!!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });
};
