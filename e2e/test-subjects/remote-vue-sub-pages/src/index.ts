import { createApp } from "@leanjs/vue-router";

import { routes } from "./routes";
import RemoteVueSubPages from "./App.vue";

export default createApp(RemoteVueSubPages, {
  appName: "RemoteVueSubPages",
  router: {
    routes,
  },
});
