import axios from "axios";

axios.defaults.baseURL = "https://readjourney.b.goit.study/api";
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const registerUser = async (data) => {
  try {
    const response = await axios.post("/users/signup", data);
    localStorage.setItem("token", response.data.token);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axios.post("/users/signin", data);
    localStorage.setItem("token", response.data.token);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token");

  try {
    const user = await axios.get("/users/current", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return user;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const refreshUser = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) throw new Error("No refresh token");

  try {
    const res = await axios.get("/users/current/refresh", {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    const { token, refreshToken: newRefreshToken } = res.data;

    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", newRefreshToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return res.data;
  } catch (e) {
    console.error("Refresh error:", e.response?.data || e.message);
    throw new Error(e.message);
  }
};

export const logoutUser = async () => {
  try {
    await axios.post("/users/signout");
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  } catch (e) {
    throw new Error(e.message);
  }
};
