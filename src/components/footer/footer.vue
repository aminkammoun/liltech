<template>
  <v-footer color="#283618" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        <router-link
          style="text-decoration: none;
    color: white;
    justify-content:center
    "
          :to="link.link"
          >{{ link.name }}</router-link
        >
      </v-btn>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    links: [
      { name: "Home", link: "/" },
      { name: "About Us", link: "/about" },
      { name: "products", link: "/products" },
      { name: "Contact Us", link: "/contact" },
    ],
  }),
};
</script>
