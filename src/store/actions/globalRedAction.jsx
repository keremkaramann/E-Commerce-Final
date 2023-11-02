import { API } from "../../endpoint/instance";

export const ROLES = "ROLES";
export const SET_THEME = "SET_THEME";
export const CATEGORIES = "CATEGORIES";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const roles = (roles) => ({
  type: ROLES,
  payload: roles,
});

export const categories = (categories) => ({
  type: CATEGORIES,
  payload: categories,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const fetchRoles = () => (dispatch) => {
  API.get("/roles")
    .then((res) => {
      dispatch(roles(res.data));
    })
    .catch((err) => {
      console.error("Error fetching roles:", err);
    });
};
