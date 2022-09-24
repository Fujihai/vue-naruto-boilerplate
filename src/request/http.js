import axios from "axios";

const BASE_URL_MAP = {
  development: "",
  production: "",
};

const service = axios.create({
  baseURL: `${BASE_URL_MAP[process.env.NODE_ENV]}`,
  timeout: 1500,
});

service.interceptors.request.use(
  (config) => {
    if (["post", "put", "delete"].includes(config.method)) {
      config.headers["Content-Type"] = "application/json";
      config.data = JSON.stringify(config.data);

      if (config.type === "form") {
        config.headers["Content-Type"] = "multipart/form-data";
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        case 400:
          alert("400");
          break;
        case 401:
          alert("401");
          break;
        case 403:
          alert("403");
          break;
        case 404:
          alert("404");
          break;
        case 502:
          alert("502");
          break;
      }
      return Promise.reject(error.response);
    }
  }
);

export default service;
