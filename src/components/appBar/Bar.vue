<template>
  <v-app-bar app color="white"  flat>
    <v-container class="py-0 fill-height">
      <span class="logo">AGRI+</span>
      <v-spacer></v-spacer>
      <v-btn
        style=" font-weight: bold;
  font-family: gotham; 
  font-size: 25px; "
        v-for="link in links"
        :key="link"
        text
      >
        <router-link
          style="text-decoration: none;
    color: black;
    justify:center
    "
          :to="link.link"
          >{{ link.name }}</router-link
        >
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-btn depressed color="#DDA15E" large>
          <span style="color: white"> <router-link
          style="text-decoration: none;
    color: black;
    justify:center
    "
          to="/contact"
          >Contact us</router-link
        > </span>
        </v-btn>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    links: [
      { name: "Home", link: "/" },
      { name: "About Us", link: "/about" },
      { name: "products", link: "/products" },
    ],
  }),
};
</script>
<style scoped>
.nav-items {
  margin-left: 18px;
}
.logo {
  font-weight: bold;
  color: #dda15e;
  font-family: gotham;
  font-size: 30px;
}
</style>
