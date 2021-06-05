<template>
  <v-app id="inspire">
    <v-app-bar app>
      <Bar />
    </v-app-bar>

    <v-main style="background-color: #021827; padding-bottom: 100px;">
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Bar from "./components/appBar/Bar";

import Footer from "./components/footer/footer";

export default {
  components: {
    Bar,

    Footer,
  },
  data: () => ({}),
};
</script>
<style>
* {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  text-transform: none;
  font-weight: 400;
  letter-spacing: 0.5px;
}
</style>
