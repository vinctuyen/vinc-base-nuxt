import CallAPI from "./request.js";
import URL from "./constAPI";

const login = (params) => {
  let service = CallAPI(params.store, params.url, null);
  return service({
    url: URL.AUTH.LOGIN,
    method: "POST",
    data: params.data,
  });
};

export { login };
