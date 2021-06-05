<template
  ><v-container grid-list-xs>
    <v-row>
      <template v-for="n in categories.length - 1">
        <v-col class="mt-2" :key="n" cols="12" md="6" >
          <span style="color:white"
            ><strong>{{ categories[n] }}</strong></span
          >
        </v-col>

        <v-col
          class="mt-2 d-flex flex-row-reverse"
          :key="`${n}*${n}`"
          cols="12"
          md="6"
        >
          <v-row justify="end">
            <v-btn text plain
              ><span style="color:#999">show more ...</span></v-btn
            >
          </v-row>
        </v-col>

        <v-col
          v-for="j in 6"
          :key="`${n}${j}`"
          cols="6"
          md="2"
          xs="12"
          sm="6"
          class="resources"
        >
          <v-sheet height="250">
            <v-img
              class="res"
              height="100%"
              width="100%"
              :src="images[j].Poster"
            ></v-img>
          </v-sheet>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    hover: false,
    url: "http://www.omdbapi.com/?i=tt3896198&apikey=9934a390&s=dark",
    categories: [
      "New on Artify",
      "Popular",
      "Soon",
      "Cinephiles favorite",
      "Classics",
      "Documentaries",
      "Theatre Scenes",
      "Short movies",
    ],
    images: [],
  }),
  created() {
    axios
      .get(this.url)
      .then((res) => {
        this.images = res.data.Search;
        console.log(this.images);
      })
      .catch(function(error) {
        console.error(error);
      });
  },
};
</script>
<style scoped>
h2 {
  color: white;
}
#overlay {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(#000000, 0.85);
  width: 100%;
  height: 100%;
  position: absolute;
  top: auto;
  bottom: 0;
  opacity: 0;
  transform: translateY(100%);
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.resources:hover .res {
  transform: scale(1.15);
  transition: transform 0.5s;
  z-index: 1000;
}
.resources:hover #overlay {
  opacity: 1;
}
</style>
