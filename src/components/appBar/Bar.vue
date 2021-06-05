<template>
  <v-app-bar app flat color="#021421">
    <v-toolbar-title>
      <v-img src="../../assets/images/artify.webp"></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn icon plain>
      <v-icon color="white">
        mdi-apps
      </v-icon>
    </v-btn>

    <v-btn class="nav-items" small color="#114a71" text plain>
      <v-icon color="white">
        mdi-magnify
      </v-icon>
      <span style="color:white">
        Search
      </span>
    </v-btn>

    <v-btn class="nav-items" color="#f17b22" small>
      <span style="color:white">
        Log in
      </span>
    </v-btn>
    <v-btn text plain>
      <span style="color:white">
            Create an acount
      </span>
    </v-btn>
  </v-app-bar>
</template>
<style scoped>
.nav-items {
  margin-left: 18px;
}
</style>
