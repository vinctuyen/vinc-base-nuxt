<template>
  <div>
    <Notification />
    <Nuxt class="main" />
  </div>
</template>

<script>
import Notification from "~/components/Notification";
import { localize } from "vee-validate";
export default {
  components: {
    Notification,
  },
  data() {
    localize("ja");
    return {};
  },
};
</script>
