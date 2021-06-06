import home from "../components/home/home.vue";
import about from "../components/about/about.vue";
import contact from "../components/contact/contact.vue";

export const routes = [
  {
    path: "/",
    component: home,
    name: "home",
  },
  {
    path: "/about",
    component: about,
    name: "about",
  },
  {
    path: "/contact",
    component: contact,
    name: "contact",
  },
];
