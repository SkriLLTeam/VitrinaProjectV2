import axios from "axios";

export const setupAxiosInterceptors = (app) => {
  app.config.globalProperties.$axios = axios;

  axios.interceptors.request.use(
    (config) => {
      const i18n = app.config.globalProperties.$i18n;

      if (config.method === "get") {
        config.headers["Accept-Language"] = i18n.locale;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
