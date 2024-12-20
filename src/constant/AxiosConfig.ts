import axios from "axios";

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(
  function (config) {
    config.baseURL = "https://api.themoviedb.org/3/";
    config.headers["Content-Type"] = "application/json";
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzc1NmQ2MGNlYzcwZWI2YWFlOGQ4OTMzZmU4NThjMCIsIm5iZiI6MTczNDAyMTY2NS42MDksInN1YiI6IjY3NWIxMjIxY2NmNGRmOTY2ODIzMDE4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CzHrXwgdYVXWVZ3vTWst1Jsax3Rxy5aeRj3U9nM1uyU`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    // Do somthing with response
    // add refresh token req on expired token
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
