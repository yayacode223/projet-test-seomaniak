import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3002/api/",
  withCredentials: true, // 
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // access token
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});


/* axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    
    if (
      (error.response?.status === 403 || error.response?.status === 401) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const res = await axiosInstance.post("token/refresh-token");

        const newAccessToken = res.data.accessToken;

        localStorage.setItem("token", newAccessToken);

        
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        
        return axiosInstance(originalRequest);
      } catch (err) {
        
        console.error("Erreur de refresh token :", err);
        localStorage.removeItem("token");
        window.location.href = "/login"; 
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);
 */