import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import vueRoute from "vue-router";
import { routes } from "./router/router";
Vue.config.productionTip = false;

Vue.use(vueRoute);

const router = new vueRoute({
  routes,
});
new Vue({
  vuetify,
  router,

  render: (h) => h(App),
}).$mount("#app");
