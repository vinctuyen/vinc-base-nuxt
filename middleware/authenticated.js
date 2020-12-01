// this example middleware
import axios from "axios";
export default async (context) => {
  if (!context.app.$cookies.get("token")) {
    return context.redirect("/login");
  }
  // api check token exist
  await axios
    .post(context.$config.apiUrl + "/api/v1/check-token", {
      token: context.app.$cookies.get("token"),
    })
    .then(function (response) {
      if (response.data.code != 200) {
        context.app.$cookies.remove("token");
        return context.redirect("/login");
      }
    })
    .catch(() => {
      context.app.$cookies.remove("token");
      return context.redirect("/login");
    });
};
