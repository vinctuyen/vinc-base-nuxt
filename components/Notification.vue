<template>
  <div></div>
</template>
<script>
import { mapState } from "vuex";
import { PAGES, ERROR } from "~/config/constRouter";

export default {
  name: "Notification",
  data() {
    return {
      PAGES,
      ERROR,
    };
  },
  computed: mapState({
    message: (state) => state.error.message,
    code: (state) => state.error.code,
  }),
  watch: {
    code: function (code) {
      if (code) {
        if (code == 500) {
          // for error redirect 500
          this.$router.push(this.ERROR.error500.path);
        } else if (code == 404) {
          // for error redirect 404
          this.$router.push(this.ERROR.page404.path);
        } else if (code == 401) {
          // for error token need login
          this.$cookies.remove("token");
          this.$router.push(this.PAGES.login.path);
        } else if (code == 200) {
          // for noti success
          alert(this.message);
        } else {
          // for noti error
          alert(this.message);
        }
      }
    },
  },
  methods: {},
};
</script>
