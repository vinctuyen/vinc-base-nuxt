import axios from "axios";
// eslint-disable-next-line no-unused-vars
function CallAPI(store, url, token) {
  const service = axios.create({
    baseURL: url, // url api here
    timeout: 60000,
  });
  // Request interceptors
  service.interceptors.request.use(
    (config) => {
      config.headers["X-Requested-With"] = " XMLHttpRequest";
      config.headers["Content-Type"] = "application/json";
      config.headers["Access-Control-Allow-Origin"] = "*";
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      // Do something with request error
      Promise.reject(error);
    }
  );

  // response pre-processing
  service.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      // send message in store
      if (error.response && error.response.data) {
        store.commit("error/SET_ERROR", error.response.data);
      }
      return Promise.reject(error);
    }
  );
  return service;
}

export default CallAPI;
