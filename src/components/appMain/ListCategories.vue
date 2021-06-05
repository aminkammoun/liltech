<template>
  <v-flex
    style="background-color: #021421;
    margin-top: 12px; height: 55px;"
  >
    <v-layout row wrap justify-center align-center>
      <v-btn
        style="margin-top: 10px;"
        v-for="cat in categories"
        :key="cat"
        text
        plain
      >
        <span style="color:#999">{{ cat }}</span>
      </v-btn>
    </v-layout>
  </v-flex>
</template>
<script>
export default {
  data: () => ({
    categories: ["HOME", "MOVIES", "THEATER SCENES", "SERIES"],
  }),
};
</script>
