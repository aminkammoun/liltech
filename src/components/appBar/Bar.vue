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
    justify:center" 
    
          :to="link.link" id="nav"
          >{{ link.name }}</router-link
        >
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-btn depressed color="#bc6c25" large>
          <span style="color: white"> <router-link
          style="text-decoration: none;
    color: #FFFEF6;
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
@font-face {
    font-family: "GothamBook";
    src: url("../../assets/images/Gotham-Font/GothamBook.ttf");
}
@font-face {
    font-family: "GothamBold";
    src: url("../../assets/images/Gotham-Font/GothamBold.ttf");
    
}
@font-face {
    font-family: "Gotham";
    src: url("../../assets/images/Gotham-Font/GothamMedium.ttf");
}
.nav-items {
  margin-left: 18px;
}
.logo {
  color: #dda15e;
  font-family: "Gotham";
  font-size: 30px;
}
#nav{
    font-family: "GothamBook";
    font-size: 20px;
    color : #606c38
}
</style>
