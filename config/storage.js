import { TOKEN } from ".";

export const setToken = (token) => {
  localStorage.setItem(TOKEN, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN);
};

export const setUser = (auth) => {
  localStorage.setItem("user", JSON.stringify(auth));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
