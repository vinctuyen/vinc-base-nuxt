import Vue from "vue";
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize,
} from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import ja from "./message.json"; // import language file

extend("name_validate", {
  message: () => "accept only number",
  validate: (value) => {
    let number = /^[0-9][A-Za-z0-9 -]*$/; // regex here or condition
    if (number.test(value)) {
      return true;
    }
    return false;
  },
});

localize({
  ja: {
    messages: ja.messages,
    fields: {
      name_field: {
        email: "content message",
      },
    },
  },
});

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule],
    message: ja[rule],
  });
});

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
